import PropTypes from 'prop-types';
import css from '../styles/Button.module.css';

export const Button = () => {
  return (
    <button type="button" className={css.button}>
      Load more
    </button>
  );
};
