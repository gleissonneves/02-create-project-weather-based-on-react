/**
 * Esta função busca os dados do clima da sua cidade.
 *
 * @param {*} setValue
 * [obrigatório] função do useState.
 * @param {*} errorFunction
 * [opcional] Função que executará caso o usuário negue
 * a localização (pode receber o parâmetro de erro).
 */

const { REACT_APP_API_WEATHER: api, REACT_APP_API_KEY: key } = process.env;

function getWeather(setValue, error) {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      const response = await fetch(
        `${api}?format=json-cors&key=${key}&lat=${latitude}&lon=${longitude}`,
      );

      const result = await response.json();

      setValue(result);
    },
    (err) => {
      if (error) {
        error(err);
      } else {
        console.warn(`Error ${err.code}: ${err.message}`);
      }
    },
  );
}

export { getWeather };
