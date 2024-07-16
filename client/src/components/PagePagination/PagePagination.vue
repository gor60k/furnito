<template>
    <div class="page-pagination">
        <div class="page-pagination-item" v-for="item in pages" :key="item" @click="changePage(item)">{{ item }}</div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const products = ref([]);
const pages = ref([]);
const limit = store.state.productsLimit;
const currentPage = ref(1);

const emit = defineEmits(['changePage']);

onMounted(async () => {
    await store.dispatch('fetchProducts');
    products.value = store.getters.getProducts;

    let pageCount = Math.ceil(products.value.length / limit);

    for (let i = 0; i < pageCount; i++) {
        pages.value.push(i + 1);
    }
});

const changePage = async (newPage) => {
    currentPage.value = newPage;
    emit('changePage', newPage);
};
</script>
