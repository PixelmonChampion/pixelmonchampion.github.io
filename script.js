// Toggle GIF version of Pokémon artwork
document.getElementById('gif-toggle').addEventListener('click', function () {
    const artwork = document.getElementById('pokemon-artwork');
    if (artwork.src.includes('image_path.jpg')) {
        artwork.src = 'gif_path.gif';  // Set to GIF path
        this.innerText = 'Show Static Image';
    } else {
        artwork.src = 'image_path.jpg';  // Set to static image path
        this.innerText = 'Show GIF';
    }
});

// Stat animation effect
const statBars = {
    hp: document.getElementById('hp-stat'),
    attack: document.getElementById('attack-stat'),
    defense: document.getElementById('defense-stat'),
    speed: document.getElementById('speed-stat')
};

function animateStat(stat, value) {
    let progress = 0;
    const interval = setInterval(function () {
        progress += 1;
        stat.style.width = progress + '%';
        if (progress >= value) clearInterval(interval);
    }, 15);
}

animateStat(statBars.hp, 75);  // Example for HP stat
animateStat(statBars.attack, 50);  // Example for Attack stat
animateStat(statBars.defense, 60);  // Example for Defense stat
animateStat(statBars.speed, 40);  // Example for Speed stat
