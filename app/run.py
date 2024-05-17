from flask import Flask
from flask_cors import CORS
from models import create_user
from database import db
def create_app():
    app = Flask(__name__, static_folder='templates')
    app.config.from_object('config')

    # Initialize SQLAlchemy
    db.init_app(app)

    with app.app_context():
        db.create_all()
        create_user('webrotas', '1234')

    # Enable CORS
    CORS(app)

    from app.routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/')

    return app
