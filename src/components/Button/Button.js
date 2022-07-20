import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ loadImg }) => {
    return (
        <button className={css.buttonLoad} onClick={loadImg} type="button">Loading...</button>
    )
};

Button.propTypes = {
    loadImg:PropTypes.func.isRequired,
}
