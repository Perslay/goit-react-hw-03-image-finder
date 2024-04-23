// import PropTypes from 'prop-types';
import css from '../styles/ImageGallery.module.css';
import React from 'react';
import { nanoid } from 'nanoid';

export const ImageGallery = ({ children, images }) => {
  return (
    <ul className={css.gallery}>
      {/* {React.Children.map(children, child => (
        <>{child}</>
      ))} */}
      {images &&
        images.length > 0 &&
        images.map(({ previewURL, tags }) => (
          <li key={nanoid()}>
            <img src={previewURL} alt={tags} />
          </li>
        ))}
    </ul>
  );
};
