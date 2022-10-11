import { useEffect, useState } from 'react';

function useImages(query) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (query === '') return;
    //The NASA API is called and then the results go to the state
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => response.json())
      .then(json => setImages(json.collection.items));
  }, [query]);

  return images;
}

export { useImages };
