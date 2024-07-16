<template>
    <main class="home page">
        <MainBanner subtitle="New Arrival" title="Discover Our New Collection" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."/>
        <div class="wrapper">
            <section class="home_brows section">
                <div class="home_brows-head section-top">
                    <h2 class="base-title">
                        Browse The Range
                    </h2>
                    <p class="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="home_brows-links">
                    <CategoryCard v-for="item in categories" :key="item.path" :path="item.path" :name="item.name" :img="item.img"/>
                </div>
            </section>
            <section class="home_product-list section">
                <div class="section-top">
                    <h2 class="base-title">Our Products</h2>
                </div>
                <ProductList :limit="8"/>
            </section>
        </div>
        <section class="home_swiper-container section">
            <div class="home_swiper-container-content">
                <h2 class="base-title">50+ Beautiful rooms 
                    inspiration
                </h2>
                <p class="grey-text">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <GoldButton buttonText="Explore More"/>
            </div>
            <RoomSwiper />
        </section>
        <section class="home_image-grid section">
            <div class="section-top">
                <h2 class="base-title">#FuniroFurniture</h2>
            </div>
            <ImageGrid />
        </section>
    </main>
</template>

<script setup>
import MainBanner from '@/components/MainBanner/MainBanner.vue';
import CategoryCard from '@/components/CategoryCard/CategoryCard.vue';
import ProductList from '@/components/ProductList/ProductList.vue';
import RoomSwiper from '@/components/RoomsSwiper/RoomsSwiper.vue';
import GoldButton from '@/components/GoldButton.vue';
import ImageGrid from '@/components/ImageGrid/ImageGrid.vue';

const categories = [
    {
        path: 'shop/dining',
        img: 'cat1.jpg',
        name: 'Dining'
    },
    {
        path: 'shop/living',
        img: 'cat2.jpg',
        name: 'Living'
    },
    {
        path: 'shop/bedroom',
        img: 'cat3.jpg',
        name: 'Bedroom'
    },
]

</script>