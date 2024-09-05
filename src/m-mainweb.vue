<script setup>
import mNav from './components/navigation.vue';
import mHead from './components/header.vue';
import mContact from './components/contact.vue';
</script>

<template>
    <div class="container-fluid m-0 px-0 pb-2 pt-0 mHead">
        <div class="opacity-control">
            <div class="container-fluid m-0 p-0">  
                <mNav />
            </div>
            <div class="container-fluid m-0 px-0 py-2 mHero">   
                <mHead />
            </div>
        </div>
    </div>
    <div class="container-fluid m-0 py-2 mContact">
        <mContact />
    </div>
    
</template>

<style scoped>
.mHead{   
  background-image: url(./assets/bg-head.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
}

.opacity-control{
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
}

.mContact{
    background: linear-gradient(-20deg, #b0b0b0 50%, #1a1a1a 50%);
}

.mHero{
    height: auto;
}
</style>