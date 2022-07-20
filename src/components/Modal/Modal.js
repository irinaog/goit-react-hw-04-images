import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal')

export class Modal extends Component{
    static propTypes = {
        image: PropTypes.string.isRequired,
        alt:PropTypes.string.isRequired,
   }

    componentDidMount() {
        window.addEventListener('keydown',this.handleKeyDown)
    };
    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackDropClick = (evt) => {
        if (evt.currentTarget === evt.target)
            this.props.onClose();
    };



    render() {
        const { image, alt } = this.props;
       
        return createPortal(<div className={css.overlay} onClick={this.handleBackDropClick}>
            <div className={css.modal}>
                <img src={image} alt={alt} />
            </div>
        </div>,
        modalRoot)
    }
}