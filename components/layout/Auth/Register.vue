<script setup lang="ts">
import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Firestore, collection, doc, addDoc, setDoc, getDocs } from 'firebase/firestore';

const { fireauth: auth, firestore: db } = useFirebase()

const email = ref('')
const name = ref('')
const password = ref('')
const age = ref('2022-04-12')

async function submitForm() {
    try {
        console.log('start submit', db)
        const res = await createUserWithEmailAndPassword(auth, email.value, password.value)
        if (res) {
            console.log('init', res.user.uid)
            // const user = collection(db, 'users')
            const dbres = await setDoc(doc(db, 'users', res.user.uid), {
                name: name.value
            })
            console.log('db', dbres)
        }
        console.log('auth', res)



    } catch (err) {
        console.log(err)
    }
}

</script>

<template>
    <form @submit.prevent="submitForm" class="flex flex-col w-96 gap-4 items-center h-full p-4">

        <!-- <h2 class="text-3xl font-bold mb-3 text-center">Register</h2> -->

        <!-- email -->
        <input type="text" name="email" placeholder="Email" autocomplete="email" v-model="email" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        {{ email }}
        <!-- name -->
        <input type="text" name="name" placeholder="Full Name" v-model="name" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        {{ name }}
        <!-- password -->
        <input type="text" name="password" placeholder="Password" v-model="password" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        {{ password }}

        <input type="text" name="confirmpPassword" placeholder="Confirm Password" v-model="password" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        {{ password }}

        <!-- age -->
        <!-- <input type="text" name="age" placeholder="Date of Birth" autocomplete="age" v-model="age"
            onfocus="this.type='date'" onfocusout="this.type='text'" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        {{ new Date(new Date(age).toUTCString()) }} -->

        <!-- button -->
        <input type="submit" value="Sign Up"
            class="bg-gray-900 hover:bg-gray-950 active:bg-black w-24 text-white hover:cursor-pointer p-2 rounded-full mx-auto mt-4">


        <p class="my-4">
            Already have an account?
            <span @click="$emit('route', 'login')" class="underline hover:cursor-pointer">Login</span>
        </p>


    </form>
</template>