from enum import Enum

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash

# import os
# import sys
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.dialects.postgresql import VARCHAR
# from sqlalchemy.orm import relationship
# from sqlalchemy import Column, ForeignKey, Integer, String, Enum, Boolean, Table, Text
# #Import del cifrado de la password
from werkzeug.security import check_password_hash

db = SQLAlchemy()

# class Level(Enum):
#     beginner = "Beginner"
#     intermediate = "Intermediate"
#     advanced = "Advanced"
#     professional = "Professional"

species_hotspot = db.Table('species_hotspot',
    db.Column('specie_id', db.Integer, db.ForeignKey('specie.id'), primary_key=True),
    db.Column('hotspot_id', db.Integer, db.ForeignKey('hotspot.id'), primary_key=True)
)

waterdropper_fav_center = db.Table('waterdropper_fav_center',
    db.Column('waterdropper_id', db.Integer, db.ForeignKey('waterdropper.id'), primary_key=True),
    db.Column('center_id', db.Integer, db.ForeignKey('center.id'), primary_key=True)
)


waterdropper_fav_spot = db.Table('waterdropper_fav_spot',
    db.Column('waterdropper_id', db.Integer, db.ForeignKey('waterdropper.id'), primary_key=True),
    db.Column('hotspot_id', db.Integer, db.ForeignKey('hotspot.id'), primary_key=True)
)


account_sport = db.Table('account_sport',
    db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True),
    db.Column('sport_id', db.Integer, db.ForeignKey('sport.id'), primary_key=True)
)


class Account(db.Model):
    __tablename__: "account"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(), unique=True, nullable=False)
    _password = db.Column(db.String(), unique=False, nullable=False)
    username = db.Column(db.String(), unique=True, nullable=False)
    photo = db.Column(db.Text(), unique=False, nullable=True)
    _is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    _is_waterdropper = db.Column(db.Boolean(), unique=False, nullable=False)
    sport_id = db.Column(db.Integer, db.ForeignKey("sport.id"), nullable=False)

    has_waterdropper = db.relationship('Waterdropper', backref="account")
    has_center = db.relationship('Center', backref="account")
    have_account_sport = db.relationship('Sport', secondary=account_sport, back_populates="have_sport_account")


    def __repr__(self):
        return f'Account {self.email}, id: {self.id}, username: {self.username}, sport_id: {self.sport_id}, photo: {self.photo}, waterdropper: {self._is_waterdropper}'

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "sport_id": self.sport_id,
            "photo": self.photo,
            "waterdropper": [waterdropper.to_dict() for waterdropper in self.has_waterdropper]
        }

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = generate_password_hash(
                password, 
                method='pbkdf2:sha256', 
                salt_length=16
            )

    @classmethod
    def get_by_email(cls,email):
        account = cls.query.filter_by(email=email).one_or_none()
        return account

    @classmethod
    def get_account_by_id(cls,id):
        account = cls.query.get(id)
        return account

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    def update_account(self, **kwargs):
        print(kwargs)
        for key, value in kwargs.items():
            setattr(self, key, value)
        db.session.commit()
        return self

    def soft_delete(self):
        self._is_active = False
        db.session.commit()
        return self

    def reactive_account(self, username, sport_id, password):
        self.username = username
        self.sport_id = sport_id
        self.password = password
        self.is_active = True
        db.session.commit()


class Waterdropper(db.Model):
    __tablename__: "waterdropper"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(), unique=False, nullable=False)
    last_name = db.Column(db.String(), unique=False, nullable=False)
    # level = db.Column(db.Enum(Level, name="levels"), nullable=False)
    level = db.Column(db.Enum(Level, name="levels"), nullable=False)
    location = db.Column(db.String(), unique=False, nullable=False)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)

    have_waterdropper_favcenter = db.relationship('Center', secondary=waterdropper_fav_center, back_populates="have_favcenter_waterdropper")
    have_waterdropper_favspot = db.relationship('Hotspot', secondary=waterdropper_fav_spot, back_populates="have_favspot_waterdropper")

    def __repr__(self):
        return f'Waterdropper is first_name: {self.first_name}, last_name: {self.last_name}, account_id: {self.account_id}, level: {self.level}, location: {self.location}'

    def to_dict(self):
        return {
            "id": self.id,
            "account_id": self.account_id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "level": self.level,
            "location": self.location
        }


class Center(db.Model):
    __tablename__: "center"

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(), unique=False, nullable=True)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)

    have_favcenter_waterdropper = db.relationship('Waterdropper', secondary=waterdropper_fav_center, back_populates="have_waterdropper_favcenter")
    has_reviews = db.relationship("Review_Center")

    def __repr__(self):
        return f'Center is account_id: {self.account_id}, address: {self.address}'

    def to_dict(self):
        return {
            "id": self.id,
            "account_id": self.account_id,
            "address": self.address
        }


