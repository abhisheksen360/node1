pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
  
     
    stage('Build') {
      steps {
       
         git 'https://abhisheksen360@bitbucket.org/abhisheksen360/server.git'
          bat  'npm install'

          
      }
    }  
    
    
  }
}