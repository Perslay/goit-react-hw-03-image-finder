// import PropTypes from 'prop-types';
import css from '../styles/ImageGalleryItem.module.css';
import { nanoid } from 'nanoid';

export const ImageGalleryItem = ({ images }) => {
  return (
    <li key={nanoid()} className={css.galleryItem}>
      <div className={css.containerImage}>
        <img src="" alt="image" />
      </div>
    </li>
  );
};

// {
//   catFacts.length > 0 &&
//     catFacts.map(({ text, _id }) => <li key={_id}>{text}</li>);
// }
