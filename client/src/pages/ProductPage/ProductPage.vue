<template>
    <main class="product page">
        <Swiper>
            <SwiperSlide v-for="img in product.galary" :key="img">
                <img :src="'http://localhost:5000/' + img" alt="">
            </SwiperSlide>
        </Swiper>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
const router = useRouter();
const store = useStore();
const product = ref({});
console.log(product);

const productId = router.currentRoute.value.params.productId;
console.log(productId);

onMounted(async() => {
    await store.dispatch('fetchOneProduct', productId);
    product.value = store.getters.getProduct;
    console.log(product);
})
</script>