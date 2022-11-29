import React, { FC } from 'react';
import ReactDom from 'react-dom';

import modalStyles from './modal.module.css';

import ModalOverlay from '../modal-overlay/modal-overlay'

import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'


const ModalSectionElement: HTMLElement = document.querySelector('#modals-section')!;
const ESC = 'Escape';

interface IModalProps{
  title?: string;
  onClose: () => void;
}

const Modal: FC<IModalProps> = (props) => {


  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === ESC) {
      props.onClose();
    }
  }

  React.useEffect(() => { document.addEventListener('keydown', handleKeyDown);
           return () => { document.removeEventListener('keydown', handleKeyDown); }
  }, []);



  function handleClose() {
    props.onClose();
  }


  return ReactDom.createPortal(
      <div className={modalStyles.modal_root}>

        <ModalOverlay {...props}/>

        <div className={modalStyles.modal_content}>

          <div className={modalStyles.modal_title}>
            <p className="text text_type_main-large">
                {props.title ? props.title : ""}
            </p>
       
          </div>

          <div className={modalStyles.modal_close} onClick={ handleClose} data-test="btn_close_modal">
            <div className={modalStyles.close_btn} >
                <CloseIcon type="primary" />
            </div>
          </div>

          <div className={modalStyles.modal_body}>
            {props.children}
          </div>
          
        </div>
      </div>,
      ModalSectionElement
  );
};


export default Modal;
