<script setup lang="ts">
import * as yup from "yup";
import Login from "./Login.vue";
import Register from "./Register.vue";
const userStore = useUserStore();
const appStore = useAppStore();
const modalStore = useModalStore()

// expose modal title
defineExpose({
  header: "Reset Password"
})

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
    modalStore.replace(Login, {});
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
  <div class="p-6 bg-background rounded-b-md h-screen md:h-[30rem]">
    <form class="flex flex-col w-screen md:w-96 gap-4 items-center h-full px-6" @submit.prevent="submitForm">
      <InputText name="email" label="Email" />
      <!-- button -->
      <Button
        class="mt-8"
        label="Reset Password"
        :submitting="isSubmitting"
        rounded
      />
      <span
        @click="modalStore.replace(Login, {})"
        class="mt-6 underline hover:cursor-pointer"
        >Back to Login</span
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
