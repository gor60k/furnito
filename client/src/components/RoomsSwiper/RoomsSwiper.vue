<template>
    <Swiper ref="swiperRef" @swiper="onSwiper" :modules="modules" :pagination="true" class="room-swiper"
        slides-per-view="2.2" :space-between="25" @slide-change="slideAnimation" loop="true">
        <SwiperSlide class="room-swiper-slide" v-for="slide in slides" :key="slide.index">
            <img :src="require('../../assets/images/' + slide.img)" alt="">
            <div class="slide-container">
                <div class="slide-container-pagination">
                    <p>{{ 0 + slide.index }}</p>
                    <p>{{ slide.name }}</p>
                </div>
                <p class="type">{{ slide.type }}</p>
                <a href="" class="slide-container-button" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </SwiperSlide>
        <div class="navigation">
            <div class="swiper-button-next" @click="nextSlide">
                <svg viewBox="0 0 512 512" width="20" height="30" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m388.494 474.966c8.472 8.47 8.472 22.208 0 30.678-4.237 4.237-9.788 6.356-15.341 6.356s-11.104-2.119-15.341-6.356l-234.306-234.303c-8.472-8.472-8.472-22.21 0-30.682l234.306-234.306c8.475-8.47 22.208-8.47 30.682 0 8.472 8.472 8.472 22.21 0 30.682l-218.967 218.964z"
                        fill="#B88E2F" />
                </svg>
            </div>
            <div class="swiper-button-prev" @click="prevSlide">
                <svg viewBox="0 0 512 512" width="20" height="30" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m388.494 474.966c8.472 8.47 8.472 22.208 0 30.678-4.237 4.237-9.788 6.356-15.341 6.356s-11.104-2.119-15.341-6.356l-234.306-234.303c-8.472-8.472-8.472-22.21 0-30.682l234.306-234.306c8.475-8.47 22.208-8.47 30.682 0 8.472 8.472 8.472 22.21 0 30.682l-218.967 218.964z"
                        fill="#B88E2F" />
                </svg>
            </div>
        </div>
    </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import { ref } from 'vue';

const swiperRef = ref()

const onSwiper = (swiper) => {
    swiperRef.value = swiper;

    const pagination = swiper.pagination;
    console.log(pagination);
}

const nextSlide = () => {
    swiperRef.value.slideNext();
}

const prevSlide = () => {
    swiperRef.value.slidePrev();
}

const slideAnimation = (swiper) => {
    const activeIndex = swiper.activeIndex;

    for (let i in swiper.slides) {
        if (i == activeIndex) {
            swiper.slides[i].style.maxHeight = "580" + 'px';
            swiper.slides[i].style.transition = ".5" + 's';
        } else {
            swiper.slides[i].style.maxHeight = "480" + 'px';
            swiper.slides[i].style.transition = ".5" + 's';
        }
    }
}

const modules = [Pagination, Navigation]

const slides = [
    {
        index: '1',
        img: 'room1.jpg',
        name: 'Bed Room',
        type: 'Inner Peace'
    },
    {
        index: '2',
        img: 'room2.jpg',
        name: 'Bed Room',
        type: 'Inner Peace'
    },
    {
        index: '3',
        img: 'room1.jpg',
        name: 'Bed Room',
        type: 'Inner Peace'
    },
    {
        index: '4',
        img: 'room2.jpg',
        name: 'Bed Room',
        type: 'Inner Peace'
    },
]
</script>