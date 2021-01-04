from application import app
from flask import render_template, url_for, send_file

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
   

@app.route('/projects')
def projects():
    return render_template('projects.html', subject = "")

@app.route('/cv')
def cv():
    return send_file('static/css/S_Asquith.pdf')

@app.route('/techstack')
def techstack():
    return render_template('techstack.html', subject = "Tech Stack")