<script setup>

</script>

<template>
    <div class="container-fluid p-0">
        <div class="row justify-content-evenly">
            <div class="col-5 images text-center">
                <img src="../assets/profile.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-5 description text-center">
                <h3 class="fs-2 mb-1">My name is Kanna<br>The Magic Cat of Codemaxxing Kingdom!</h3>
                <p class="fs-6 mt-1">What are you looking for?</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid{
    margin-top: 15vh;
    height: auto;
}

img{
    height: 85%;
}

.row{
    height: 100vh;
    align-content: center;
    padding-bottom: 25vh;
}

.images{
    align-content: center;
    justify-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    max-height: 50vh;
    max-width: 25vw;
    border-radius: 2rem;
    backdrop-filter: blur(0.1rem);
    min-width: 250px;

}

.img-fluid{
    border-radius: 15rem;
}

.description{
    margin-top: 8vh;
    margin-bottom: 8vh;
    margin-left: 1vw;
    margin-right: 1vw;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
    width: 40%;
    backdrop-filter: blur(0.1rem);
    max-width: 50vw;
    width: 60%;
    min-width: 350px;
    align-content:center ;
}
</style>
