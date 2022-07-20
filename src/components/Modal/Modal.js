
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

import css from './Modal.module.css';
import { useEffect } from "react";

const modalRoot = document.querySelector('#modal')


export const Modal = ({image, alt, onClose}) => {
    
       const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        }
    }, );
 
    const handleBackDropClick = (evt) => {
        if (evt.currentTarget === evt.target)
            onClose();
    };



       
    return createPortal(<div className={css.overlay} onClick={handleBackDropClick}>
        <div className={css.modal}>
            <img src={image} alt={alt} />
        </div>
    </div>,
        modalRoot)
    
};

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}
// const modalRoot = document.querySelector('#modal')

// export class Modal extends Component{
//     static propTypes = {
//         image: PropTypes.string.isRequired,
//         alt:PropTypes.string.isRequired,
//    }

//     componentDidMount() {
//         window.addEventListener('keydown',this.handleKeyDown)
//     };
//     componentWillUnmount() {
//         window.removeEventListener('keydown',this.handleKeyDown)
//     }

//     handleKeyDown = e => {
//         if (e.code === 'Escape') {
//             this.props.onClose();
//         }
//     };

//     handleBackDropClick = (evt) => {
//         if (evt.currentTarget === evt.target)
//             this.props.onClose();
//     };



//     render() {
//         const { image, alt } = this.props;
       
//         return createPortal(<div className={css.overlay} onClick={this.handleBackDropClick}>
//             <div className={css.modal}>
//                 <img src={image} alt={alt} />
//             </div>
//         </div>,
//         modalRoot)
//     }
// }