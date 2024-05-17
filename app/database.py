import redis
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

redis_cache = redis.Redis(host='localhost', port=6379, db=0)
