

import burgerConstructor from './burger-constructor.module.css';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import ImgBun from './../../images/bun-02.svg'
import ImgMeat from './../../images/meat-02.svg'
import ImgMineralRings from './../../images/mineral rings.svg'
import ImgSauce from './../../images/sauce-03.svg'

 

function BurgerConstructor() {
   
      return (
        <section className={burgerConstructor.burger_constructor}>


            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '32px' }}>

                <span className="mr-2 mb-2 mt-2" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '10px'}}>
                    <div style={{ width: '32px'}}/>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={ImgBun}
                    />
                </span>

                <span className="ml-2 mr-2 mb-2 mt-2" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '10px'}}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        text="Соус традиционный галактический"
                        price={30}
                        thumbnail={ImgSauce}
                    />
                </span>

                <span className="ml-2 mr-2 mb-2 mt-2" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '10px'}}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        text="Мясо бессмертных молюсков Protostomia"
                        price={300}
                        thumbnail={ImgMeat}
                    />
                </span>

                <span className="ml-2 mr-2 mb-2 mt-2" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '10px'}}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        text="хрустящие минеральные кольца"
                        price={80}
                        thumbnail={ImgMineralRings}
                    />
                </span>

                  
                <span className="mr-2 mb-2 mt-2" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '10px'}}>
                    <div style={{ width: '32px'}}/>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={ImgBun}
                    />
                </span>  

            </div>



        </section>
      );
    
  }
  
  export default BurgerConstructor 