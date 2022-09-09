import Modal from '../modal/modal'



function IngredientDetails (props){

    return (
        <div >
      
           <Modal {...props} title="IngredientDetails">
               <>
                   content
                   <button>1</button>
                   <button>2</button>
               </>
           </Modal>
   
       </div>
    )

}

export default IngredientDetails