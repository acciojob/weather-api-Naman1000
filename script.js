//your JS code here. If required.
document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const apiKey = '38b82f2339f4ab13e938f7cffdbb6550'; // Replace with your actual API key
  const city = 'London';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const weatherDescription = data.weather[0].main;
      document.getElementById('weatherData').textContent = `Current weather in ${city}: ${weatherDescription}`;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      document.getElementById('weatherData').textContent = 'Error fetching weather data.';
    });
});
