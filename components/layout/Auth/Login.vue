<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useUserStore } from '~/store/user';
const userStore = useUserStore()

const email = ref('')
const password = ref('')
const error = ref('')

// const { fireauth } = useFirebase()
// const provider = new GoogleAuthProvider()
// function signin() {
//     signInWithPopup(fireauth, provider).then((res) => {
//         console.log(res);

//     })
// }
async function signInWithGoogle() {
    const res = await userStore.signinWithGoogle()
    console.log('fired store')
}

async function signInWithEmail() {
    try {
        console.log('store fired')

        await userStore.signinWithEmail(email.value, password.value)
        error.value = userStore.error ? userStore.error : ''
    } catch (err: any) {
        switch (err.code) {
            case "auth/wrong-password":
                error.value = "Incorrect Password";
                break;
            case "auth/invalid-email":
                error.value = "Invalid Email";
                break;
            case "auth/user-not-found":
                error.value = "User Not Found";
                break;
            default:
                error.value = "Something went wrong, try again!";
        }
    }
}


</script>

<template>
    <form @submit.prevent="signInWithEmail" class="flex flex-col w-96 gap-4 items-center h-full">

        <!-- social auth -->
        <div class="flex justify-center items-center space-x-4">
            <div @click="signInWithGoogle"
                class="bg-gray-100 rounded-md px-4 py-2 text-xl hover:cursor-pointer hover:bg-gray-300">
                <Icon name="logos:google-icon" /> Google
            </div>
            <div class="bg-gray-100 rounded-md px-4 py-2 text-xl hover:cursor-pointer hover:bg-gray-300">
                <Icon name="logos:facebook" /> Facebook
            </div>
        </div>

        <ElementsOr />

        <!-- <h2 class="text-3xl font-bold mb-6 text-center">Login</h2> -->
        <!-- email -->
        <input type="text" name="email" placeholder="Email" autocomplete="email" v-model="email" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        <!-- password -->
        <input type="text" name="password" placeholder="Password" v-model="password" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />

        <div class="text-sm text-red-500">{{ error }}</div>

        <!-- button -->
        <input type="submit" value="Login"
            class="bg-gray-900 hover:bg-gray-950 active:bg-black w-24 text-white hover:cursor-pointer p-2 rounded-full mx-auto mt-5 mb-2">


        <!-- Forgot Password -->
        <span @click="$emit('route', 'passwordReset')" class="underline hover:cursor-pointer">Forgot Password?</span>

        <p class="">
            Don't have an account?
            <span @click="$emit('route', 'register')" class="underline hover:cursor-pointer">Register</span>
        </p>


    </form>
</template>
