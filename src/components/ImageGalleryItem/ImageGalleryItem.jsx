import { useState } from 'react';
import Modal from './../Modal/Modal';

const ImageGalleryItem = ({ image }) => {

  const [isShowModal, setIsShowModal] = useState(false)

return (
  <li className="ImageGalleryItem">
    <img
      onClick={() => setIsShowModal(true)}
      className="ImageGalleryItem-image"
      src={image.webformatURL}
      alt="img"
    />
    {isShowModal && (
      <Modal
        selectedImage={image.largeImageURL}
        onClose={() => setIsShowModal(false)}
      />
    )}
  </li>
);
}

export default ImageGalleryItem;