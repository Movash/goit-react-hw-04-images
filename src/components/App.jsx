import { getImagesBySearch } from './../api/Images';
import { useCallback, useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Preview from './Preview/Preview';

import React from 'react'

const App = () => {
  const [images, setImages] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [isShowButton, setIsShowButton] = useState(false)

  const fetchImages = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');
      setIsShowButton(false);
      const data = await getImagesBySearch(searchQuery, page);
      if (!data.hits.length) {
        Notify.info(`No images`);
        return;
      }
      const numberOfPage = Math.ceil(data.totalHits / 12);
      setImages(prevState => [...prevState, ...data.hits]);
      setIsShowButton(numberOfPage !== page);
    } catch ({ message }) {
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [page, searchQuery]);

  useEffect(() => {
      searchQuery && fetchImages();
    }, [fetchImages, searchQuery]);

  const handleSetSearchQuery = value => {
    if (!value.trim() || value === searchQuery) {
      Notify.info(`Change your search query`);
      return;
    }
    setSearchQuery(value);
    setImages([]);
    setPage(1);
  };

  const handleMoreImage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <Searchbar onSubmit={handleSetSearchQuery} />
      {isLoading && <Loader />}
      {!images.length ? <Preview /> : <ImageGallery images={images} />}
      {isShowButton && <Button handleMoreImage={handleMoreImage} />}
    </div>
  );
}

export default App