import React, { useState } from 'react';
import SearchForm from '../components/search/SearchForm';
import SearchResults from '../components/search/SearchResults';
import { useImages } from '../apis/nasa';

export default function search() {
  const [query, setQuery] = useState('');
  const [images] = useImages(query);

  return (
    <div>
     <SearchForm  onSetQuery={(value) => setQuery(value)} />
     <SearchResults images={images} />
    </div>
  );
}
