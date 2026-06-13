pipeline{
    agent any
    environment{
        VERCEL_TOKEN=credentials('vercel_token')
        VERCEL_PROJECT_NAME='financer'
        VERCEL_SCOPE=''
    }
    stages{
        stage('Install'){
            steps{
                bat 'npm install'
            }
        }
        stage('Test'){
            steps{
                echo 'skkiping test no test founds'
            }
        }
        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                script {
                    def scopeArg = env.VERCEL_SCOPE?.trim() ? " --scope ${env.VERCEL_SCOPE.trim()}" : ""
                    bat "npx vercel deploy --prod --yes --token=%VERCEL_TOKEN% --project ${env.VERCEL_PROJECT_NAME}${scopeArg}"
                }
            }
        }
    }
}