import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyAuLpmjZD86qEhsnHsOGDRqDwTqKxkVWVA",
  authDomain: "chat-app-bf67e.firebaseapp.com",
  databaseURL: "https://chat-app-bf67e.firebaseio.com",
  projectId: "chat-app-bf67e",
  storageBucket: "chat-app-bf67e.appspot.com",
  messagingSenderId: "915630136742",
  appId: "1:915630136742:web:622c223daaabecdbfac367",
  measurementId: "G-GHDM5Z73CH"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);