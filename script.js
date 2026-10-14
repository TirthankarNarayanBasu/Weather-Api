let apiKey = "bb3ace22c8848d34f8663e60b18e60df";
async function getWeather() {
    let city = document.getElementById("city").value;
    if (city === "") {
        alert("Enter a city name!");
        return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        if (response.ok) {
            document.getElementById("name").innerText =
                data.name + ", " + data.sys.country;
            document.getElementById("temp").innerText =
                data.main.temp + " °C";
            document.getElementById("desc").innerText =
                data.weather[0].description;
            document.getElementById("error").innerText = "";
        } else {
            document.getElementById("error").innerText =
                data.message;
        }
    } catch (error) {
        document.getElementById("error").innerText =
            "Connection error! Try again.";
    }
}