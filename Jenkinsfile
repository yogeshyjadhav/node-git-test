cat > Jenkinsfile <<'EOF'
pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'nodejs', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from Git...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build / Run') {
            steps {
                echo 'Starting Node app...'
                sh 'node server.js & sleep 5'
            }
        }

        stage('Test') {
            steps {
                echo 'Running simple health check...'
                sh 'curl -f http://localhost:3000 || exit 1'
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: '**/*.js', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'pkill -f server.js || true'
        }
        success {
            echo 'Pipeline completed successfully ✅'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
EOF
