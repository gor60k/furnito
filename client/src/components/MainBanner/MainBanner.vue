<template>
    <div class="main-banner">
        <div class="main-banner-content">
            <p class="main-banner-content-subtitle">{{ subtitle }}</p>
            <h1 class="main-banner-content-title">{{ title }}</h1>
            <p class="main-banner-content-text">{{ text }}</p>
            <GoldButton buttonText="Buy now" />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import GoldButton from '../GoldButton.vue';

defineProps({
    title: String,
    subtitle: String,
    text: String
})
</script>