class Hotspot(db.Model):
    __tablename__: "hotstop"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    photo = db.Column(db.Text(), unique=False, nullable=False)
    level = db.Column(db.Enum(Level, name="levels"), nullable=False)
    description = db.Column(db.String(), unique=False, nullable=False)
    latitud = db.Column(db.Float(), unique=False, nullable=False)
    longitud = db.Column(db.Float(), unique=False, nullable=False)
    category = db.Column(db.String(), unique=False, nullable=False)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)
    sport_id = db.Column(db.Integer, db.ForeignKey("sport.id"), nullable=True) 
    
    have_favspot_waterdropper = db.relationship('Waterdropper', secondary=waterdropper_fav_spot, back_populates="have_waterdropper_favspot")
    have_hotspot_specie = db.relationship('Specie', secondary=species_hotspot, back_populates="have_specie_hotspot")
    has_reviews_spot = db.relationship("Review_Hotspot")

    def __repr__(self):
        return f'Hotstop {self.id}, specie_id: {self.specie_id}, account_id: {self.account_id}, sport_id: {self.sport_id}, name: {self.name},  level: {self.level}, despcription: {self.despcription}, photo: {self.photo}, location: {self.location}, geometry: {self.geometry}' 

    def to_dict(self):
        return {
            "id": self.id,
            "sport_id": self.sport_id, 
            "specie_id": self.specie_id, 
            "account_id": self.account_id,
            "name": self.name,
            "photo": self.photo, 
            "level": self.level,
            "despcription": self.despcription,
            "latitud": self.latitud,
            "longitud": self.longitud,
            "category": self.category
        }


class Specie(db.Model):
    __tablename__: "specie"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    photo = db.Column(db.Text(), unique=False, nullable=False)
    description = db.Column(db.String(), unique=False, nullable=False)
    is_reported = db.Column(db.Boolean(), unique=False, nullable=False)

    have_specie_hotspot = db.relationship('Hotspot', secondary=species_hotspot, back_populates="have_hotspot_specie")

    def __repr__(self):
        return f'Specie {self.id}, name: {self.name}, photo: {self.photo}, description: {self.description}, is_reported: {self.is_reported}'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "photo": self.photo,
            "description": self.description,
            "is_reported": self.is_reported
        }


class Sport(db.Model):
    __tablename__: "sport"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)

    have_sport_account = db.relationship('Account', secondary=account_sport, back_populates="have_account_sport")


    def __repr__(self):
        return f'Sport {self.id}, name: {self.name}'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }


class News(db.Model):
    __tablename__: "news"

    id = db.Column(db.Integer, primary_key=True)
    photo = db.Column(db.Text(), unique=False, nullable=False)
    description = db.Column(db.String(), unique=False, nullable=False)

    def __repr__(self):
        return f'News {self.id}, photo: {self.photo}, description: {self.description}'

    def to_dict(self):
        return {
            "id": self.id,
            "photo": self.photo,
            "description": self.description
        }


class Review_Center(db.Model):
    __tablename__ = "review_centre"

    message = db.Column(db.String(), unique=False, nullable=False)
    date = db.Column(db.DateTime(timezone=False))
    puntuation = db.Column(db.Float(), nullable=False)
    waterdropper_id = db.Column(db.Integer, db.ForeignKey("waterdropper.id"), primary_key=True)
    center_id = db.Column(db.Integer, db.ForeignKey("center.id"), primary_key=True)

    written_by_waterdropper = db.relationship("Waterdropper")


    def __repr__(self):
        return f'Review_Center is center_id: {self.center_id}, waterdropper_id: {self.waterdropper_id}, message: {self.message}, date: {self.date}, puntuation: {self.puntuation}'

    def to_dict(self):
        return {
            "id": self.id,
            "center_id": self.center_id,
            "waterdropper_id": self.waterdropper_id,
            "message": self.message,
            "date": self.date,
            "puntuation": self.puntuation
        }

class Review_Hotspot(db.Model):
    __tablename__ = "review_hotspot"

    message = db.Column(db.String(), unique=False, nullable=False)
    date = db.Column(db.DateTime(timezone=False))
    puntuation = db.Column(db.Float(), nullable=False)
    waterdropper_id = db.Column(db.Integer, db.ForeignKey("waterdropper.id"), primary_key=True)
    hotspot_id = db.Column(db.Integer, db.ForeignKey("hotspot.id"), primary_key=True)

    written_by_waterdropper = db.relationship("Waterdropper")


    def __repr__(self):
        return f'Review_Hotspot is hotspot_id: {self.hotspot_id}, waterdropper_id: {self.waterdropper_id}, message: {self.message}, date: {self.date}, puntuation: {self.puntuation}'

    def to_dict(self):
        return {
            "id": self.id,
            "hotspot_id": self.hotspot_id,
            "waterdropper_id": self.waterdropper_id,
            "message": self.message,
            "date": self.date,
            "puntuation": self.puntuation
        }