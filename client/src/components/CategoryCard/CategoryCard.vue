<template>
    <RouterLink :to="path">
        <div class="category-card">
            <div class="category-card-image">
                <img :src="require('../../assets/images/' + img)" alt="">
            </div>
            <p>{{ name }}</p>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

defineProps({
    path: String,
    img: String,
    name: String
})
</script>