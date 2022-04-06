  
import os
from flask_admin import Admin
from .models import db, Home
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='Admin', template_mode='bootstrap3')

    
# Models
    admin.add_view(ModelView(Home, db.session))

    # You can duplicate that line to add mew models
