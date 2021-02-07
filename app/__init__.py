
import logging
from flask.helpers import send_from_directory
from app.config import Config
from flask import Flask, render_template
from .extensions import mongo
from app.resources.api import api
from flask_cors import CORS
from importlib import import_module
from app.formatter import ElkJsonFormatter

console = logging.StreamHandler()
console.setFormatter(ElkJsonFormatter())
logging.getLogger('').addHandler(console)
logging.getLogger('').setLevel(logging.INFO)
logging.getLogger('apscheduler.executors.default').setLevel(logging.ERROR)


def create_app(cnfg=Config()):
    app = Flask(__name__, static_folder="templates/static")
    CORS(app)
    app.config.from_object(cnfg)
    app.config['JWT_SECRET_KEY'] = 'boost-is-the-secret-of-our-app'
    api.init_app(app)
    mongo.init_app(app)

    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers',
                             'Content-Type,Authorization')
        response.headers.add(
            'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        response.headers.add('Access-Control-Expose-Headers', 'Content-Range')
        return response    

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route("/manifest.json")
    def manifest():
        return send_from_directory('./templates', 'manifest.json')

    @app.route("/favicon.ico")
    def favicon():
        return send_from_directory('./templates', 'favicon.ico')

    return app
