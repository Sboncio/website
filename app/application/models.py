from application import db

class references(db.Model):
    reference_id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(50), nullable = False)
    contact = db.Column(db.String(50), nullable = False)
    organization = db.Column(db.String(50), nullable = False)
    message = db.Column(db.String(1000), nullable = False)
    date = db.Column(db.Date, nullable = False)
    approved = db.Column(db.Boolean, nullable = False)