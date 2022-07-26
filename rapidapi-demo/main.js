import './style.css'

const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const GEOLOCATION_URL = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json"
const GEOLOCATION_HOST = "ip-geo-location.p.rapidapi.com"

const getData = async (url, host) => {
  const response = await fetch(url,{
    method: "GET", 
    headers: {
      accept: "application/json",
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": host,
    },
  });

  if(!response.ok) {
    throw new Errror(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

const runApiQueries = async () => {
  // get city name
  const geoData = await getData(GEOLOCATION_URL, GEOLOCATION_HOST);
  console.log(geoData);
}

runApiQueries();