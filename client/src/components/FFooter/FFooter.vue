<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <div class="footer-logo-info">
                <svg width="83" height="21" viewBox="0 0 83 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.4556 3.152V6.44H4.59163V9.992H9.72763V13.184H4.59163V20H0.487634V3.152H11.4556ZM26.8366 6.608V20H22.7326V18.176C22.3166 18.768 21.7486 19.248 21.0286 19.616C20.3246 19.968 19.5406 20.144 18.6766 20.144C17.6526 20.144 16.7486 19.92 15.9646 19.472C15.1806 19.008 14.5726 18.344 14.1406 17.48C13.7086 16.616 13.4926 15.6 13.4926 14.432V6.608H17.5726V13.88C17.5726 14.776 17.8046 15.472 18.2686 15.968C18.7326 16.464 19.3566 16.712 20.1406 16.712C20.9406 16.712 21.5726 16.464 22.0366 15.968C22.5006 15.472 22.7326 14.776 22.7326 13.88V6.608H26.8366ZM37.9445 6.464C39.5125 6.464 40.7605 6.976 41.6885 8C42.6325 9.008 43.1045 10.4 43.1045 12.176V20H39.0245V12.728C39.0245 11.832 38.7925 11.136 38.3285 10.64C37.8645 10.144 37.2405 9.896 36.4565 9.896C35.6725 9.896 35.0485 10.144 34.5845 10.64C34.1205 11.136 33.8885 11.832 33.8885 12.728V20H29.7845V6.608H33.8885V8.384C34.3045 7.792 34.8645 7.328 35.5685 6.992C36.2725 6.64 37.0645 6.464 37.9445 6.464ZM48.0204 5.216C47.3004 5.216 46.7084 5.008 46.2444 4.592C45.7964 4.16 45.5724 3.632 45.5724 3.008C45.5724 2.368 45.7964 1.84 46.2444 1.424C46.7084 0.991999 47.3004 0.775999 48.0204 0.775999C48.7244 0.775999 49.3004 0.991999 49.7484 1.424C50.2124 1.84 50.4444 2.368 50.4444 3.008C50.4444 3.632 50.2124 4.16 49.7484 4.592C49.3004 5.008 48.7244 5.216 48.0204 5.216ZM50.0604 6.608V20H45.9564V6.608H50.0604ZM57.1385 8.84C57.6185 8.104 58.2185 7.528 58.9385 7.112C59.6585 6.68 60.4585 6.464 61.3385 6.464V10.808H60.2105C59.1865 10.808 58.4185 11.032 57.9065 11.48C57.3945 11.912 57.1385 12.68 57.1385 13.784V20H53.0345V6.608H57.1385V8.84ZM69.3961 20.192C68.0841 20.192 66.9001 19.912 65.8441 19.352C64.8041 18.792 63.9801 17.992 63.3721 16.952C62.7801 15.912 62.4841 14.696 62.4841 13.304C62.4841 11.928 62.7881 10.72 63.3961 9.68C64.0041 8.624 64.8361 7.816 65.8921 7.256C66.9481 6.696 68.1321 6.416 69.4441 6.416C70.7561 6.416 71.9401 6.696 72.9961 7.256C74.0521 7.816 74.8841 8.624 75.4921 9.68C76.1001 10.72 76.4041 11.928 76.4041 13.304C76.4041 14.68 76.0921 15.896 75.4681 16.952C74.8601 17.992 74.0201 18.792 72.9481 19.352C71.8921 19.912 70.7081 20.192 69.3961 20.192ZM69.3961 16.64C70.1801 16.64 70.8441 16.352 71.3881 15.776C71.9481 15.2 72.2281 14.376 72.2281 13.304C72.2281 12.232 71.9561 11.408 71.4121 10.832C70.8841 10.256 70.2281 9.968 69.4441 9.968C68.6441 9.968 67.9801 10.256 67.4521 10.832C66.9241 11.392 66.6601 12.216 66.6601 13.304C66.6601 14.376 66.9161 15.2 67.4281 15.776C67.9561 16.352 68.6121 16.64 69.3961 16.64ZM80.5014 20.192C79.7814 20.192 79.1894 19.984 78.7254 19.568C78.2774 19.136 78.0534 18.608 78.0534 17.984C78.0534 17.344 78.2774 16.808 78.7254 16.376C79.1894 15.944 79.7814 15.728 80.5014 15.728C81.2054 15.728 81.7814 15.944 82.2294 16.376C82.6934 16.808 82.9254 17.344 82.9254 17.984C82.9254 18.608 82.6934 19.136 82.2294 19.568C81.7814 19.984 81.2054 20.192 80.5014 20.192Z"
                        fill="black" />
                </svg>
                <p class="grey-text">400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA</p>
            </div>
            <ul class="footer-nav">
                <li class="footer-nav-item footer-title">Links</li>
                <li class="footer-nav-item" v-for="route in $router.options.routes.filter(route => route.name)" :key="route.path">
                    <RouterLink :to="route.path">{{ route.name }}</RouterLink>
                </li>
            </ul>
            <ul class="footer-nav">
                <li class="footer-nav-item footer-title">Help</li>
                <li class="footer-nav-item" v-for="route in footerList" :key="route.path">
                    <RouterLink :to="route.path">{{ route.name }}</RouterLink>
                </li>
            </ul>
            <div class="footer-form">
                <p class="footer-title">Newsletter</p>
                <form action="">
                    <input placeholder="Enter Your Email Address" class="footer-form-input" type="text">
                    <input class="footer-form-submit" type="submit" value="SUBSCRIBE">
                </form>
            </div>
        </div>
        <div class="footer-bot">
            <p>2023 furino. All rights reverved</p>
        </div>
    </footer>
</template>

<script setup>
import HomePage from '@/pages/HomePage/HomePage.vue';
import { RouterLink } from 'vue-router';

const footerList = [
    {
        path: '/',
        component: HomePage,
        name: 'Payment Options'
    },
    {
        path: '/',
        component: HomePage,
        name: 'Returns'
    },
    {
        path: '/',
        component: HomePage,
        name: 'Privacy Policies'
    },
]
</script>