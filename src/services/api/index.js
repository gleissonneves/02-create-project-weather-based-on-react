function getWeather() {
  fetch('https://api.hgbrasil.com/weather?key=2e633e63&woeid=455880', {
    headers: {
      'Access-Control-Allow-Origin': '200.140.90.228',
    },
  })
    .then((res) => res.json())
    .then(
      (result) => result,
      (error) => error,
    );
}

export default getWeather;
