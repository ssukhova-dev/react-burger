import ReactDom from 'react-dom';

import modalDlgStyles from './modal-dlg.module.css';



const ModalSectionElement = document.querySelector('#modals-section');

function ModalDlg(props){

  return props.isOpen && ReactDom.createPortal(
      <div className={modalDlgStyles.modal_root}>
        <div className={modalDlgStyles.modal_overlay} onClick={() => props.requestClose && props.requestClose()}></div>
        <div className={modalDlgStyles.modal_content}>
          <div className={modalDlgStyles.modal_close} onClick={() => props.requestClose && props.requestClose()}></div>
          {props.children}
        </div>
      </div>,
      ModalSectionElement
  );
};


export default ModalDlg;
