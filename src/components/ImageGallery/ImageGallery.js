// import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery =({images, showImg})=>{
        return (
            <ul className={css.gallery}>
                
             {images.map(({webformatURL,  tags, id,},index) => (
                <ImageGalleryItem key={id} imgURL={webformatURL} alt={tags} onClick={showImg} indexImg={index} l />
            ))}
            
             </ul>      
   )
 
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        index: PropTypes.number,
    })),
    showImg: PropTypes.func.isRequired,
};

