import { Component } from "react";

import galleryAPI from 'services/gallery';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";




// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export class App extends Component {
  state = {
    images: null,
    imagesName: ' ',
    page: 1,
    status: 'idle',
    showModal: false,
    imgModal:0,
  };

  componentDidUpdate(prevProps, prevState) {
        const prevName = prevState.imagesName;
    const nextName = this.state.imagesName;
    
    if (prevName !== nextName || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' })
            return galleryAPI.fetchImg(nextName, this.state.page)
              .then(images => {
                if (images.total === 0) {
            return this.setState({status: 'rejected'})
          }
       
          
          if (!this.state.images) {
            return this.setState({ images: images.hits, status:'resolved' })
          }
          return this.setState({ images: [...prevState.images, ...images.hits], status:'resolved' })
        })
        } 
    };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };
  
  handleFormSubmit = imagesName => {
    this.setState({ imagesName, page: 1, images: null });
  };

  toggleModal = (index) => {
    this.setState({imgModal:index})
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  };

  render() {
    const {  images, status, showModal, imgModal, } = this.state;
    
    return (
      <>
        {showModal && <Modal onClose={this.toggleModal} image={images[imgModal].largeImageURL} alt={images[imgModal].tags} />}
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && <ImageGallery images={images} showImg={this.toggleModal} />}
        {status === "pending" && <Loader />}
        {status==="resolved"  && <Button loadImg={this.loadMore} />}
        {status==="rejected"&&<p>Nothing found</p>}
      
      </>
    )
  };
};
