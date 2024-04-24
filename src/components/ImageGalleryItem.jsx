// import PropTypes from 'prop-types';
import css from '../styles/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imageURL, alt }) => {
  return (
    <li className={css.galleryItem}>
      <div className={css.containerImage}>
        <img src={imageURL} alt={alt} />
      </div>
    </li>
  );
};
