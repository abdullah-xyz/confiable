<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
const userStore = useUserStore();
const appStore = useAppStore();

const error = ref("");

// Setup veeValidate
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().min(6).label("Password"),
    })
  ),
});

// Sign In with Email Password
const signInWithEmail = handleSubmit(async (values, actions) => {
  try {
    await userStore.signinWithEmail(values.email, values.password);
    actions.resetForm();
    appStore.closeForm();
  } catch (err: any) {
    // switch (err.code) {
    //   case "auth/wrong-password":
    //     actions.setFieldError("password", "Incorrect Password");
    //     break;
    //   case "auth/invalid-email":
    //     actions.setFieldError("email", "Invalid Email");
    //     break;
    //   case "auth/user-not-found":
    //     actions.setFieldError("email", "User not found");
    //     break;
    //   default:
    //     console.log(err.message);
    //     error.value = "Something went wrong, try again!";
    // }
    error.value = err.message;
  }
});

async function signInWithGoogle() {
  try {
    await userStore.signinWithGoogle();
    appStore.closeForm();
  } catch (err: any) {
    error.value = err.code;
  }
}

async function signInWithFacebook() {
  try {
    await userStore.signinWithFacebook();
    appStore.closeForm();
  } catch (err: any) {
    error.value = err.code;
  }
}
</script>

<template>
  <form @submit.prevent="signInWithEmail">
    <!-- social auth -->
    <div class="relative flex justify-center items-center space-x-4">
      <!-- Google -->
      <div
        @click="signInWithGoogle"
        class="bg-background border-2 border-muted rounded-md px-4 py-2 text-xl hover:cursor-pointer hover:bg-white hover:shadow-lg hover:border-primary transition-all duration-150"
      >
        <Icon name="logos:google-icon" /> Google
      </div>
      <!-- Facebook -->
      <div
        @click="signInWithFacebook"
        class="bg-background border-2 border-muted rounded-md px-4 py-2 text-xl hover:cursor-pointer hover:bg-white hover:shadow-lg hover:border-primary active:shadow-xl active:animate-ping transition-all duration-150"
      >
        <Icon name="logos:facebook" /> Facebook
      </div>
    </div>

    <ElementsOr />

    <!-- <h2 class="text-3xl font-bold mb-6 text-center">Login</h2> -->
    <LayoutInputText name="email" label="Email" />
    <!-- password -->
    <LayoutInputText name="password" label="Password" type="password" />

    <div class="text-sm text-error mt-3">{{ error }}</div>
    <!-- button -->
    <LayoutButton
      class="mt-4"
      label="Login"
      :submitting="isSubmitting"
      rounded
    />
    <!-- Forgot Password -->
    <span
      @click="appStore.formRoute = 'passwordReset'"
      class="underline hover:cursor-pointer"
      >Forgot Password?</span
    >

    <p class="">
      Don't have an account?
      <span
        @click="appStore.formRoute = 'register'"
        class="underline hover:cursor-pointer"
        >Register</span
      >
    </p>
  </form>
</template>
