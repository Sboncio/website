from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

#app.config['SECRET_KEY'] = str(os.getenv('SECRET_KEY_DB'))
#password = str(os.getenv('MYSQL_ROOT_PASSWORD'))
#app.config['SQLALCHEMY_DATABASE_URI']= "mysql+pymysql://root:test@mysql:3306/references"
app.config['SECRET_KEY'] = "test"
app.config['SQLALCHEMY_DATABASE_URI']= "mysql+pymysql://root:test@mysql:3306/reference"

db = SQLAlchemy(app)

from application import routes