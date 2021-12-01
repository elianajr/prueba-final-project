from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

account_fav_center = db.Table('account_fav_center',
    db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True),
    db.Column('center_id', db.Integer, db.ForeignKey('center.id'), primary_key=True)
)


account_fav_spot = db.Table('account_fav_spot',
    db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True),
    db.Column('hotspot_id', db.Integer, db.ForeignKey('hotspot.id'), primary_key=True)
)


review_spot = db.Table('review_spot',
    db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True),
    db.Column('hotspot_id', db.Integer, db.ForeignKey('hotspot.id'), primary_key=True)
)


review_center = db.Table('reviewcenter',
    db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True),
    db.Column('center_id', db.Integer, db.ForeignKey('center.id'), primary_key=True)
)


account_sport = db.Table('account_sport',
    db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True),
    db.Column('sport_id', db.Integer, db.ForeignKey('sport.id'), primary_key=True)
)


center_sport = db.Table('center_sport',
    db.Column('center_id', db.Integer, db.ForeignKey('center.id'), primary_key=True),
    db.Column('sport_id', db.Integer, db.ForeignKey('sport.id'), primary_key=True)
)



class Account(db.Model):
    __tablename__: "account"

    id = db.Column(db.Integer, primary_key=True)
    sport_id = db.Column(db.Integer, db.ForeignKey("sport.id"), nullable=False)
    chat_id = db.Column(db.Integer, db.ForeignKey("chat.id"), nullable=False)
    email = db.Column(db.String(), unique=True, nullable=False)
    _password = db.Column(db.String(), unique=False, nullable=False)
    username = db.Column(db.String(), unique=True, nullable=False)
    name = db.Column(db.String(), unique=False, nullable=False)
    photo = db.Column(db.Text(), unique=False, nullable=True)
    _is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    _is_waterdropper = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    _is_center = db.Column(db.Boolean(), unique=False, nullable=False, default=True)

    has_waterdropper = db.relationship('Waterdropper')
    has_center = db.relationship('Center')

    have_account_favcenter = db.relationship('Center', secondary=account_fav_center, back_populates="have_favcenter_account")
    have_account_favspot = db.relationship('Hotspot', secondary=account_fav_spot, back_populates="have_favspot_account")
    have_account_revcenter = db.relationship('Center', secondary=review_center, back_populates="have_revcenter_account")
    have_account_revspot = db.relationship('Hotspot', secondary=review_spot, back_populates="have_revspot_account")
    have_account_sport = db.relationship('Sport', secondary=account_sport, back_populates="have_sport_account")
    
    # has_chat = db.relationship("Chatassociation", back_populates="chat_has")


    def __repr__(self):
        return f'Account {self.email}, id: {self.id}, username: {self.username}, name: {self.name}, sport_id: {self.sport_id}, level: {self.level}, photo: {self.photo}, chat_id: {self.chat_id}' 

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username, 
            "name": self.name, 
            "sport_id": self.sport_id, 
            "level": self.level, 
            "chat_id": self.chat_id,
            "photo": self.photo,
            "waterdropper": [waterdropper.to_dict() for waterdropper in has_waterdropper],
            "center": [center.to_dict() for center in has_center]
        }

    
    

class Waterdropper(db.Model):
    __tablename__: "waterdropper"

    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)
    level = db.Column(db.Enum("Beginner", "Intermediate", "Advanced", "Professional"), nullable=False)
    location = db.Column(db.String(), unique=False, nullable=False)

    def __repr__(self):
        return f'Waterdropper is account_id: {self.account_id}, level: {self.level}, location: {self.location}' 

    def to_dict(self):
        return {
            "id": self.id,
            "account_id": self.account_id,
            "level": self.level,
            "location": self.location
        }


class Center(db.Model):
    __tablename__: "center"

    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)
    address = db.Column(db.String(), unique=False, nullable=True)

    have_favcenter_account = db.relationship('Account', secondary=account_fav_center, back_populates="have_account_favcenter")
    have_revcenter_account = db.relationship('Account', secondary=review_center, back_populates="have_account_revcenter")
    have_center_sport = db.relationship('Sport', secondary=center_sport, back_populates="have_sport_center") 
    
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
    specie_id = db.Column(db.Integer, db.ForeignKey("specie.id"), nullable=False)
    account_id = db.Column(db.Integer, db.ForeignKey("account.id"), nullable=False)
    sport_id = db.Column(db.Integer, db.ForeignKey("sport.id"), primary_key=True) 
    name = db.Column(db.String(), unique=False, nullable=False)
    photo = db.Column(db.Text(), unique=False, nullable=False)
    level = db.Column(db.String(), unique=False, nullable=True)
    location = db.Column(db.String(), unique=False, nullable=True)
    geometry = db.Column(db.String(), unique=False, nullable=True)
    

    have_favspot_account = db.relationship('Account', secondary=account_fav_spot, back_populates="have_account_favspot")
    have_revspot_account = db.relationship('Account', secondary=review_spot, back_populates="have_account_revspot")

    def __repr__(self):
        return f'Hotstop {self.id}, specie_id: {self.specie_id}, account_id: {self.account_id}, sport_id: {self.sport_id}, name: {self.name},  level: {self.level}, photo: {self.photo}, location: {self.location}, geometry: {self.geometry}' 

    def to_dict(self):
        return {
            "id": self.id,
            "sport_id": self.sport_id, 
            "specie_id": self.specie_id, 
            "account_id": self.account_id,
            "name": self.name,
            "photo": self.photo, 
            "level": self.level,
            "location": self.location,
            "geometry": self.geometry
        }


class Specie(db.Model):
    __tablename__: "specie"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    photo = db.Column(db.String(), unique=False, nullable=False)
    description = db.Column(db.String(), unique=False, nullable=False)
    is_reported = db.Column(db.Boolean(), unique=False, nullable=False)

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
    have_sport_center = db.relationship('Center', secondary=center_sport, back_populates="have_center_sport")

    def __repr__(self):
        return f'Sport {self.id}, name: {self.name}' 

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }


class Chat(db.Model):
    __tablename__: "chat"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)

    # has_account = db.relationship("Chatassociation", back_populates="account_has")
    
    def __repr__(self):
        return f'Chat {self.id}, name: {self.name}' 

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }


# class Chatassociation(db.Model):
#     __tablename__ = "chatassociation"

#     id = db.Column(db.Integer, primary_key=True)
#     account_id = db.Column(db.Integer, db.ForeignKey("Account.id"), primary_key=True)
#     chat_id = db.Column(db.Integer, db.ForeignKey("chat.id"), primary_key=True)
#     message = db.Column(db.String(), unique=False, nullable=False)
#     date = db.Column(db.DateTime(timezone=False))

#     chat_has = db.relationship("Chat", back_populates="has_chat")
#     account_has = db.relationship("Account", back_populates="has_account")

#     def __repr__(self):
#         return f'Chatassociation {self.id}, account_id: {self.account_id}, chat_id: {self.chat_id}, message: {self.message}, date: {self.date}' 

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "account_id": self.account_id,
#             "chat_id": self.chat_id,
#             "message": self.message, 
#             "date": self.date
#         }



class News(db.Model):
    __tablename__: "news"

    id = db.Column(db.Integer, primary_key=True)
    
    def __repr__(self):
        return f'New {self.id}' 

    def to_dict(self):
        return {
            "id": self.id
        }