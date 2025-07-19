const apiKey = '8c8530f0f5f0040c40f60275a4355cd1'; // Will be replaced during CI

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('City not found');
  const data = await res.json();
  return {
    temperature: data.main.temp,
    city: data.name,
    condition: data.weather[0].description,
  };
}

// UI handler for browser
async function getWeather() {
  const city = document.getElementById('city').value.trim();
  const result = document.getElementById('result');
  if (!city) {
    result.textContent = 'Please enter a city name.';
    return;
  }
  result.textContent = 'Loading...';
  try {
    const data = await fetchWeather(city);
    result.textContent = `Weather in ${data.city}: ${data.temperature}°C, ${data.condition}`;
  } catch (err) {
    result.textContent = err.message;
  }
}

module.exports = { fetchWeather };