import React from 'react';


function useModal() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    function handleOpenModal() {
      setIsModalOpen(true);
    }
  
    function handleCloseModal() {
      setIsModalOpen(false);
    }
  
    return {
      open: handleOpenModal,
      close: handleCloseModal,
      modalProps: {
        isOpen: isModalOpen,
        requestClose: handleCloseModal
      }
    };
  }
  

  export default useModal;