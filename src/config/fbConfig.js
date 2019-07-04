import * as firebase from 'firebase'; 

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDTD_2P9KvXnAWbVUvB4-iqRWSerQjtmf0",
  authDomain: "react-dash-myapp.firebaseapp.com",
  databaseURL: "https://react-dash-myapp.firebaseio.com",
  projectId: "react-dash-myapp", 
  messagingSenderId: "806436163853",
  appId: "1:806436163853:web:098366f9b37515fb"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase; 