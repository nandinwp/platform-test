from database import db
from database import redis_cache
import pickle

class User(db.Model):
    __tablename__ = 'user'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(65), unique=True, index=True)
    password = db.Column(db.String(255))

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def check_password(self, password):
        return self.password == password

    def __repr__(self):
        return '<User {}>'.format(self.username)


def create_user(username, password):
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return "Username already exists. Please choose a different username."

    new_user = User(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()
    user = {'username': username, 'password': password}
    user_pickle = pickle.dumps(user)
    redis_cache.set('user', user_pickle)

def get_user_by_username(username):
    user = User.query.filter_by(username=username).first()
    return user


