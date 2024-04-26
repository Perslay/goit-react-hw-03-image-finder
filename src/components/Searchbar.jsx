import PropTypes from 'prop-types';
import css from '../styles/Searchbar.module.css';

export const Searchbar = ({ handleForm }) => {
  return (
    <header className={css.searchbar}>
      <form onSubmit={handleForm} className={css.form}>
        <button type="submit" className={css.button}>
          <span className="button-label">Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleForm: PropTypes.func.isRequired,
};
