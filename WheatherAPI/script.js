function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "61e033d324d04eb3fae41c044c589eec"; // Replace with your real API key

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherDiv = document.getElementById("weatherResult");

      if (data.cod === 200) {
        weatherDiv.innerHTML = `
          <h3>Weather in ${data.name}</h3>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Condition: ${data.weather[0].main}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      } else {
        weatherDiv.innerHTML = `<p style="color:red;">City not found!</p>`;
      }
    })
    .catch(error => {
      console.log("Error:", error);
    });
}
