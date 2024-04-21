import PropTypes from 'prop-types';
import css from '../styles/App.module.css';

import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';

export const App = () => {
  return (
    <div className={css.app}>
      <Searchbar />
      <Loader />
      <ImageGallery>
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
      </ImageGallery>
      <Button />
      <Modal />
    </div>
  );
};
