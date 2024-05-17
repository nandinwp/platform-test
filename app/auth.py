from flask import jsonify, request
from utils import get_user_from_redis, get_this_cache, store_user_in_redis
from models import get_user_by_username
import pickle

def authenticate(username, password):
    cached_user = get_user_from_redis(username)
    if cached_user:
        user_cache = get_user_from_redis(username)

        cached_pass = user_cache['password']
        cached_user = user_cache['username']

        if username == cached_user and cached_pass == password:
            return True
        else:
            return False
    else:
       user = get_user_by_username(username)
       if user is None:
           return False

       store_user_in_redis(username, password)

       if user.password == password:
           return True
       else:
           return False