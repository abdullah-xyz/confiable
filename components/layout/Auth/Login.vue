<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const { fireauth } = useFirebase()
const provider = new GoogleAuthProvider()
function signin() {
    signInWithPopup(fireauth, provider).then((res) => {
        console.log(res);

    })
}


</script>

<template>
    <form @submit.prevent="" class="flex flex-col w-96 gap-4 items-center h-full">

        <!-- social auth -->
        <div class="flex justify-center items-center space-x-4">
            <div @click="signin" class="bg-gray-100 rounded-md px-4 py-2 text-xl hover:cursor-pointer hover:bg-gray-300">
                <Icon name="logos:google-icon" /> Google
            </div>
            <div class="bg-gray-100 rounded-md px-4 py-2 text-xl hover:cursor-pointer hover:bg-gray-300">
                <Icon name="logos:facebook" /> Facebook
            </div>
        </div>

        <ElementsOr />

        <!-- <h2 class="text-3xl font-bold mb-6 text-center">Login</h2> -->
        <!-- email -->
        <input type="text" name="email" placeholder="Email" autocomplete="email" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        <!-- password -->
        <input type="text" name="password" placeholder="Password" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />

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
