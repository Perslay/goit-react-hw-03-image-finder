// import PropTypes from 'prop-types';
import css from '../styles/App.module.css';
import { useState, useEffect } from 'react';

import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';

export const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  const handlePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const fetchData = async () => {
    setLoading(true);
    const query = `https://pixabay.com/api/?q=cat&page=${currentPage}&key=42513703-cc305044521a10f5f63ac2280&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const response = await fetch(query);
      const data = await response.json();
      const uniqueImages = data.hits.filter(
        image => !images.some(existingImage => existingImage.id === image.id)
      );
      setImages(prevImages => [...prevImages, ...uniqueImages]);
      console.log(uniqueImages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (mounted) {
      fetchData();
    } else {
      setMounted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, mounted]);

  return (
    <div className={css.app}>
      <Searchbar />
      {loading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {/* <ImageGallery images={images.hits}>
        <ImageGalleryItem images={images.hits} />
      </ImageGallery> */}
      <Button handlePage={handlePage} />
      <Modal />
      {error}
    </div>
  );
};
