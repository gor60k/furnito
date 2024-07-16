<template>
    <div class="product-list" :class="gridClass ? 'grid-two' : ''">
        <div class="product-list-wrapper">
            <ProductCard v-for="item in products" :key="item.name" :img="item.galary[0]" :name="item.name"
                :type="getTypeName(item.typeId)" :price="item.price" :path="`/product/${item.id}`" />
        </div>
        <button class="show-more-button" @click="loadMoreProducts">
            Show More
        </button>
        <PagePagination :limit="limit" @changePage="changePage" />
    </div>
</template>

<script setup>
import ProductCard from '../ProductCard/ProductCard.vue';
import PagePagination from '../PagePagination/PagePagination.vue';
import { ref, onMounted, computed, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    gridClass: Boolean,
    limit: Number
});

const emit = defineEmits(['update:products']);

const store = useStore();
const products = ref([]);
const types = ref([]);
const page = ref(1);
let offset = store.state.productsOffset;

const fetchProducts = async (page) => {
    await store.dispatch('fetchProducts', { limit: props.limit, page: page });
    products.value = store.getters.getProducts;
    emit('update:products', products.value);
}

onMounted(async () => {
    fetchProducts(page.value);
});

const changePage = (newPage) => {
    fetchProducts(newPage)
}

const getTypeName = computed(() => {
    return (typeId) => {
        const type = types.value.find((type) => type.id === typeId);
        return type ? type.name : 'Unknown';
    };
});

const loadMoreProducts = async () => {
    let newLimit = props.limit + offset;
    await store.dispatch('fetchProducts', { limit: newLimit, page: 1 });
    products.value = store.getters.getProducts;
    offset += 4;
};
</script>
