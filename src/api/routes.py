"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import timedelta

#Herramienta para las promesas
from flask_cors import CORS
from sqlalchemy import exc
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Account, Waterdropper, Center, Hotspot, Specie, Sport, News
from api.utils import generate_sitemap, APIException
import jwt
import json
import itertools

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if email and password:
        account = Account.get_by_email(email)

        if account and check_password_hash(account._password, password) and account._is_active:
            access_token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(minutes=100))
            return {'token': access_token}, 200

        return jsonify({'error':'Not found'}), 200

    return {'error': 'Some parameter is wrong'}, 401



@api.route('/account', methods=['POST'])
def create_account(): 
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)
    photo = request.json.get("photo", None)
    is_waterdropper = request.json.get("userType", None)
    sports = request.json.get("sports", None)

    if not (email or password or username or is_waterdropper):
        return {'error': 'Missing info'}, 400

    account = Account.get_by_email(email)
    if account and not account._is_active:
        account.reactive_account(username, photo, is_waterdropper, password)
        return jsonify(account.to_dict()), 200
    
    if is_waterdropper == "waterdropper": 
        is_waterdropper = True
    else:
        is_waterdropper = False
        
    new_account = Account(
        email=email, 
        _is_active=True,
        _password=generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),
        username=username, 
        _is_waterdropper=is_waterdropper
    )
    
    try:
        new_account.create(sports) 
        print("aquiii", new_account)
        if is_waterdropper:
            first_name = request.json.get("firstname", None)
            last_name = request.json.get("lastname", None)
            level = request.json.get("level", None)
            location = request.json.get("location", None)
            
            new_waterdropper = Waterdropper(
                account_id=new_account.id,
                first_name=first_name,
                last_name=last_name,
                level=level,
                location=location
            )
            try:
                new_waterdropper.create_waterdropper()
                token = create_access_token(identity=new_waterdropper.to_dict(), expires_delta=timedelta(minutes=100))
                return jsonify({'token': token, 'account': new_waterdropper.to_dict()}), 201

            except exc.IntegrityError as err:
                print(f"Unexpected {err=}, {type(err)=}")
                return {'error': 'Something went wrong waterdropper'}, 401
        else:
            address = request.json.get("address", None)
            phone = request.json.get("phone", None)
            web = request.json.get("web", None)
            new_center = Center(
                account_id=new_account.id,
                address=address,
                phone=phone,
                web=web
            )
            print(new_center)
            try:
                new_center.create_center()
                token = create_access_token(identity=new_center.to_dict(), expires_delta=timedelta(minutes=100))
                return jsonify({'token': token, 'account': new_center.to_dict()}), 201

            except exc.IntegrityError as err:
                print(f"Unexpected {err=}, {type(err)=}")
                return {'error': 'Something went wrong center'}, 401
    
    except exc.IntegrityError as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return {'error': 'Something went wrong'}, 401


@api.route('/account/<int:id>', methods=["GET"])
@jwt_required()
def get_account_profile(id):
    account = Account.get_account_by_id(id)

    if account and account._is_active:
        return jsonify(account.to_dict()), 200
    
    return({"error": "Account not found"}), 404




