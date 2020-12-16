from app import app
from flask import render_template, url_for

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', subject = "Home")

@app.route('/education')
def education():
    return render_template('education.html', subject = "Education")

@app.route('/experience')
def experience():
    return render_template('experience.html', subject= "Experience")

@app.route('/skills')
def skills():
    return render_template('skills.html', subject = "Skills")