<script setup lang="ts">
import { useUserStore } from '~/store/user';
import { useAppStore } from '~/store/app';
import { useForm } from 'vee-validate';
import * as yup from 'yup'
const userStore = useUserStore()
const appStore = useAppStore()

const error = ref('')

// Setup veeValidate
const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(
        yup.object({
            email: yup.string().required().email().label('Email'),
            password: yup.string().required().min(6).label('Password')
        }))
})

// Sign In with Email Password
const signInWithEmail = handleSubmit(async (values, actions) => {
    try {
        await userStore.signinWithEmail(values.email, values.password)
        actions.resetForm()
        appStore.closeForm()

    } catch (err: any) {
        switch (err.code) {
            case "auth/wrong-password":
                actions.setFieldError("password", "Incorrect Password")
                break;
            case "auth/invalid-email":
                actions.setFieldError("email", "Invalid Email")
                break;
            case "auth/user-not-found":
                actions.setFieldError("email", "User not found")
                break;
            default:
                error.value = "Something went wrong, try again!";
        }
    }
})

async function signInWithGoogle() {
    try {
        await userStore.signinWithGoogle()
        console.log('fired store')
    } catch (err: any) {
        error.value = err.code
    }
}

</script>

<template>
    <form @submit.prevent="signInWithEmail" class="flex flex-col w-96 gap-4 items-center h-full">

        <!-- social auth -->
        <div class="relative flex justify-center items-center space-x-4">
            <div @click="signInWithGoogle"
                class="bg-light-background border-2 border-light-form rounded-md px-4 py-2 text-xl hover:cursor-pointer hover:bg-white hover:shadow-lg hover:border-light-primary transition-all duration-150">
                <Icon name="logos:google-icon" /> Google
            </div>
            <div
                class="bg-light-background border-2 border-light-form rounded-md px-4 py-2 text-xl hover:cursor-pointer hover:bg-white hover:shadow-lg hover:border-light-primary active:shadow-xl active:animate-ping transition-all duration-150">
                <Icon name="logos:facebook" /> Facebook
            </div>
        </div>

        <ElementsOr />

        <!-- <h2 class="text-3xl font-bold mb-6 text-center">Login</h2> -->
        <LayoutInputText name="email" label="Email" />
        <!-- password -->
        <LayoutInputText name="password" label="Password" type="password" />

        <div class="text-sm text-light-error mt-3">{{ error }}</div>
        <!-- button -->
        <LayoutButton class="mt-4" label="Login" :submitting="isSubmitting" rounded />
        <!-- Forgot Password -->
        <span @click="appStore.formRoute = 'passwordReset'" class="underline hover:cursor-pointer">Forgot Password?</span>

        <p class="">
            Don't have an account?
            <span @click="appStore.formRoute = 'register'" class="underline hover:cursor-pointer">Register</span>
        </p>


    </form>
</template>
