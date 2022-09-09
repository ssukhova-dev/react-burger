
import PropTypes from 'prop-types';
import orderDetailsStyle from './order-details.module.css';

import Modal from '../modal/modal'
import doneImg from './../../images/done.svg'

function OrderDetails (props){

    return (
        <div >
      
           <Modal {...props} >
           <div className={orderDetailsStyle.content_body}>

                    <p className="text text_type_digits-large m-5" >
                        {props.orderId}
                    </p>

                    <p className="text text_type_main-medium m-5" >
                        идентификатор заказа
                    </p>

                    <div className={orderDetailsStyle.done_img}>
                        <img src={ doneImg } alt={`done`} />         
                    </div>  

                    <p className="text text_type_main-default  m-2" >
                        Ваш заказ начали готовить
                    </p>

                    <p className="text text_type_main-default text_color_inactive" >
                        Дождитесь готовности на орбитальной станции
                    </p>
                    
               </div>
           </Modal>
   
       </div>
    )

}

OrderDetails.propTypes = {
    orderId: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    requestClose: PropTypes.func.isRequired
  };

export default OrderDetails