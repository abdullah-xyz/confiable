<script setup lang="ts">
import * as yup from "yup";
import PasswordReset from "./PasswordReset.vue";
import Register from "./Register.vue";
const userStore = useUserStore();
const modalStore = useModalStore()

const error = ref("");

// expose modal title
defineExpose({
  header: "Login"
})

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
    modalStore.close();
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
    modalStore.close();
  } catch (err: any) {
    error.value = err.code;
  }
}

async function signInWithFacebook() {
  try {
    await userStore.signinWithFacebook();
    modalStore.close();
  } catch (err: any) {
    error.value = err.code;
  }
}
</script>

<template>
    <div class="p-6 bg-background rounded-b-md h-screen md:h-[30rem]">
    <form class="flex flex-col w-screen md:w-96 gap-4 items-center h-full px-6" @submit.prevent="signInWithEmail">
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
      <SeperatorOr />
      <!-- <h2 class="text-3xl font-bold mb-6 text-center">Login</h2> -->
      <InputText name="email" label="Email" />
      <!-- password -->
      <InputText name="password" label="Password" type="password" />
      <div class="text-sm text-error mt-3">{{ error }}</div>
      <!-- button -->
      <Button
        class="mt-4"
        label="Login"
        :submitting="isSubmitting"
        rounded
      />
      <!-- Forgot Password -->
      <span
        @click="modalStore.replace(PasswordReset, {})"
        class="underline hover:cursor-pointer"
        >Forgot Password?</span
      >
      <p class="">
        Don't have an account?
        <span
          @click="modalStore.replace(Register, {})"
          class="underline hover:cursor-pointer"
          >Register</span
        >
      </p>
    </form>
  </div>
</template>
