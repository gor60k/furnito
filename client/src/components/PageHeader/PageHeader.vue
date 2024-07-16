<template>
    <div class="page-header">
        <h2 class="page-header-title">{{ title }}</h2>
        
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const param = route.path;

const title = param.slice(1).charAt(0).toUpperCase() + param.slice(2)
</script>