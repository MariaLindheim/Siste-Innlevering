
/* forside*/







/* Plante spill*/
document.getElementById('water').addEventListener('click', waterPlants);
document.getElementById('harvest').addEventListener('click', harvestPlants);

function waterPlants() {
    console.log("Plantene er vannet!");
    // Implementer logikken for å vann plantene
}

function harvestPlants() {
    console.log("Plantene er høstet!");
    // Implementer logikken for å høste plantene
}

function simulateWeather() {
    const weather = Math.random();
    if (weather < 0.3) {
        console.log("Dårlig vær");
        // Reduser livet til plantene
    } else if (weather < 0.6) {
        console.log("Regn");
        // Øk livet til plantene
    } else {
        console.log("Sol");
        // Øk livet til plantene enda mer
    }
}

setInterval(simulateWeather, 5000); // Vær simulering hvert 5. sekund
