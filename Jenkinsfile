pipeline{
    agent any

    environment{
        DOCKER_USERNAME = credentials('DOCKER_USERNAME')
        DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
    }

    stages {

        stage('Test Software'){
            steps{
                sh 'scripts/test_software.sh'
            }
        }

        stage('Install Docker'){
            steps{
                sh 'scripts/install_docker.sh'
            }
        }

        stage('Build and Artefact Docker Images'){
            steps{
                sh 'scripts/build_images.sh'
            }
        }

        stage('Deploy Docker Images'){
            steps{
                sh 'scripts/deploy_images.sh'
            }
        }

    }
}