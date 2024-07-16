<template>
    <RouterLink :to="path">
        <div class="product-card">
            <div class="product-card-image">
                <img :src="'http://localhost:5000/' + img" alt="">
            </div>
            <div class="product-card-info">
                <h3 class="product-card-info-title">{{ name }}</h3>
                <p class="product-card-info-subtitle">{{ type }}</p>
                <p class="product-card-info-price">Rp {{ price }}</p>
            </div>
            <div class="add-to-card">
                <GoldButton buttonText="Add to cart" />
                <div class="add-to-card-btns">
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z"
                                fill="white" />
                        </svg>
                        Share
                    </button>
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z"
                                fill="white" />
                        </svg>
                        Compare
                    </button>
                    <button @click="changeClick" :class="buttonClick ? 'clicked' : ''">

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                                stroke="white" stroke-width="1.8" />
                        </svg>
                        Like
                    </button>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import GoldButton from '../GoldButton.vue';
import { RouterLink } from 'vue-router';

const buttonClick = ref(false);

const changeClick = () => {
    buttonClick.value = !buttonClick.value
}

defineProps({
    img: String,
    name: String,
    type: String,
    price: Number,
    path: String
})
</script>