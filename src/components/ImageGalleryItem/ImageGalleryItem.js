import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ alt, imgURL, onClick, indexImg }) => {
    return (
        <li className={css.galleryItem} onClick={() => onClick(indexImg)}>
            <img src={imgURL} alt={alt} width='240px' />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    imgURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

