pipeline{
    agent{
        docker{
            image 'cypress/browsers:node16.14.2-slim-chrome100-ff99-edge'
            args '-u root:root'
        }
    }



stages{
    stage('Download the dependencies'){
        steps{
            sh "npm install"
        }
    }

    stage('Download the cypress'){
        steps{
            sh "npm install cypress"
        }
    }

     stage('Build and test'){
        steps{
            sh "npm run cy:run"
        }
    }
} 

 

}