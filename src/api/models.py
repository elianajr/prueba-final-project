from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects import postgresql
from werkzeug.security import generate_password_hash


db = SQLAlchemy()

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
    cover_photo = db.Column(db.Text(), unique=False, nullable=True)
    about = db.Column(db.Text(), unique=False, nullable=True)
    instagram = db.Column(db.String(), unique=False, nullable=True)
    facebook =db.Column(db.String(), unique=False, nullable=True)
    _is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    _is_waterdropper = db.Column(db.Boolean(), unique=False, nullable=False)

    has_waterdropper = db.relationship('Waterdropper', backref="account")
    has_center = db.relationship('Center', backref="account")
    have_account_sport = db.relationship('Sport', secondary=account_sport, back_populates="have_sport_account", lazy='dynamic')


    def __repr__(self):
        return f'Account is email: {self.email}, id: {self.id}, password: {self._password}, username: {self.username}, photo: {self.photo}, cover_photo: {self.cover_photo}, instagram: {self.instagram}, facebook: {self.facebook}, about: {self.about}, waterdropper: {self._is_waterdropper}'

    def to_dict(self):
        user = self.has_waterdropper if self._is_waterdropper else self.has_center

        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "photo": self.photo,
            "cover_photo": self.cover_photo,
            "instagram": self.instagram,
            "facebook": self.facebook,
            "about": self.about,
            "_is_waterdropper": self._is_waterdropper,
            # "user": list(map(lambda x: x.to_dict(), user)),
            "user": user[0].to_dict(),
            "sports": list(map(lambda sport: sport.to_dict(), self.have_account_sport))
            # "sports": [sport.to_dict() for sport in self.have_account_sport]
        }


    @classmethod
    def get_by_email(cls,email):
        account = cls.query.filter_by(email=email).one_or_none()
        return account

    @classmethod
    def get_account_by_id(cls,id):
        account = cls.query.get(id)
        return account
    
    @classmethod
    def get_all(cls):
        accounts= cls.query.all()
        return accounts

    def create(self, sports):
        for sport in sports:
            table_sport = Sport.get_sport_by_name(sport)
            if table_sport:
                self.have_account_sport.append(table_sport)

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

    def reactive_account(self, email, password):
        self.email = email
        # self.username = username
        # self.photo = photo
        # self._is_waterdropper = is_waterdropper
        self.password = password
        self._is_active = True
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update_photoaccount(self):
        db.session.add(self)
        db.session.commit()
        return self



class Waterdropper(db.Model):
    __tablename__: "waterdropper"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(), unique=False, nullable=False)
    last_name = db.Column(db.String(), unique=False, nullable=False)
    level = db.Column(db.String(), unique=False, nullable=False)
    location = db.Column(db.String(), unique=False, nullable=False)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)

    have_waterdropper_favcenter = db.relationship('Center', secondary=waterdropper_fav_center, back_populates="have_favcenter_waterdropper")
    have_waterdropper_favspot = db.relationship('Hotspot', secondary=waterdropper_fav_spot, back_populates="have_favspot_waterdropper")

    def __repr__(self):
        return f'Waterdropper is first_name: {self.first_name}, last_name: {self.last_name}, account_id: {self.account_id}, level: {self.level}, location: {self.location}'

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "level": self.level,
            "location": self.location,
            "favourite_centers": list(map(lambda center: center.to_dict(), self.have_waterdropper_favcenter)),
            # "favourite_centers": [center.to_dict() for center in self.have_waterdropper_favcenter]
            "favourite_spot": [hotspot.to_dict() for hotspot in self.have_waterdropper_favspot]
        }

    @classmethod
    def get_waterdropper_by_id(cls,id):
        waterdropper = cls.query.get(id)
        return waterdropper

    @classmethod
    def get_waterdropper_by_account_id(cls,account_id):
        account_waterdropper = cls.query.filter_by(account_id=account_id).one_or_none()
        return account_waterdropper
    
    def create_waterdropper(self):
        db.session.add(self)
        db.session.commit()
        return self

    def update_account_waterdropper(self, **kwargs):
        print(kwargs)
        for key, value in kwargs.items():
            setattr(self, key, value)
        db.session.commit()
        return self

    def add_fav_center(self,center):
        self.have_waterdropper_favcenter.append(center)
        db.session.commit()
        return self.have_waterdropper_favcenter

    def add_fav_hotspot(self,hotspot):
        self.have_waterdropper_favspot.append(hotspot)
        db.session.commit()
        return self.have_waterdropper_favspot


class Center(db.Model):
    __tablename__: "center"

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(), unique=False, nullable=True)
    phone = db.Column(db.String(), unique=False, nullable=True)
    web = db.Column(db.String(), unique=False, nullable=True)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)

    have_favcenter_waterdropper = db.relationship('Waterdropper', secondary=waterdropper_fav_center, back_populates="have_waterdropper_favcenter")
    has_reviews = db.relationship("Review_Center")

    def __repr__(self):
        return f'Center is account_id: {self.account_id}, address: {self.address}, phone: {self.phone}, web: {self.web}'

    def to_dict(self):
        return {
            "id": self.id,
            "address": self.address,
            "phone": self.phone,
            "web": self.web
            # "favourite_count": len(self.have_favcenter_waterdropper)
        }

    @classmethod
    def get_center_by_id(cls,id):
        center = cls.query.get(id)
        return center

    @classmethod
    def get_center_by_account_id(cls,account_id):
        account_center = cls.query.filter_by(account_id=account_id).one_or_none()
        return account_center

    def create_center(self):
        db.session.add(self)
        db.session.commit()
        return self

    def update_account_center(self, **kwargs):
        print(kwargs)
        for key, value in kwargs.items():
            setattr(self, key, value)
        db.session.commit()
        return self


class Hotspot(db.Model):
    __tablename__: "hotstop"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    photo = db.Column(db.Text(), unique=False, nullable=False)
    level = db.Column(db.String(), unique=False, nullable=False)
    description = db.Column(db.Text(), unique=False, nullable=True)
    latitude = db.Column(db.String(), unique=False, nullable=True)
    longitude = db.Column(db.String(), unique=False, nullable=True)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)
    sport_id = db.Column(db.Integer, db.ForeignKey("sport.id"), nullable=True)

    have_favspot_waterdropper = db.relationship('Waterdropper', secondary=waterdropper_fav_spot, back_populates="have_waterdropper_favspot")
    have_hotspot_specie = db.relationship('Specie', secondary=species_hotspot, back_populates="have_specie_hotspot")
    has_reviews_spot = db.relationship("Review_Hotspot")

    def __repr__(self):
        return f'Hotstop {self.id}, account_id: {self.account_id}, sport_id: {self.sport_id}, name: {self.name},  level: {self.level}, description: {self.description}, photo: {self.photo}'

    def to_dict(self):
        return {
            "id": self.id,
            "sport_id": self.sport_id,
            "account_id": self.account_id,
            "name": self.name,
            "photo": self.photo,
            "level": self.level,
            "description": self.description,
            "latitude": self.latitude,
            "longitude": self.longitude,
        }

    @classmethod
    def get_hotspot_by_id(cls,id):
        hotspot = cls.query.get(id)
        return hotspot
    
    def update_photohotspot(self):
        db.session.add(self)
        db.session.commit()
        return self


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
    
    @classmethod
    def get_specie_by_id(cls,id):
        specie = cls.query.get(id)
        return specie



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

    @classmethod
    def get_sport_by_name(cls,name):
        sport = cls.query.filter_by(name=name).one_or_none()
        return sport

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