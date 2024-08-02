<template>
    <main class="product page">
        <Swiper>
            <SwiperSlide v-for="img in product.galary" :key="img" :thumbs="{ swiper: thumbsSwiper }" :modules="modules">
                <img :src="'http://localhost:5000/' + img" alt="">  
            </SwiperSlide>
        </Swiper>
        <Swiper @swiper="setThumbsSwiper" slides-per-view="4">
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
import { Thumbs } from 'swiper/modules';
const router = useRouter();
const store = useStore();
const product = ref({});

const thumbsSwiper = ref();

const modules = [Thumbs];

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
}

const productId = router.currentRoute.value.params.productId;
console.log(productId);

onMounted(async () => {
    await store.dispatch('fetchOneProduct', productId);
    product.value = store.getters.getProduct;
    console.log(product);
})
</script>