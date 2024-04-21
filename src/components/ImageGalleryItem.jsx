import PropTypes from 'prop-types';
import css from '../styles/ImageGalleryItem.module.css';
import { nanoid } from 'nanoid';

export const ImageGalleryItem = () => {
  return (
    <li key={nanoid()} className={css.galleryItem}>
      <div className={css.containerImage}>
        <img src="" alt="image" />
      </div>
    </li>
  );
};
