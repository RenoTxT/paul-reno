<script setup>
</script>

<template>
    <div class="container-fluid p-0">
        <div class="row first justify-content-evenly">
            <div class="col images text-center">
                <img src="../assets/profile.jpg" class="img-fluid" alt="">
            </div>
            <div class="col description mx-2 text-center">
                <h3>My name is Kanna<br>I'm A Magical Cat, Welcome to K-Labs!</h3>
            </div>
        </div>
        <div class="row text-center text-light soundcloud-pages-1">
            <h1>Top 3 Favorite Music</h1>
        </div>
        <div class="row text-center soundcloud-pages-2">
            <div class="col py-2">
                <iframe class="soundcloud" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1137553867&color=%2387ceeb&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true" width="50%" height="352"></iframe>
            </div>
            <div class="col py-2">
                <iframe class="soundcloud" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/343417227&color=%2523ff9000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true" width="50%" height="352"></iframe>
            </div>
            <div class="col py-2">
                <iframe class="soundcloud" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367930001&color=%233586ee&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true" width="50%" height="352"></iframe>
            </div>
        </div>
        <!-- <div class="row currency-heading">
            <h1 class="fs-2 text-light text-center">My Country Currency</h1>
        </div> -->
        <div class="row">
        </div>
    </div>
</template>

<style scoped>
.container-fluid{
    margin-top: 15vh;
    height: auto;
}

img{
    max-height: 100%;
    width: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Cover the container while maintaining aspect ratio */
}


.first{
    height: auto;
    align-content: center;
    align-items: center;
}

.soundcloud{
    border-radius: 2rem;
    min-width: 350px;
    max-width: 350px;
    overflow: hidden;
}

.soundcloud-pages-1{
    padding-top: 25vh;
}

.soundcloud-pages-2{
    padding-top: 10vh;
    padding-bottom: 15vh;
}

.images{
    align-content: center;
    justify-items: center;
    max-height: 50vh;
    max-width: 25vw;
    min-width: 250px;
}

.img-fluid{
    border-radius: 15rem;
}


.description{
    width: 40%;
    max-width: 50vw;
    max-height: 20vh;
    width: 100%;
    min-width: 480px;
    align-content:center ;
    backdrop-filter: blur(0.2rem);
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    height: 25vh;
}

@media (max-width: 800px) {
    .soundcloud-pages-1 {
        padding-top: 5vh;
    }
    .description{
        margin-top: 2vh;
    }
}

@media (max-width: 600px) {
    .soundcloud-pages-1 {
        padding-top: 5vh;
    }
    .description{
    width: 40%;
    max-width: 50vw;
    max-height: 10vh;
    width: 100%;
    min-width: 350px;
    height: 25vh;
    border-radius: 1rem;
    }
    h3{
    font-size: 1rem;
    }
    .soundcloud-pages-2{
    padding-top: 5vh;
    }   
}


</style>
