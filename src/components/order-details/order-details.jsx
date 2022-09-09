import Modal from '../modal/modal'


function OrderDetails (props){

    return (
        <div >
      
           <Modal {...props} title="OrderDetails">
               <>
                   content
                   <button>1</button>
                   <button>2</button>
               </>
           </Modal>
   
       </div>
    )

}

export default OrderDetails