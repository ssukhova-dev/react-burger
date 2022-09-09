import React from 'react';


function useModal() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    function handleOpenModal() {
      setIsModalOpen(true);
    }
  
    function handleCloseModal() {
      console.log("handleCloseModal");

      setIsModalOpen(false);

      console.log(isModalOpen);
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