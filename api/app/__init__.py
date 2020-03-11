from flask import Flask, g, render_template, url_for, redirect, flash, make_response, request, jsonify, json
import jwt
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route('/login', methods = ['POST', 'GET'])
def login():
    if(request.method == 'POST') :
        
        phone = request.form['phone']
        password = request.form['password']
        
        token = encode_JWT_token(str(phone))
        return jsonify({'token' : token, 'status' : True, 'code' : 200})
    else:
        return jsonify({'status' : Fasle, 'code' : 500, 'message': "Invalid Request"})
    
    
    
def encode_JWT_token(user_email):
    """
    We will create JWT Tokens based on the input
    """
    
    try :
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=5),
            'iat': datetime.datetime.utcnow(),
            'sub': user_email
        }
        token = jwt.encode(
            payload,
            generate_password_hash('test123'),
            algorithm='HS256'
        )
        return token.decode('utf-8')
    except Exception as e:
        return e
