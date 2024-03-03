<script setup lang="ts">
import { useField } from 'vee-validate'

const prop = defineProps({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "text",

    },
    label: {
        type: String,
        required: true
    },
})

const showPassword = ref(false)
const inputType = ref(prop.type)
prop.type == 'password' ? showPassword.value = false : showPassword.value = true
function togglePassword() {
    if (inputType.value == 'password') {
        showPassword.value = true
        inputType.value = 'text'
    } else {
        showPassword.value = false
        inputType.value = 'password'
    }
}

const { value, errorMessage, handleChange, handleBlur } = useField(() => prop.name, undefined, { validateOnValueUpdate: false })
</script>

<template>
    <div class="relative w-full">
        <!-- input field -->
        <input :type="inputType" :id="name" :placeholder="label" @change="handleChange($event, false)"
            @blur="handleBlur($event, true)" v-model="value"
            class="bg-light-background border-b-2 border-light-form focus:border-light-primary px-4 pb-2 pt-5 placeholder-transparent focus:outline-none w-full peer" />
        <!-- label -->
        <label :for="name"
            class="absolute left-4 text-xs text-light-label peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:left-4 peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs peer-focus:text-light-primary transition-all">
            {{ label }} </label>
        <!-- password visibility toggle -->
        <div>
            <Icon v-if="type == 'password'" @click="togglePassword" :name="showPassword ? 'ion:md-eye-off' : 'ion:md-eye'"
                class="text-2xl text-light-label absolute right-0 top-5 hover:cursor-pointer active:text-light-primary" />
        </div>
        <div class="absolute text-sm text-light-error -bottom-5 left-4">{{ errorMessage }}</div>
    </div>
</template>