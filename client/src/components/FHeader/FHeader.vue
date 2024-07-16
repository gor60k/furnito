<template>
    <header class="header" :class="isHeaderScrolled ? 'active' : ''">
        <div class="header_wrapper">
            <div class="header_logo">
                <img src="../../assets/icons/logo.svg" alt="">
            </div>
            <ul class="header_list">
                <li class="header_list-item" v-for="route in $router.options.routes.filter(route => route.name)"
                    :key="route.path" :data-text="route.subtext">
                    <RouterLink :to="route.path">
                        {{ route.name }}
                    </RouterLink>
                </li>
            </ul>
            <div class="header_icons">
                <div class="header_icons-item-wrap">
                    <svg class="circle" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                        <circle r="20" cx="23" cy="23" fill="none" stroke="#B88E2F" stroke-width="2" />
                    </svg>
                    <RouterLink class="header_icons-item" to="/user">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </RouterLink>
                </div>
                <div class="header_icons-item-wrap">
                    <svg class="circle" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                        <circle r="20" cx="23" cy="23" fill="none" stroke="#B88E2F" stroke-width="2" />
                    </svg>
                    <button class="header_icons-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
                <div class="header_icons-item-wrap">
                    <svg class="circle" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                        <circle r="20" cx="23" cy="23" fill="none" stroke="#B88E2F" stroke-width="2" />
                    </svg>
                    <RouterLink class="header_icons-item" to="/favorite">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </RouterLink>
                </div>
                <div class="header_icons-item-wrap">
                    <svg class="circle" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                        <circle r="20" cx="23" cy="23" fill="none" stroke="#B88E2F" stroke-width="2" />
                    </svg>
                    <button class="header_icons-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </button>
                </div>
            </div>
            <div :class="isBrugerActive ? 'header_burger active' : 'header_burger'" @click="toggleActive">
                <svg width="40" height="40" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="burger-line" d="M1 13H17" stroke="black" stroke-width="2" stroke-linecap="round" />
                    <path class="cross-line" d="M1 1L17 13" stroke="black" stroke-width="2" stroke-linecap="round" />
                    <path class="burger-line" d="M1 7H17" stroke="black" stroke-width="2" stroke-linecap="round" />
                    <path class="burger-line" d="M1 1H17" stroke="black" stroke-width="2" stroke-linecap="round" />
                    <path class="cross-line" d="M17 1L1 13" stroke="black" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isBrugerActive = ref(false);

const isHeaderScrolled = ref(false);

const toggleActive = () => {
    isBrugerActive.value = !isBrugerActive.value
}

const moveHeader = () => {
    if (window.scrollY >= 50) {
        isHeaderScrolled.value = true;
    } else {
        isHeaderScrolled.value = false;
    }
};

window.addEventListener('scroll', moveHeader);
</script>
