"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Account, Waterdropper, Center, Hotspot, Specie, Sport, News
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=[ 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm  the backend"
    }

    return jsonify(response_body), 200

@api.route('/account', methods=[ 'GET'])
def get_accounts():

  accounts= Account.get_all()
  all_accounts=[account.to_dict() for account in accounts]
  return jsonify(all_accounts), 200

@api.route('/account/<int:id>', methods=[ 'GET'])
def get_account(id):

  account= Account.get_account_by_id(id)

  if account:
      account= account.to_dict()
      return jsonify(account), 200
  
  

  


    


