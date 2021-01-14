from application import db

class my_reference(db.Model):
    reference_id = db.Column(db.Integer, primary_key=True)
    author_name = db.Column(db.String(50), nullable = False)
    author_contact = db.Column(db.String(50), nullable = False)
    author_organization = db.Column(db.String(50), nullable = False)
    author_message = db.Column(db.String(1000), nullable = False)
    author_date = db.Column(db.Date, nullable = False)
    approved = db.Column(db.Boolean, nullable = False)