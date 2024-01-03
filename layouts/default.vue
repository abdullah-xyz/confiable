<script setup lang="ts">
import { getDoc, collection, doc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { useUserStore } from '~/store/user';

const showForm = ref(false)
const currentForm = ref('login')
const config = useRuntimeConfig()
const userStore = useUserStore()

onMounted(() => {
    console.log(config)
    userStore.init()
    console.log('mounted');

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