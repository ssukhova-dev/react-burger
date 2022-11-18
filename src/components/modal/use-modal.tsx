import React from 'react';


function useModal() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
  
    function handleOpenModal() {
      setIsModalOpen(true);
    }
  
    function handleCloseModal() {
      setIsModalOpen(false);
    }

    function setDlgTitle(title: string) {
      setTitle(title);
    }
  
    return {
      open: handleOpenModal,  
      isOpen: isModalOpen,
      requestClose: handleCloseModal,
      setTitle: setDlgTitle,
      title: title
    };
  }
  

  export default useModal;