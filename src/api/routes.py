"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from email import message
from turtle import home
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import ContactForm, db, Home
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/home', methods=['GET'])
def home():
    if request.method == 'GET':
        all_home_content = Home.query.all()
        all_home_content = list(map(lambda x: x.serialize(), all_home_content))
        return jsonify({"content": all_home_content, "success": True}), 200  
    return "Invalid Method",  404

@api.route('/contact', methods=['POST'])
def contact_form():
    if request.method == 'POST':
        body = request.get_json()
        if body is None:
            raise APIException("You need to specify the request body as a json object", status_code=400)
        form = ContactForm(first_name=body['first_name'],\
            last_name=body['last_name'], title=body['title'],\
            email=body['email'], message=body['message'])
        db.session.add(form)
        db.session.commit()
        return "OK", 200
    return "Invalid Method", 404