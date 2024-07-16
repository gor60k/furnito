<script setup>
import FHeader from '@/components/FHeader/FHeader.vue';
import FFooter from '@/components/FFooter/FFooter.vue';
import './scss/index.scss';
</script>

<template>
  <FHeader />
  <RouterView />
  <FFooter />
</template>
