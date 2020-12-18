from flask import url_for
from flask_testing import TestCase

from app import app

class TestBase(TestCase):
    def create_app(self):
        return app

class TestResponse(TestBase):

    def test_home_page(self):
        response = self.client.get(url_for('home'))
        self.assertIn(b'Who am I?', response.data)

    def test_education_page(self):
        response = self.client.get(url_for('education'))
        self.assertIn(b'BSc (Hons)', response.data)

    def test_experience_page(self):
        response = self.client.get(url_for('experience'))
        self.assertIn(b'DevOps Consultant', response.data)

    def test_skills_page(self):
        response = self.client.get(url_for('skills'))
        self.assertIn(b'Cloud Computing', response.data)

    def test_projects_page(self):
        response = self.client.get(url_for('projects'))
        self.assertIn(b'Past Projects', response.data)