<script setup lang="ts">
import * as yup from "yup";
import Login from "./Login.vue";
const userStore = useUserStore();
const appStore = useAppStore();
const modalStore = useModalStore()

const error = ref("");

// expose modal title
defineExpose({
  header: "Sign Up"
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().required().email().label("Email"),
      name: yup.string().required().label("Name"),
      password: yup.string().required().min(6).label("Password"),
      passwordConfirm: yup
        .string()
        .required()
        .oneOf([yup.ref("password")])
        .label("Confirm Password"),
    })
  ),
});

const submitForm = handleSubmit(async (values, actions) => {
  try {
    await userStore.signup(values.email, values.name, values.password);
    actions.resetForm();
    appStore.createToast({
      type: "success",
      content: "Please verify your email",
    });
    modalStore.close();
  } catch (err: any) {
    error.value = err.message;
    // switch (err.code) {
    //   case "auth/email-already-in-use":
    //     actions.setFieldError("email", "Email already in use");
    //     break;
    //   case "auth/invalid-email":
    //     actions.setFieldError("email", "Invalid Email");
    //     break;
    //   case "auth/weak-password":
    //     actions.setFieldError("password", "Password too weak");
    //     break;
    //   default:
    //     error.value = "Something went wrong, try again!";
    // }
  }
});
</script>

<template>
  <div class="p-6 bg-background rounded-b-md h-screen md:h-[30rem]">
    <form class="flex flex-col w-screen md:w-96 gap-4 items-center h-full px-6" @submit.prevent="submitForm">
      <!-- email -->
      <InputText name="email" label="Email" />
      <!-- name -->
      <InputText name="name" label="Name" />
      <!-- password -->
      <InputText name="password" label="Password" type="password" />
      <!-- Confirm Password -->
      <InputText
        name="passwordConfirm"
        label="Confirm Password"
        type="password"
      />
      <!-- Error -->
      <div class="text-sm text-error">{{ error }}</div>
      <!-- button -->
      <Button
        class="mt-4"
        label="Sign Up"
        :submitting="isSubmitting"
        rounded
      />
      <p class="my-4">
        Already have an account?
        <span
          @click="modalStore.replace(Login, {})"
          class="underline hover:cursor-pointer"
          >Login</span
        >
      </p>
    </form>
  </div>
</template>
