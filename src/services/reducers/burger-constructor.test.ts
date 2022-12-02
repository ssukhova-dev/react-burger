import {cartReducer} from './burger-constructor'
import { TCartIngredient, TIngredient } from '../../utils/types';
import { 
         ADD_INGREDIENT, 
         REMOVE_INGREDIENT,
         MOVE_INGREDIENTs,
         TConstructorActions } from '../actions/burger-constructor';
import { CLEAR_CART } from '../actions/cart-total';


describe('cartReducer ', () => {
    it('should return the initial state', () => {
      expect(cartReducer(undefined, {} as any)).toEqual(
        {
            cart: []
        }
      )
    })
  
    const testIngredient1: TIngredient = {
        _id: "_id1",
        name: "name",
        type: "type",
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        calories: 0,
        price: 0,
        image: "image",
        image_mobile: "image_mobile",
        image_large: "image_large",
        __v: 0,
    };

    const testIngredient2: TIngredient = {
      _id: "_id2",
      name: "name",
      type: "type",
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: "image",
      image_mobile: "image_mobile",
      image_large: "image_large",
      __v: 0,
  };

    it('should handle ADD_INGREDIENT', () => {
      expect( 
        cartReducer({ cart: [] }, 
        {
          type: ADD_INGREDIENT,
          ingredient: null!,
          key: "uuid"
        })
      ).toEqual(
        {
            cart: []
        }
      )

      expect( 
        cartReducer({ cart: [] }, 
        {
          type: ADD_INGREDIENT,
          ingredient: testIngredient1,
          key: "uuid1"
        })
      ).toEqual(
        {
            cart: [
                {
                    _id: "_id1",
                    name: "name",
                    type: "type",
                    proteins: 0,
                    fat: 0,
                    carbohydrates: 0,
                    calories: 0,
                    price: 0,
                    image: "image",
                    image_mobile: "image_mobile",
                    image_large: "image_large",
                    __v: 0,
                    order: 0,
                    key: "uuid1"
                },
            ]
        }
      )

      expect( 
        cartReducer({ cart: [{
                              _id: "_id1",
                              name: "name",
                              type: "type",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 0,
                              key: "uuid1"
                          },] }, 
        {
          type: ADD_INGREDIENT,
          ingredient: testIngredient2,
          key: "uuid2"
        })
      ).toEqual(
        {
            cart: [
                {
                    _id: "_id1",
                    name: "name",
                    type: "type",
                    proteins: 0,
                    fat: 0,
                    carbohydrates: 0,
                    calories: 0,
                    price: 0,
                    image: "image",
                    image_mobile: "image_mobile",
                    image_large: "image_large",
                    __v: 0,
                    order: 0,
                    key: "uuid1"
                },
                {
                  _id: "_id2",
                  name: "name",
                  type: "type",
                  proteins: 0,
                  fat: 0,
                  carbohydrates: 0,
                  calories: 0,
                  price: 0,
                  image: "image",
                  image_mobile: "image_mobile",
                  image_large: "image_large",
                  __v: 0,
                  order: 1,
                  key: "uuid2"
              }
            ]
        }
      )


    })


    const testBunIngredient1: TIngredient = {
      _id: "_id1",
      name: "name",
      type: "bun",
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: "image",
      image_mobile: "image_mobile",
      image_large: "image_large",
      __v: 0,
  };

  const testBunIngredient2: TIngredient = {
    _id: "_id2",
    name: "name",
    type: "bun",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "image",
    image_mobile: "image_mobile",
    image_large: "image_large",
    __v: 0,
};

    it('should handle ADD_INGREDIENT for `bun` type', () => {

      expect( 
        cartReducer({ cart: [] }, 
        {
          type: ADD_INGREDIENT,
          ingredient: testBunIngredient1,
          key: "uuid1"
        })
      ).toEqual(
        {
            cart: [
                {
                    _id: "_id1",
                    name: "name",
                    type: "bun",
                    proteins: 0,
                    fat: 0,
                    carbohydrates: 0,
                    calories: 0,
                    price: 0,
                    image: "image",
                    image_mobile: "image_mobile",
                    image_large: "image_large",
                    __v: 0,
                    order: 0,
                    key: "uuid1"
                },
            ]
        }
      )

      expect( 
        cartReducer({ cart: [{
                              _id: "_id1",
                              name: "name",
                              type: "bun",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 0,
                              key: "uuid1"
                          },] }, 
        {
          type: ADD_INGREDIENT,
          ingredient: testBunIngredient2,
          key: "uuid2"
        })
      ).toEqual(
        {
            cart: [
                {
                    _id: "_id2",
                    name: "name",
                    type: "bun",
                    proteins: 0,
                    fat: 0,
                    carbohydrates: 0,
                    calories: 0,
                    price: 0,
                    image: "image",
                    image_mobile: "image_mobile",
                    image_large: "image_large",
                    __v: 0,
                    order: 0,
                    key: "uuid2"
                }
            ]
        }
      )
    })


    const testCartIngredient1: TCartIngredient = {
      _id: "_id1",
      name: "name",
      type: "type",
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: "image",
      image_mobile: "image_mobile",
      image_large: "image_large",
      __v: 0,
      order: 0,
      key: "uuid1"
  };

  const testCartIngredient2: TCartIngredient = {
    _id: "_id1",
    name: "name",
    type: "type",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "image",
    image_mobile: "image_mobile",
    image_large: "image_large",
    __v: 0,
    order: 1,
    key: "uuid1"
  };

  const testCartIngredient3: TCartIngredient = {
    _id: "_id2",
    name: "name",
    type: "type",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "image",
    image_mobile: "image_mobile",
    image_large: "image_large",
    __v: 0,
    order: 0,
    key: "uuid1"
};

    it('should handle REMOVE_INGREDIENT', () => {
      expect(cartReducer({ cart: [{
                                  _id: "_id1",
                                  name: "name",
                                  type: "bun",
                                  proteins: 0,
                                  fat: 0,
                                  carbohydrates: 0,
                                  calories: 0,
                                  price: 0,
                                  image: "image",
                                  image_mobile: "image_mobile",
                                  image_large: "image_large",
                                  __v: 0,
                                  order: 0,
                                  key: "uuid1"
                              },] },
          {
            type: REMOVE_INGREDIENT,
            ingredient: testCartIngredient1,
          })
        ).toEqual(
        {
            cart: []
        }
      )

      expect(cartReducer({ cart: [{
                                  _id: "_id1",
                                  name: "name",
                                  type: "bun",
                                  proteins: 0,
                                  fat: 0,
                                  carbohydrates: 0,
                                  calories: 0,
                                  price: 0,
                                  image: "image",
                                  image_mobile: "image_mobile",
                                  image_large: "image_large",
                                  __v: 0,
                                  order: 0,
                                  key: "uuid1"
                              },] },
        {
          type: REMOVE_INGREDIENT,
          ingredient: testCartIngredient2,
        })
      ).toEqual(
        {
          cart: [{
            _id: "_id1",
            name: "name",
            type: "bun",
            proteins: 0,
            fat: 0,
            carbohydrates: 0,
            calories: 0,
            price: 0,
            image: "image",
            image_mobile: "image_mobile",
            image_large: "image_large",
            __v: 0,
            order: 0,
            key: "uuid1"
        },] 
        }
      )

      expect(cartReducer({ cart: [{
                                  _id: "_id1",
                                  name: "name",
                                  type: "bun",
                                  proteins: 0,
                                  fat: 0,
                                  carbohydrates: 0,
                                  calories: 0,
                                  price: 0,
                                  image: "image",
                                  image_mobile: "image_mobile",
                                  image_large: "image_large",
                                  __v: 0,
                                  order: 0,
                                  key: "uuid1"
                              },] },
          {
            type: REMOVE_INGREDIENT,
            ingredient: testCartIngredient3,
          })
        ).toEqual(
          {
              cart: [{
                      _id: "_id1",
                      name: "name",
                      type: "bun",
                      proteins: 0,
                      fat: 0,
                      carbohydrates: 0,
                      calories: 0,
                      price: 0,
                      image: "image",
                      image_mobile: "image_mobile",
                      image_large: "image_large",
                      __v: 0,
                      order: 0,
                      key: "uuid1"
              },] 
          }
        )

    })
 
    it('should handle CLEAR_CART', () => {
      expect(cartReducer({cart: [{
                              _id: "_id1",
                              name: "name",
                              type: "bun",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 0,
                              key: "uuid1"
                            },
                            {
                              _id: "_id2",
                              name: "name",
                              type: "bun",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 1,
                              key: "uuid1"
                  }]}, 
          {
            type: CLEAR_CART,
          })
        ).toEqual(
        {
            cart: []
        }
      )
      
    })



    const testCartIng1: TCartIngredient = {
      _id: "_id1",
      name: "name",
      type: "type",
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: "image",
      image_mobile: "image_mobile",
      image_large: "image_large",
      __v: 0,
      order: 0,
      key: "uuid1"
  };

  const testCartIng11: TCartIngredient = {
    _id: "_id2",
    name: "name",
    type: "type",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "image",
    image_mobile: "image_mobile",
    image_large: "image_large",
    __v: 0,
    order: 0,
    key: "uuid2"
};

  const testCartIng2: TCartIngredient = {
    _id: "_id2",
    name: "name",
    type: "type",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "image",
    image_mobile: "image_mobile",
    image_large: "image_large",
    __v: 0,
    order: 1,
    key: "uuid2"
  };

  const testCartIng3: TCartIngredient = {
    _id: "_id2",
    name: "name",
    type: "type",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "image",
    image_mobile: "image_mobile",
    image_large: "image_large",
    __v: 0,
    order: 2,
    key: "uuid3"
};


it('should handle MOVE_INGREDIENTs same orders', () => {
  expect(cartReducer({cart: [{
                          _id: "_id1",
                          name: "name",
                          type: "type",
                          proteins: 0,
                          fat: 0,
                          carbohydrates: 0,
                          calories: 0,
                          price: 0,
                          image: "image",
                          image_mobile: "image_mobile",
                          image_large: "image_large",
                          __v: 0,
                          order: 0,
                          key: "uuid1"
                        },
                        {
                          _id: "_id2",
                          name: "name",
                          type: "type",
                          proteins: 0,
                          fat: 0,
                          carbohydrates: 0,
                          calories: 0,
                          price: 0,
                          image: "image",
                          image_mobile: "image_mobile",
                          image_large: "image_large",
                          __v: 0,
                          order: 1,
                          key: "uuid2"
                        },
                        {
                          _id: "_id2",
                          name: "name",
                          type: "type",
                          proteins: 0,
                          fat: 0,
                          carbohydrates: 0,
                          calories: 0,
                          price: 0,
                          image: "image",
                          image_mobile: "image_mobile",
                          image_large: "image_large",
                          __v: 0,
                          order: 2,
                          key: "uuid3"
              }]}, 
      {
        type: MOVE_INGREDIENTs,
        dragIngredient: testCartIng1,
        dropIngredient: testCartIng11
      })
    ).toEqual(
    {
            cart: [{
              _id: "_id1",
              name: "name",
              type: "type",
              proteins: 0,
              fat: 0,
              carbohydrates: 0,
              calories: 0,
              price: 0,
              image: "image",
              image_mobile: "image_mobile",
              image_large: "image_large",
              __v: 0,
              order: 0,
              key: "uuid1"
            },
            {
              _id: "_id2",
              name: "name",
              type: "type",
              proteins: 0,
              fat: 0,
              carbohydrates: 0,
              calories: 0,
              price: 0,
              image: "image",
              image_mobile: "image_mobile",
              image_large: "image_large",
              __v: 0,
              order: 1,
              key: "uuid2"
            },
            {
              _id: "_id2",
              name: "name",
              type: "type",
              proteins: 0,
              fat: 0,
              carbohydrates: 0,
              calories: 0,
              price: 0,
              image: "image",
              image_mobile: "image_mobile",
              image_large: "image_large",
              __v: 0,
              order: 2,
              key: "uuid3"
      }]
    }
  )
  
})

    it('should handle MOVE_INGREDIENTs up', () => {
      expect(cartReducer({cart: [{
                              _id: "_id1",
                              name: "name",
                              type: "type",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 0,
                              key: "uuid1"
                            },
                            {
                              _id: "_id2",
                              name: "name",
                              type: "type",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 2,
                              key: "uuid3"
                            },
                            {
                              _id: "_id2",
                              name: "name",
                              type: "type",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 1,
                              key: "uuid2"
                  }]}, 
          {
            type: MOVE_INGREDIENTs,
            dragIngredient: testCartIng3,
            dropIngredient: testCartIng2
          })
        ).toEqual(
        {
                cart: [{
                  _id: "_id1",
                  name: "name",
                  type: "type",
                  proteins: 0,
                  fat: 0,
                  carbohydrates: 0,
                  calories: 0,
                  price: 0,
                  image: "image",
                  image_mobile: "image_mobile",
                  image_large: "image_large",
                  __v: 0,
                  order: 0,
                  key: "uuid1"
                },
                {
                  _id: "_id2",
                  name: "name",
                  type: "type",
                  proteins: 0,
                  fat: 0,
                  carbohydrates: 0,
                  calories: 0,
                  price: 0,
                  image: "image",
                  image_mobile: "image_mobile",
                  image_large: "image_large",
                  __v: 0,
                  order: 1,
                  key: "uuid3"
                },
                {
                  _id: "_id2",
                  name: "name",
                  type: "type",
                  proteins: 0,
                  fat: 0,
                  carbohydrates: 0,
                  calories: 0,
                  price: 0,
                  image: "image",
                  image_mobile: "image_mobile",
                  image_large: "image_large",
                  __v: 0,
                  order: 2,
                  key: "uuid2"
          }]
        }
      )
      
    })

    it('should handle MOVE_INGREDIENTs down', () => {
      expect(cartReducer({cart: [{
                              _id: "_id1",
                              name: "name",
                              type: "type",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 0,
                              key: "uuid1"
                            },
                            {
                              _id: "_id2",
                              name: "name",
                              type: "type",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 1,
                              key: "uuid2"
                            },
                            {
                              _id: "_id2",
                              name: "name",
                              type: "type",
                              proteins: 0,
                              fat: 0,
                              carbohydrates: 0,
                              calories: 0,
                              price: 0,
                              image: "image",
                              image_mobile: "image_mobile",
                              image_large: "image_large",
                              __v: 0,
                              order: 2,
                              key: "uuid3"
                  }]}, 
          {
            type: MOVE_INGREDIENTs,
            dragIngredient: testCartIng1,
            dropIngredient: testCartIng2
          })
        ).toEqual(
        {
                cart: [{
                  _id: "_id1",
                  name: "name",
                  type: "type",
                  proteins: 0,
                  fat: 0,
                  carbohydrates: 0,
                  calories: 0,
                  price: 0,
                  image: "image",
                  image_mobile: "image_mobile",
                  image_large: "image_large",
                  __v: 0,
                  order: 1,
                  key: "uuid1"
                },
                {
                  _id: "_id2",
                  name: "name",
                  type: "type",
                  proteins: 0,
                  fat: 0,
                  carbohydrates: 0,
                  calories: 0,
                  price: 0,
                  image: "image",
                  image_mobile: "image_mobile",
                  image_large: "image_large",
                  __v: 0,
                  order: 0,
                  key: "uuid2"
                },
                {
                  _id: "_id2",
                  name: "name",
                  type: "type",
                  proteins: 0,
                  fat: 0,
                  carbohydrates: 0,
                  calories: 0,
                  price: 0,
                  image: "image",
                  image_mobile: "image_mobile",
                  image_large: "image_large",
                  __v: 0,
                  order: 2,
                  key: "uuid3"
          }]
        }
      )
      
    })

  })