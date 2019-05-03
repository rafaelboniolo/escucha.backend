from flask import Flask, request
from flask_cors import CORS



app = Flask(__name__)

CORS(app, resources={"/*": {"origins": "*"}})

@app.route('/teste')
def barra():
	return "barsdfsdfdsfgra"


#FLASK_APP=ws.py flask run --host=0.0.0.0 --port=8080


