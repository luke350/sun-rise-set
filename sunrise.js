navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude; // gets latitude
  const lon = position.coords.longitude; // gets longitude
  document.getElementById("coords").textContent = `Latitude: ${lat}, Longitude: ${lon}`; // to display coordinates
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunrise,sunset&timezone=auto&forecast_days=1`) // fetches the open meteo api
    .then(r => r.json())
    .then(data => {
      const formatTime = (iso) => new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // time formatting
      document.getElementById("sunrise").textContent = `Sunrise: ${formatTime(data.daily.sunrise[0])}`; // for showing the sunrise time
      document.getElementById("sunset").textContent = `Sunset: ${formatTime(data.daily.sunset[0])}`; // for showing the sunset time
    });
});
