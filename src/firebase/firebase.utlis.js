import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlSiy6i0wVmenDJg53RT-KQB2n59nt8g8",
    authDomain: "crwn-db-9b5bb.firebaseapp.com",
    databaseURL: "https://crwn-db-9b5bb.firebaseio.com",
    projectId: "crwn-db-9b5bb",
    storageBucket: "crwn-db-9b5bb.appspot.com",
    messagingSenderId: "391015284350",
    appId: "1:391015284350:web:c9fa732a346024be04a22f",
    measurementId: "G-PFQ4FBGNKE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const  {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('### error:', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
