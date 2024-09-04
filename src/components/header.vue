<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Create the TradingView widget script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
    width: "980",
    height: "610",
    symbol: "BITSTAMP:BTCUSD",
    interval: "D",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    allow_symbol_change: true,
    calendar: false,
    support_host: "https://www.tradingview.com"
  });

  // Append the script to the container
  document.getElementById('tradingview-widget-container').appendChild(script);
});
</script>

<template>
    <div class="container-fluid p-0">
        <div class="row first justify-content-evenly">
            <div class="col images text-center">
                <img src="../assets/profile.jpg" class="img-fluid" alt="">
            </div>
            <div class="col description mx-2 text-center">
                <h3>My name is Kanna<br>The Magic Cat of Codemaxxing Kingdom!</h3>
            </div>
        </div>
        <div class="row text-center text-light pt-5">
            <h1>Top 3 Favorite Music</h1>
        </div>
        <div class="row text-center py-5">
            <div class="col">
                <iframe class="spotify" src="https://open.spotify.com/embed/track/5f9W174NPbE0OiQeo0D5Wx?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div class="col">
                <iframe class="spotify" src="https://open.spotify.com/embed/track/6CRX3ENpLq42r0iBSjOqr1?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div class="col">
                <iframe class="spotify" src="https://open.spotify.com/embed/track/0EDgUNdoWnRslGw6epuJY9?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
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

.spotify{
    border-radius: 2rem;
    min-width: 350px;
    max-width: 350px;
    overflow: hidden;
}

.images{
    align-content: center;
    justify-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    max-height: 50vh;
    max-width: 25vw;
    border-radius: 2rem;
    backdrop-filter: blur(0.1rem);
    min-width: 150px;

}

.img-fluid{
    border-radius: 15rem;
}


.description{
    width: 40%;
    max-width: 50vw;
    max-height: 20vh;
    width: 100%;
    min-width: 250px;
    align-content:center ;
    backdrop-filter: blur(0.2rem);
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    height: 25vh;
}

</style>
