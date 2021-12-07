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
    # email = request.json.get("email", None)
    # password = request.json.get("password", None)

    # if email and password:
    #     account = Account.get_by_email(email)

    #     if account:
    #         '''check password'''
    #         access_token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(hours=12))
    #         return jsonify({'token': access_token}), 200

    #     return jsonify({'error':'Not found'}), 200

    # return jsonify({"msg": "Wrong username or password"}), 401

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
    sport_id = request.json.get("sport", None)

    if not (email and username and sport_id and password):
        return {'error': 'Missing info'}, 400

    account = Account.get_by_email(email)
    if account and not account.is_active:
        account.reactive_account(username, sport_id, password)
        return jsonify(account.to_dict()), 200
     
    new_account = Account(
                email=email, 
                password=password, 
                username=username, 
                sport_id=sport_id
            )
    try:
        new_account.create()
        return jsonify(new_account.to_dict()), 201

    except exc.IntegrityError:
        return {'error': 'Something went wrong'}, 401


    # if not (email and password and username and name and sport_id):
    #     return {"error":"Missing info"}, 400

    # new_user = Account(
    #     email=email,
    #     _password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),
    #     username=username,
    #     sport_id=sport_id
    # )

    # try:
    #     new_user.create()
    # except exc.IntegrityError: 
    #     return {"error":"something went wrong"}, 409

    # account = Account.get_by_email(email)

    # if account :
    #     token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(minutes=100))
    #     return({'token' : token}), 200


@api.route('/account/<int:id>', methods=["GET"])
@jwt_required()
def get_account_profile(id):
    account = Account.get_account_by_id(id)

    if account and account._is_active:
        return jsonify(account.to_dict()), 200
    
    return({"error": "Account not found"}), 404



@api.route('/account/<int:id>', methods = ['PUT', 'PATCH'])
@jwt_required()
def update_account_info(id):
    current_account = get_jwt_identity()

    if current_account != id:
        return {'error': 'Invalid action'}, 400

    update_info = {
        'email': request.json.get('email', None),
        'username': request.json.get('username', None),
        'sport_id': request.json.get('sport_id', None),
        'password': request.json.get('password', None),
    }

    account = Account.get_by_id(id)

    if account:
        updated_account =  account.update(**{
                            key:value for key, value in update_info.items() 
                            if value is not None
                        })
        return jsonify(updated_account.to_dict()), 200

    return {'error': 'User not found'}, 400


@api.route('/account/<int:id>', methods = ['PATCH'])
@jwt_required
def update_account_status(id):
    account_inactive = Account.get_account_by_id(id)

    if account_inactive:
        account_inactive.soft_delete()
        return jsonify(account_inactive.to_dict()), 200

    return jsonify({'error' : 'Account not found'}), 404