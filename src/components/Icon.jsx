import React, { useEffect, useState } from 'react';
import { getWeather } from '../services/api';

const Icon = function icon() {
  const [data, setData] = useState();

  useEffect(() => {
    getWeather(setData);
  }, []);

  return <h1>{data ? data.results.description : 'Carregando...'}</h1>;
};

export default Icon;
