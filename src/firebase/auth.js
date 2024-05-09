import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth} from './firebase';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
}

export const doSignOut = async () => {
    return auth.signOut();
}

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  
  export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password);
  };
  
  export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  };
