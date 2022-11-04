import { FC } from 'react';
import modalOverlayStyles from './modal-overlay.module.css';


interface IModalOverlayProps{
  onClose: () => void;
}

const ModalOverlay: FC<IModalOverlayProps> = (props) => {

  return (
        <div className={modalOverlayStyles.modal_overlay} onClick={props.onClose}></div>
  );
};

export default ModalOverlay;
