# Weather App

A clean, responsive browser-based weather application that retrieves current
weather conditions for any city using the OpenWeatherMap API.

## Features

- Search for a city by name
- Display the city, country, temperature in Celsius, and weather description
- Show useful messages for empty searches, invalid cities, and connection errors
- Responsive glassmorphism-inspired interface
- Accessible search controls and live weather results
- Mobile-friendly layout with a modern dark theme

## Project Structure

```text
Weather-Api/
├── index.html   # Application markup
├── style.css    # Application styles
├── script.js    # Weather API request and UI logic
├── README.md     # Project documentation
└── LICENSE      # MIT license
```

## Getting Started

1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Open `script.js` and set `apiKey` to your own key:

   ```js
   let apiKey = "your-openweathermap-api-key";
   ```

3. Open `index.html` in a browser.
   Alternatively, serve the folder with any local web server and open the
   provided local URL.
4. Enter a city name and select **Search**.

## Technologies

- HTML
- CSS
- JavaScript
- OpenWeatherMap Current Weather API

## Author

Made by **Tirthankar Narayan Basu**.

## License

This project is available under the [MIT License](LICENSE).
