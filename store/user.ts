import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  // store
  const supabase = useSupabaseClient();
  const isLoggedIn = ref<boolean>(false);
  const name = ref<string | undefined>(undefined);
  const email = ref<string | undefined>(undefined);
  const avatarUrl = ref<string | undefined>(undefined);

  // Sign Up with email
  async function signup(email: string, name: string, password: string) {
    console.log("attempt sign up");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (data.user?.identities?.length == 0) {
      console.log("no identities");

      throw new Error("Email already in use");
    }

    if (error) {
      console.log("thown: ", error);
      throw error;
    }
  }

  // Sing in with email
  async function signinWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("thown");
      throw error;
    }
  }

  // Reset Password
  async function resetPassword(email: string) {
    supabase.auth.resetPasswordForEmail(email);
  }

  // Change password
  async function changePassword(password: string) {
    if (!isLoggedIn) throw "Needs to be signed in";
    supabase.auth.updateUser({
      password,
    });
  }

  // Sign in and sign up with existing google account
  async function signinWithGoogle() {
    // const provider = new GoogleAuthProvider();
    // await signInWithPopup(auth, provider);
    console.log("google auth attempted");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      
    });

    console.log("google sign in", data, "error: ", error);
  }

  // Sign in with facebook
  async function signinWithFacebook() {
    console.log("facebook auth attempted");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });

    console.log("facebook sign in", data, "error: ", error);
  }

  // sign out
  async function signout() {
    try {
      console.log("sign out");

      await supabase.auth.signOut();
    } catch (err) {}
  }

  // initiate state
  function init() {
    const user = useSupabaseUser();

    if (user.value) {
      isLoggedIn.value = true;
      email.value = user.value.email;
      name.value = user.value.user_metadata.name;
      avatarUrl.value = user.value.user_metadata.avatar_url;
    }
  }

  function $reset() {
    isLoggedIn.value = false;
    email.value = undefined;
    name.value = undefined;
    avatarUrl.value = undefined;
  }

  return {
    isLoggedIn,
    name,
    email,
    avatarUrl,
    init,
    $reset,
    signup,
    signinWithEmail,
    changePassword,
    resetPassword,
    signinWithGoogle,
    signinWithFacebook,
    signout,
  };
});
