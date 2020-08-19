import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC_NEWggJ89xpjyn-LCNEzfI19HvVI9fz8",
  authDomain: "react-crud-b04f0.firebaseapp.com",
  databaseURL: "https://react-crud-b04f0.firebaseio.com",
  projectId: "react-crud-b04f0",
  storageBucket: "react-crud-b04f0.appspot.com",
  messagingSenderId: "455970595573",
  appId: "1:455970595573:web:7f7681429419af250ddbbc"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();


  // var firebaseConfig = {
  //   apiKey: "AIzaSyAt-PFHQt3tpFlOwMpYro6-fUmxmeJ78xA",
  //   authDomain: "react-welcome-a19cc.firebaseapp.com",
  //   databaseURL: "https://react-welcome-a19cc.firebaseio.com",
  //   projectId: "react-welcome-a19cc",
  //   storageBucket: "react-welcome-a19cc.appspot.com",
  //   messagingSenderId: "1002951317187",
  //   appId: "1:1002951317187:web:ede58ffc20425aa39a7476",
  //   measurementId: "G-BBSPSETTP8"
  // };
  // // Initialize Firebase
  // var fireDb = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
