import { useEffect, useState } from 'react';

function useImages(query) {
  const [images, setImages] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (query === '') return;
    setIsFinished(false);
    //The NASA API is called and then the results go to the state
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => response.json())
      .then(json => {
        setImages(json.collection.items);
        setIsFinished(true);
      });
  }, [query]);

  return [images, isFinished];
}

export { useImages };