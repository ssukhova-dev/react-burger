import React from 'react';
import PropTypes from 'prop-types';

import modalOverlayStyles from './modal-overlay.module.css';


function ModalOverlay(props){


  return (

        <div className={modalOverlayStyles.modal_overlay} onClick={props.onClose}></div>
       
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
  };


export default ModalOverlay;
