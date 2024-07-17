<template>
    <div ref="stickyBlock" class="filter-sidebar" :style="{ height: height + 'px' }">
        <div class="filter-sidebar-wrapper">
            <p>filters</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

let stickyBlock
let stickyBlockY
let stickyBlockBottom
let stickyBlockTop
let height = ref(0);

onMounted(() => {
    stickyBlock = document.querySelector('#sticky-block');
    console.log(stickyBlock?.getBoundingClientRect());
    stickyBlockY = stickyBlock?.getBoundingClientRect().y;
    stickyBlockBottom = stickyBlock?.getBoundingClientRect().bottom;
    stickyBlockTop = stickyBlock?.getBoundingClientRect().top;
    height.value = window.innerHeight - stickyBlockY;

})

document.addEventListener('scroll', () => {

    stickyBlockY = stickyBlock?.getBoundingClientRect().y;
    console.log(stickyBlockBottom, stickyBlockTop, window.scrollY);
    if (stickyBlockTop < window.scrollY && stickyBlockBottom > window.scrollY) {
        height.value = window.innerHeight - stickyBlockY;
        console.log(height.value);
    }

})

</script>
