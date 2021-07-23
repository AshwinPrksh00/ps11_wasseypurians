import firebase from 'firebase';
  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCiicXeuMn6yiOaKMHDKKpy2Irn8yp_W3U",
    authDomain: "doctorsdoor-3eae9.firebaseapp.com",
    projectId: "doctorsdoor-3eae9",
    storageBucket: "doctorsdoor-3eae9.appspot.com",
    messagingSenderId: "859249511194",
    appId: "1:859249511194:web:9083f72f8fc992da4b7aa3"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
db.settings({
  timestampsInSnapshots: true,
});
export default fire;
export { db, auth, storage };