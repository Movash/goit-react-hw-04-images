import { useEffect } from 'react';

import React from 'react';

const Modal = ({ selectedImage, onClose }) => {
  useEffect(() => {
    const handleKeyEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyEsc);
    document.body.style.overflowY = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyEsc);
      document.body.style.removeProperty('overflow-y');
    };
  }, [onClose]);

  return (
    <div className="Overlay" onClick={() => onClose()}>
      <div className="Modal" onClick={evt => evt.stopPropagation()}>
        <img src={selectedImage} alt="large img" />
      </div>
    </div>
  );
};

export default Modal;