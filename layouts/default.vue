<script setup lang="ts">
const showForm = ref(false)
const currentForm = ref('login')
const config = useRuntimeConfig()

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