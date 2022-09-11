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
      isOpen: isModalOpen,
      requestClose: handleCloseModal
  
    };
  }
  

  export default useModal;