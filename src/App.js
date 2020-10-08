import React from 'react';
import useGet from './data/useGet';
import {
  makeWeatherUrl,
  makeUnsplashUrl,
} from './data/utils/constants';

function App() {
  const {
    resolver: {
      data: WeatherData,
      loading: isWeatherAPILoading,
    },
    handleOnSubmit,
  } = useGet(makeWeatherUrl);

  const {
    resolver: {
      data: ImageData,
      loading: isImageAPILoading,
    },
    handleOnSubmit: handleOnImgSubmit,
  } = useGet(makeUnsplashUrl);

  React.useEffect(() => {
    handleOnSubmit({ city: 'taipei' });
    handleOnImgSubmit({ query: 'taipei' });
  }, []);

  return (
    <div className="App">
      {isWeatherAPILoading && isImageAPILoading
        ? 'loading'
        : 'Hello'}
    </div>
  );
}

export default App;
