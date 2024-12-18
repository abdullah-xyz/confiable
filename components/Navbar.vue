<script setup lang="ts">
const userStore = useUserStore();
const appStore = useAppStore();

const showMenu = ref(false);
</script>

<template>
  <div class="bg-background fixed w-screen top-0 left-0 z-10">
    <div class="max-w-screen-2xl mx-auto px-4">
      <div
        class="flex justify-between h-16 md:h-24 items-center border-b-2 border-muted py-1"
      >
        <!-- burger menu for mobile -->
        <div class="-mr-2 -my-2 lg:hidden">
          <button @click="showMenu = !showMenu" type="button">
            <Icon
              v-if="!showMenu"
              name="charm:menu-hamburger"
              class="md:text-3xl text-2xl"
            />
            <Icon
              v-else
              class="md:text-3xl text-2xl"
              name="mingcute:close-fill"
            />
          </button>
        </div>

        <!-- home -->
        <NuxtLink @click="if (showMenu) showMenu = !showMenu;" to="/">
          <span class="sr-only">Home</span>
          <img
            class="h-16 md:h-20 lg:h-28 w-auto transition duration-300 mr-8 md:hover:scale-110"
            src="/img/logo.png"
          />
        </NuxtLink>

        <!-- mobile nav -->
        <nav
          v-if="showMenu"
          class="lg:hidden fixed left-0 top-16 h-screen w-screen bg-background -z-10 py-2 px-6"
        >
          <NuxtLink @click="showMenu = !showMenu" to="/courses">
            <span
              class="text-base font-medium text-text block px-4 py-6 rounded-md hover:bg-secondary"
            >
              Programmes
            </span>
          </NuxtLink>
          <NuxtLink @click="showMenu = !showMenu" to="/services">
            <span
              class="text-base font-medium text-text block px-4 py-6 rounded-md hover:bg-secondary"
            >
              Services
            </span>
          </NuxtLink>
          <NuxtLink @click="showMenu = !showMenu" to="/counseling">
            <span
              class="text-base font-medium text-text block px-4 py-6 rounded-md hover:bg-secondary"
            >
              Mentorship
            </span>
          </NuxtLink>
          <NuxtLink @click="showMenu = !showMenu" to="/contact">
            <span
              class="text-base font-medium text-text block p-4 rounded-md hover:bg-secondary"
            >
              Contact Us
            </span>
          </NuxtLink>
          <NuxtLink @click="showMenu = !showMenu" to="/about">
            <span
              class="text-base font-medium text-text block px-4 py-6 rounded-md hover:bg-secondary"
            >
              About Us
            </span>
          </NuxtLink>

          <!-- seperator -->
          <div class="flex my-2">
            <span class="h-[1px] bg-muted w-full"></span>
          </div>

          <!-- auth -->
          <!-- Logout -->
          <div
            v-if="userStore.isLoggedIn"
            @click="
              userStore.signout();
              showMenu = !showMenu;
            "
          >
            <span
              class="text-base font-medium text-text block px-4 py-4 rounded-md hover:bg-secondary"
            >
              {{ userStore.name }}
            </span>
          </div>

          <!-- login -->
          <div v-else>
            <div
              @click="
                appStore.openForm('login');
                showMenu = !showMenu;
              "
            >
              <span
                class="text-base font-medium text-text block px-4 py-4 rounded-md hover:bg-secondary"
              >
                Log In
              </span>
            </div>
            <div
              @click="
                appStore.openForm('register');
                showMenu = !showMenu;
              "
            >
              <span
                class="text-base font-medium text-text block px-4 py-4 rounded-md hover:bg-secondary"
              >
                Sign Up
              </span>
            </div>
          </div>
        </nav>

        <!-- desktop nav -->
        <nav class="hidden lg:flex space-x-10">
          <!-- nav links -->
          <NuxtLink to="/courses">
            <span class="text-base font-medium text-text"> Programmes </span>
          </NuxtLink>
          <NuxtLink to="/services">
            <span class="text-base font-medium text-text"> Services </span>
          </NuxtLink>
          <NuxtLink to="/counseling">
            <span class="text-base font-medium text-text"> Mentorship </span>
          </NuxtLink>
          <NuxtLink to="/contact">
            <span class="text-base font-medium text-text"> Contact Us </span>
          </NuxtLink>
          <NuxtLink to="/about">
            <span class="text-base font-medium text-text"> About Us </span>
          </NuxtLink>
        </nav>

        <!-- LogOut -->
        <div
          v-if="userStore.isLoggedIn"
          class="hidden lg:flex items-center justify-end lg:flex-1"
        >
          <NuxtLink class="hover:cursor-pointer" to="/profile">
            <div>
              <img
                v-if="userStore.avatarUrl"
                :src="userStore.avatarUrl"
                class="border-2 rounded-full w-11"
              />
              <Icon
                v-else
                name="material-symbols-light:account-circle"
                class="text-6xl"
              />
            </div>
          </NuxtLink>
        </div>

        <!-- Login / Register -->
        <div v-else class="hidden lg:flex items-center justify-end lg:flex-1">
          <span
            @click="appStore.openForm('login')"
            class="whitespace-nowrap font-medium text-base text-text hover:cursor-pointer"
          >
            Sign In
          </span>
          <Button
            class="ml-8"
            @click="appStore.openForm('register')"
            label="Sign Up"
          />
        </div>
      </div>
    </div>
  </div>
</template>
