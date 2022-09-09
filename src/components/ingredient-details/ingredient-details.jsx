
import PropTypes from 'prop-types';
import ingredientPropType from './../../utils/prop-types.jsx'

import ingredientDetailsStyle from './ingredient-details.module.css';

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import Modal from '../modal/modal'

function IngredientDetails (props){

    console.log(props);

    return (
        <div >
      
           <Modal {...props} title="Детали ингредиента">
               <div className={ingredientDetailsStyle.content_body}>
                    <img src={ props.ingredient.image_large } alt={`изображение ингредиента ${props.ingredient.name}`} />         

                    <p className="text text_type_main-medium" >
                        {props.ingredient.name}
                    </p>
               </div>
           </Modal>
   
       </div>
    )

}

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    requestClose: PropTypes.func.isRequired,
    ingredient: ingredientPropType
  };

export default IngredientDetails