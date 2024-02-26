<script setup lang="ts">
import { getDoc, collection, doc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { useUserStore } from '~/store/user';

const showForm = ref(false)
const currentForm = ref('login')
const config = useRuntimeConfig()
const userStore = useUserStore()

onMounted(() => {
    userStore.init()
})

function openForm(form: string) {
    currentForm.value = form
    showForm.value = true
}
</script>

<template>
    <LayoutAuthForm @closeForm="showForm = false" v-if="showForm" :formPage="currentForm" />
    <LayoutNavbar @openForm="openForm" />

    <slot />

    <LayoutFooter />
</template>

<style>
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-button {
    width: 5px;
    height: 0px;
}

::-webkit-scrollbar-corner {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: #151b56;
    border: 0px solid transparent;
    border-radius: 50px;
}

::-webkit-scrollbar-track {
    border: 0px none #fff;
    border-radius: 53px;
}
</style>