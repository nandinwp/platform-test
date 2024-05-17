import json
from database import redis_cache
def store_user_in_redis(username, password):
    user = {'username': username, 'password': password}
    user_json = json.dumps(user)
    redis_cache.set(username, user_json)

def get_user_from_redis(key):
    user_json = redis_cache.get(key)
    if user_json:
        user = json.loads(user_json)
        return user
    else:
        return None

def get_this_cache(key):
    return redis_cache.get(key)