import {  useEffect, useState } from "react";

import galleryAPI from 'services/gallery';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";


export const App = () => {
  const [images, setImages] = useState(null);
  const [imagesName, setImagesName] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [imgModal, setImgModal] = useState(0);

  useEffect(() => {
    if (!imagesName) {
      return;
    }

    setStatus('pending')
    galleryAPI
      .fetchImg(imagesName, page)
      .then(images => {
        if (images.total === 0) {
          return setStatus('rejected')
        }
        
        if (page===1) {
          setImages([...images.hits]);
          setStatus('resolved');
          return 
          
        }
        setImages(prevState => [...prevState, ...images.hits]);
        setStatus('resolved');
        return
        
        
      })

  }, [imagesName, page]);



  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleFormSubmit = imagesName => {
    setImagesName(imagesName);
    setImages(null);
    setPage(1);
  };

  const toggleModal = (index) => {
    setImgModal(index);
    setShowModal(prevState => !prevState);
  };


    return (
      <>
        {showModal && <Modal onClose={toggleModal} image={images[imgModal].largeImageURL} alt={images[imgModal].tags} />}
        <Searchbar onSubmit={handleFormSubmit} />
        {images && <ImageGallery images={images} showImg={toggleModal} />}
        {status === "pending" && <Loader />}
        {status === "resolved" && <Button loadImg={loadMore} />}
        {status === "rejected" && <p>Nothing found</p>}
      
      </>
    )
  
};


