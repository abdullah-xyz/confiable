import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";

export const useUserStore = defineStore("user", () => {
  // store
  const isLoggedIn = ref<boolean>(false);
  const name = ref<string | null>(null);
  const email = ref<string | null>(null);
  const error = ref<string | null>("null");

  const auth = getAuth();

  // Sign Up with email
  async function signup(email: string, name: string, password: string) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      updateProfile(res.user, {
        displayName: name,
      });
      return res;
    }
  }

  // Sing in with email
  async function signinWithEmail(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  // Reset Password
  async function resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
  }

  // Change password
  async function changePassword(password: string) {
    if (!isLoggedIn) throw "Needs to be signed in";
    const user = auth.currentUser;
    if (user) {
      await updatePassword(user, password);
    }
  }

  // Sign in and sign up with existing google account
  async function signinWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  // Sign in with facebook
  async function signinWithFacebook() {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider);
  }

  // sign out
  async function signout() {
    try {
      await signOut(auth);
    } catch (err) {}
  }

  // initiate state
  function init() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
        email.value = user.email;
        name.value = user.displayName;
      } else {
        isLoggedIn.value = false;
        email.value = null;
        name.value = null;
      }
    });
  }

  return {
    isLoggedIn,
    name,
    email,
    error,
    init,
    signup,
    signinWithEmail,
    changePassword,
    resetPassword,
    signinWithGoogle,
    signinWithFacebook,
    signout,
  };
});
