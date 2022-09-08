import React from 'react';


function useModalDlg() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    function handleOpenModal() {
      setIsModalOpen(true);
    }
  
    function handleCloseModal(requester) {
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
  

  export default useModalDlg;