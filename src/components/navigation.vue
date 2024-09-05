<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container-fluid m-0 p-0">
        <nav class="navbar navbar-expand-lg fixed-top mx-5 my-2 px-5">
            <div class="container-fluid">
                <a class="navbar-brand me-auto p-0" href="#"><img src="../assets/logo.png" alt="logo" height="65vh"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink to="/" class="nav-link" id="btnA">Home</RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.navbar {
    height: 80px;
    margin: 1vh;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.3s ease;
    backdrop-filter: blur(1rem);
}

.navbar-brand {
    font-weight: 500;
    color: rgb(238, 238, 238);
    height: 50;
    transition: 0.3s color;
}

.navbar-toggler {
    border: none;
    font-size: 1.25rem;
}

.navbar-toggler:focus, btn-close:focus {
    box-shadow: none;
    outline: none;
}


.nav-link {
    color: #ffffff;
    font-weight: 500;
    position: relative;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease; /* Smooth transition for nav-link background color */
    transition: transform 0.25s ease, 
                border-right 0.25s ease, 
                border-bottom 0.25s ease, 
                box-shadow 0.25s ease;
    border-right: 0rem solid rgba(255, 255, 255, 0.1);
    border-bottom: 0rem solid rgba(255, 255, 255, 0.1);
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-right: 0.2rem solid rgba(255, 255, 255, 0.1);
    border-bottom: 0.2rem solid rgba(255, 255, 255, 0.1);
    box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
}

#navbarNavAltMarkup {
    justify-content: end;
    text-align: center;
}
</style>
