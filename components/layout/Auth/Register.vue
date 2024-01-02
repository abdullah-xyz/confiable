<script setup lang="ts">
import { useUserStore } from '~/store/user';


// const { fireauth, firestore } = useFirebase()

const email = ref('')
const name = ref('')
const password = ref('')
const error = ref('')

async function submitForm() {
    const userStore = useUserStore()
    try {
        console.log('store fired')
        await userStore.signup(email.value, name.value, password.value)
        console.log('from form', userStore.error);
        error.value = userStore.error ? userStore.error : ''

    } catch (err: any) {
        switch (err.code) {
            case "auth/email-already-in-use":
                error.value = "Email already in use";
                break;
            case "auth/invalid-email":
                error.value = "Invalid Email";
                break;
            case "auth/weak-password":
                error.value = "Password too weak";
                break;
            default:
                error.value = "Something went wrong, try again!";
        }


    }
}
// async function submitForm() {
//     try {
//         const res = await createUserWithEmailAndPassword(fireauth, email.value, password.value)
//         if (res) {
//             console.log('init', res.user.uid)
//             updateProfile(res.user, {
//                 displayName: name.value,
//             })

//         }
//         console.log('auth', res)



//     } catch (err) {
//         console.log(err)
//     }
// }

</script>

<template>
    <form @submit.prevent="submitForm" class="flex flex-col w-96 gap-4 items-center h-full p-4">

        <!-- <h2 class="text-3xl font-bold mb-3 text-center">Register</h2> -->

        <!-- email -->
        <input type="text" name="email" placeholder="Email" autocomplete="email" v-model="email" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        <!-- name -->
        <input type="text" name="name" placeholder="Full Name" v-model="name" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        <!-- password -->
        <input type="text" name="password" placeholder="Password" v-model="password" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />

        <input type="text" name="confirmpPassword" placeholder="Confirm Password" v-model="password" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />

        <!-- age -->
        <!-- <input type="text" name="age" placeholder="Date of Birth" autocomplete="age" v-model="age"
            onfocus="this.type='date'" onfocusout="this.type='text'" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        {{ new Date(new Date(age).toUTCString()) }} -->
        <div class="text-sm text-red-500">{{ error }}</div>

        <!-- button -->
        <input type="submit" value="Sign Up"
            class="bg-gray-900 hover:bg-gray-950 active:bg-black w-24 text-white hover:cursor-pointer p-2 rounded-full mx-auto mt-4">


        <p class="my-4">
            Already have an account?
            <span @click="$emit('route', 'login')" class="underline hover:cursor-pointer">Login</span>
        </p>


    </form>
</template>