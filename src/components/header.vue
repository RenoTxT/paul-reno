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
        <!-- <div class="row currency-heading">
            <h1 class="fs-2 text-light text-center">My Country Currency</h1>
        </div> -->
        <div class="row currency">
            <div class="col text-light text-center p-0 m-0 text-heading">
                <div class="row  m-0 p-0 the-text"><h1 class="vertical-text">K<br><br>G<br>r<br>o<br>u<br>p<br><br>C<br>u<br>r<br>r<br>e<br>n<br>c<br>y</h1></div>
            </div>
            <div class="col trading-view-chart m-0">
                <div id="tradingview-widget-container" class="tradingview-widget-container"></div>
            </div>
        </div>
        <div class="row">
            <h1>Enjoy Some Music!</h1>
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

.currency{
    padding-top: 25vh;
    padding-left: 12.5vw;
}

.text-heading{
    align-content: center;
    padding: 0;
    max-width: 5vw;
}

.the-text{
    height: 85vh;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(0.2rem);
    border-radius: 1rem;
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

.vertical-text{
    color: rgb(255, 255, 255);
    font-size: 1.75rem;
}
.currency-heading{
    padding-top: 15vh;
}

.trading-view-chart{
    align-content: center;
    justify-content: center;
    padding-top: 1rem;
    padding-left: 5vw;
}


.tradingview-widget-container {
    border-radius: 1rem; /* Rounded corners */
    overflow: hidden;
    max-width: 75vw;
    min-width: 25vw;
    width: 100%; /* Make the container responsive */
    height: 30vh; /* Adjust the height as needed */
}
</style>
