document.addEventListener('DOMContentLoaded', function() {
    const cityName = document.getElementById('cityName');
    const result = document.getElementById('result');

    // Array of possible weather conditions
    const weatherConditions = [
        { temperature: '20°C', condition: 'Sunny' },
        { temperature: '15°C', condition: 'Cloudy' },
        { temperature: '25°C', condition: 'Hot' },
        { temperature: '10°C', condition: 'Rainy' },
        { temperature: '5°C', condition: 'Snowy' },
        { temperature: '18°C', condition: 'Windy' },
        { temperature: '22°C', condition: 'Partly Cloudy' }
    ];

    // Function to get random weather
    function getRandomWeather() {
        const randomIndex = Math.floor(Math.random() * weatherConditions.length);
        return weatherConditions[randomIndex];
    }

    // Function to display random weather
    function displayRandomWeather() {
        const weather = getRandomWeather();
        result.innerText = `The weather in ${cityName.value || 'your city'}: ${weather.temperature}, ${weather.condition}`;
    }

    // Initial display of random weather on page load
    displayRandomWeather();
    
    // Event listener for 'Get Weather' button
    document.getElementById('getWeatherBtn').addEventListener('click', displayRandomWeather);
});