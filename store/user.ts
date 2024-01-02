import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
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
      console.log(res);
      return res;
    }
  }

  // Sing in with email
  async function signinWithEmail(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  // Sign in and sign up with existing google account
  async function signinWithGoogle() {
    console.log("goog fired");

    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      if (res) {
        console.log(res);
        return true;
      }
      console.log("success");
    } catch (err: any) {
      console.log(err.code);
    }
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
      console.log("store init");

      if (user) {
        isLoggedIn.value = true;
        email.value = user.email;
        name.value = user.displayName;
        console.log("found user");
      } else {
        isLoggedIn.value = false;
        email.value = null;
        name.value = null;
        console.log("no user");
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
    signinWithGoogle,
    signout,
  };
});
