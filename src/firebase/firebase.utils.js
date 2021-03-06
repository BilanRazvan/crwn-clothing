import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAg_ya8zGV2OvdMKw17kN06gjbs6HsmOLs",
    authDomain: "crwn-db-e45b2.firebaseapp.com",
    databaseURL: "https://crwn-db-e45b2.firebaseio.com",
    projectId: "crwn-db-e45b2",
    storageBucket: "crwn-db-e45b2.appspot.com",
    messagingSenderId: "404708274131",
    appId: "1:404708274131:web:96d1c29c819f7d59f90926",
    measurementId: "G-GNKJWJNJLT"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    
    return userRef;
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;