# app/routes.py
import os

from flask import Blueprint, render_template, request, jsonify
from app.auth import authenticate
from config import JSON

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if authenticate(username, password):
        return jsonify({'message': 'Login successful!'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 200


@auth_bp.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@auth_bp.route('/position', methods=['GET'])
def position():
    if os.path.exists(JSON):
        with open(JSON, 'r') as f:
            data = f.read()

        return jsonify(data)
    else:
        return jsonify({'error': 'Arquivo position.json não encontrado'}), 200
