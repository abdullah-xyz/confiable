<script setup lang="ts">
const props = defineProps({
    formPage: String
})
const currentPage = ref(props.formPage)


function changePage(page: string) {

    currentPage.value = page
    console.log('hey', page, currentPage.value)
}
</script>

<template>
    <div @click="$emit('closeForm')" @keydown.esc="$emit('closeForm')" @keyup.esc="$emit('closeForm')" tabindex="1"
        class="fixed w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div @click.stop="" class="">
            <!-- header -->
            <div class="bg-[#151b54] text-white text-2xl font-bold p-6 rounded-t-md flex justify-between">
                <div v-if="currentPage == 'register'">Sign Up</div>
                <div v-else-if="currentPage == 'login'">Sign In</div>
                <div v-else-if="currentPage == 'passwordReset'">Reset Password</div>
                <div @click="$emit('closeForm')" class="cursor-pointer" tabindex="0">x</div>
            </div>
            <div class="p-6 bg-white rounded-b-md h-[28rem]">
                <!-- form -->
                <LayoutAuthRegister v-if="currentPage == 'register'" @route="changePage" />
                <LayoutAuthLogin v-if="currentPage == 'login'" @route="changePage" />
                <LayoutAuthPasswordReset v-if="currentPage == 'passwordReset'" @route="changePage" />
            </div>
        </div>
    </div>
</template>
