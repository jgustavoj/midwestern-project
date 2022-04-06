"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from turtle import home
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Home
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/home', methods=['POST', 'GET'])
def home():
    # all_home_content = Home.query.filter_by(id=1)
    # all_home_content = list(map(lambda x: x.serialize(), all_home_content))
    # return jsonify(all_home_content), 200  

    # # return jsonify(response_body), 200

    # if request.method == 'GET':
    #     all_home_content = Home.query.all()
    #     all_home_content = list(map(lambda x: x.serialize(), all_home_content))
    #     return jsonify(all_home_content), 200  
    # return "Invalid Method",  404

    if request.method == 'GET':
        all_home_content = Home.query.all()
        all_home_content = list(map(lambda x: x.serialize(), all_home_content))
        return jsonify({"content": all_home_content, "success": True}), 200  
    return "Invalid Method",  404

