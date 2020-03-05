from flask import Flask, g, render_template, url_for, redirect, flash, make_response, request, jsonify


app = Flask(__name__)

@app.route('/login', methods = ['POST'])
def login():
    if(request.method == 'POST'):
        phone = request.args.get('phone')
        password = request.args.get('pass')
        
    else:
        return jsonify({'status' : False, 'message' : 'Invalid Request', 'code' : 500})