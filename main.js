let signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
let celestialBodies = ['Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
let messageContents = ['your future is uncertain', 'riches are coming to you', 'the stars are in your favor', 'don\'t make any big investments', 'avoid dark places', 'building relationships will bring you joy', 'you should get 3 cats'];

function messageGenerator () {
    let sign = signs[(Math.floor(Math.random() * signs.length))];
    let celestialBody = celestialBodies[(Math.floor(Math.random() * celestialBodies.length))];
    let messageContent = messageContents[(Math.floor(Math.random() * messageContents.length))];
    let message = `${celestialBody} is in ${sign}, so ${messageContent}.`
    console.log(message);
}


messageGenerator();