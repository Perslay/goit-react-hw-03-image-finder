// import PropTypes from 'prop-types';
import css from '../styles/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imageURL, alt }) => {
  return (
    <li className={css.galleryItem}>
      <img className={css.image} src={imageURL} alt={alt} />
    </li>
  );
};
