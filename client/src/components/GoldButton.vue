<template>
    <div class="gold-button">
        <a href="">{{ buttonText }}</a>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    buttonText: String
})
</script>