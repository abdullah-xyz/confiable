<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
const userStore = useUserStore();
const appStore = useAppStore();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().required().email().label("Email"),
    })
  ),
});

const submitForm = handleSubmit(async (values, actions) => {
  try {
    await userStore.resetPassword(values.email);
    appStore.createToast({
      type: "success",
      content: "Password reset link sent to your email",
    });
    actions.resetForm();
    appStore.formRoute = "login";
  } catch (err: any) {
    switch (err.code) {
      case "auth/invalid-email":
        actions.setFieldError("email", "Invalid Email");
        break;
      case "auth/user-not-found":
        actions.setFieldError("email", "User not found");
        break;
      default:
        actions.setFieldError("email", "Something went wrong, try again!");
    }
  }
});
</script>

<template>
  <form @submit.prevent="submitForm">
    <layout-input-text name="email" label="Email" />

    <!-- button -->
    <layoutButton
      class="mt-8"
      label="Reset Password"
      :submitting="isSubmitting"
      rounded
    />

    <span
      @click="appStore.formRoute = 'login'"
      class="mt-6 underline hover:cursor-pointer"
      >Back to Login</span
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
