// import PropTypes from 'prop-types';
import css from '../styles/Modal.module.css';

export const Modal = () => {
  return (
    <div className={`${css.overlay} ${css.hidden}`}>
      <div className={css.modal}>
        <p>Modal</p>
      </div>
    </div>
  );
};
