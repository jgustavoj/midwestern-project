from enum import unique
from flask_sqlalchemy import SQLAlchemy
from .utils import utcnow

db = SQLAlchemy()

class Home(db.Model):
    __tablename__ = "home"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    content = db.Column(db.String(250), unique=True, nullable=False)
    image_url = db.Column(db.String(250), unique=True, nullable=True)
    created = db.Column(db.DateTime, default=utcnow)
    updated = db.Column(db.DateTime, default=utcnow)

    def __repr__(self):
        return '<Home %r>' % self.home_content

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "image_url": self.image_url,
            "created": self.created,
            "updated": self.updated
            # do not serialize the password, its a security breach
        }