import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import modalStyles from './modal.module.css';

import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'


const ModalSectionElement = document.querySelector('#modals-section');

function Modal(props){


  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      props.requestClose();
    }
  }

  React.useEffect(() => { document.addEventListener('keydown', handleKeyDown);
           return () => { document.removeEventListener('keydown', handleKeyDown); }
  }, []);



  return props.isOpen && ReactDom.createPortal(
      <div className={modalStyles.modal_root}>

        <div className={modalStyles.modal_overlay} onClick={() => props.requestClose && props.requestClose()}></div>

        <div className={modalStyles.modal_content}>

          <div className={modalStyles.modal_title}>
            <p className="text text_type_main-large">
                {props.title ? props.title : ""}
            </p>
       
          </div>

          <div className={modalStyles.modal_close} onClick={() => props.requestClose && props.requestClose()}>
            <div className={modalStyles.close_btn} >
                <CloseIcon type="primary" />
            </div>
            <div className={modalStyles.close_btn_hover} >
                <CloseIcon type="secondary" />
            </div>
          </div>

          {props.children}
        </div>
      </div>,
      ModalSectionElement
  );
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    requestClose: PropTypes.func.isRequired
  };


export default Modal;
