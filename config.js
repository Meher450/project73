import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyDf5vSCpO2AODp_vpxqcoTiIxVec_4UNrY",
  authDomain: "project-73-lets-ride.firebaseapp.com",
  projectId: "project-73-lets-ride",
  storageBucket: "project-73-lets-ride.appspot.com",
  messagingSenderId: "103557522273",
  appId: "1:103557522273:web:f19902449398607b941b20"

 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

