<script setup>

</script>

<template>
    <div class="container-fluid text-center px-3 py-2 my-3">
        <div class="row">
            <h1>Contact Me</h1>
        </div>
        <div class="row justify-content-evenly m-0 contact-button">
            <div class="col">
                <a href="https://www.instagram.com/paulreno_m" target="_blank">
                    <div class="link">
                        <i class="fa fa-instagram"></i>
                    </div>
                </a>
            </div>
            <div class="col">
                <a href="https://www.facebook.com/reno.mardiputra/" target="_blank">
                    <div class="link">
                        <i class="fa fa-facebook"></i>
                    </div>
                </a>
            </div>
            <div class="col">
                <a href="https://x.com/Renn0_1" target="_blank">
                    <div class="link">
                        <i class="fa fa-twitter"></i>
                    </div>
                </a>
            </div>
            <div class="col">
                <a href="https://id.linkedin.com/in/reno-mardiputra" target="_blank">
                    <div class="link">
                        <i class="fa fa-linkedin"></i>
                    </div>
                </a>
            </div>
            <div class="col">
                <a href="https://github.com/RenoTxT/" target="_blank">
                    <div class="link">
                        <i class="fa fa-github"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    color: white;
    width: 94vw;
    font-size: 2.5rem;
    border-radius: 2rem;
    height: 100vh;
}

.row {
    align-content: center;
    padding-top: 20vh;
}

.contact-button{
    padding-top: 15vh;
}

.col {
    margin-left: 5vw;
    margin-right: 5vw;
    padding: 0;
    margin-bottom: 0;
    margin-top: 0;
    background-color: rgba(100, 149, 237, 0.4);
    border-right: 0rem solid rgba(255, 255, 255, 0.2);
    border-bottom: 0rem solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(1rem);
    border-radius: 1rem;
    height: 15vh;
    width: 25vw;
    align-content: center;
    transition: transform 0.5s ease, 
                border-right 0.5s ease, 
                border-bottom 0.5s ease, 
                box-shadow 0.5s ease;
    overflow: hidden;
}

.col:hover {
    transform: translateY(-1vh) translateX(-1vw);
    border-right: 0.5rem solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0.2);
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
}

a{
    text-decoration: none;
    color: white;
}

.link{
    height: 100%;
    align-content: center;
}
</style>
