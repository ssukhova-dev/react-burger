import {ingredientsReducer, currentIngredientReducer, tabReducer} from './burger-ingredients'
import { GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS_ERROR,
    ADD_CURRENT_INGREDIENT,
    REMOVE_CURRENT_INGREDIENT,
    SET_CURRENT_TAB} from '../actions/burger-ingredients';

import { TIngredient } from '../../utils/types';
import { IngredientTypes } from '../../utils/constants';



const testIngredints = [
  {
     "_id":"60666c42cc7b410027a1a9b1",
     "name":"Краторная булка N-200i",
     "type":"bun",
     "proteins":80,
     "fat":24,
     "carbohydrates":53,
     "calories":420,
     "price":1255,
     "image":"https://code.s3.yandex.net/react/code/bun-02.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b5",
     "name":"Говяжий метеорит (отбивная)",
     "type":"main",
     "proteins":800,
     "fat":800,
     "carbohydrates":300,
     "calories":2674,
     "price":3000,
     "image":"https://code.s3.yandex.net/react/code/meat-04.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b6",
     "name":"Биокотлета из марсианской Магнолии",
     "type":"main",
     "proteins":420,
     "fat":142,
     "carbohydrates":242,
     "calories":4242,
     "price":424,
     "image":"https://code.s3.yandex.net/react/code/meat-01.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
     "__v":0
  },
]

describe('ingredientsReducer ', () => {
    it('should return the initial state', () => {
      expect(ingredientsReducer(undefined, {} as any)).toEqual(
        {
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
        }
      )
    })
  

    it('should handle GET_INGREDIENTS_REQUEST', () => {
      expect( 
        ingredientsReducer({ ingredients: [],
                             ingredientsRequest: false,
                             ingredientsFailed: false,
                    }, 
        {
          type: GET_INGREDIENTS_REQUEST
        })
      ).toEqual(
        {
            ingredients: [],
            ingredientsRequest: true,
            ingredientsFailed: false,
        }
      )
    })

    it('should handle GET_INGREDIENTS_SUCCESS', () => {
      expect( 
        ingredientsReducer( {   ingredients: [],
                                ingredientsRequest: true,
                                ingredientsFailed: true,
                        }, 
        {
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: testIngredints,
        })
      ).toEqual(
        {
            ingredients: [
              {
                 "_id":"60666c42cc7b410027a1a9b1",
                 "name":"Краторная булка N-200i",
                 "type":"bun",
                 "proteins":80,
                 "fat":24,
                 "carbohydrates":53,
                 "calories":420,
                 "price":1255,
                 "image":"https://code.s3.yandex.net/react/code/bun-02.png",
                 "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                 "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
                 "__v":0
              },
              {
                 "_id":"60666c42cc7b410027a1a9b5",
                 "name":"Говяжий метеорит (отбивная)",
                 "type":"main",
                 "proteins":800,
                 "fat":800,
                 "carbohydrates":300,
                 "calories":2674,
                 "price":3000,
                 "image":"https://code.s3.yandex.net/react/code/meat-04.png",
                 "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                 "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
                 "__v":0
              },
              {
                 "_id":"60666c42cc7b410027a1a9b6",
                 "name":"Биокотлета из марсианской Магнолии",
                 "type":"main",
                 "proteins":420,
                 "fat":142,
                 "carbohydrates":242,
                 "calories":4242,
                 "price":424,
                 "image":"https://code.s3.yandex.net/react/code/meat-01.png",
                 "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                 "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
                 "__v":0
              },
            ],
            ingredientsRequest: false,
            ingredientsFailed: false,
        }
      )
    })


    it('should handle GET_INGREDIENTS_ERROR', () => {
      expect( 
        ingredientsReducer( {   ingredients: [],
                                ingredientsRequest: true,
                                ingredientsFailed: false,
                        }, 
        {
          type: GET_INGREDIENTS_ERROR
        })
      ).toEqual(
        {
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: true,
        }
      )
    })

    
  })


  describe('currentIngredientReducer ', () => {
    it('should return the initial state', () => {
      expect(currentIngredientReducer(undefined, {} as any)).toEqual(
        {
          currentIngredient: null
        }
      )
    })
  
  
    const testIng1: TIngredient = {
      "_id":"60666c42cc7b410027a1a9b1",
      "name":"Краторная булка N-200i",
      "type":"bun",
      "proteins":80,
      "fat":24,
      "carbohydrates":53,
      "calories":420,
      "price":1255,
      "image":"https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v":0
   };
  
    const testIng2: TIngredient = {
      "_id":"60666c42cc7b410027a1a9b5",
      "name":"Говяжий метеорит (отбивная)",
      "type":"main",
      "proteins":800,
      "fat":800,
      "carbohydrates":300,
      "calories":2674,
      "price":3000,
      "image":"https://code.s3.yandex.net/react/code/meat-04.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
      "__v":0
   };
  
    it('should handle ADD_CURRENT_INGREDIENT', () => {
      expect(
        currentIngredientReducer({ currentIngredient: null }, {
          type: ADD_CURRENT_INGREDIENT,
          ingredient: testIng1
        })
      ).toEqual(
        {
          currentIngredient: {
            "_id":"60666c42cc7b410027a1a9b1",
            "name":"Краторная булка N-200i",
            "type":"bun",
            "proteins":80,
            "fat":24,
            "carbohydrates":53,
            "calories":420,
            "price":1255,
            "image":"https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v":0
         },
        }
      )
  
      expect(
        currentIngredientReducer({ currentIngredient: testIng1 }, {
              type: ADD_CURRENT_INGREDIENT,
              ingredient: testIng2
          }
        )
      ).toEqual(
        {
          currentIngredient: {
            "_id":"60666c42cc7b410027a1a9b5",
            "name":"Говяжий метеорит (отбивная)",
            "type":"main",
            "proteins":800,
            "fat":800,
            "carbohydrates":300,
            "calories":2674,
            "price":3000,
            "image":"https://code.s3.yandex.net/react/code/meat-04.png",
            "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
            "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
            "__v":0
         },
        }
      )
  
      expect(
            currentIngredientReducer({ currentIngredient: testIng1 }, {
              type: ADD_CURRENT_INGREDIENT,
              ingredient: null!
          }
        )
      ).toEqual(
        {
          currentIngredient: {
            "_id":"60666c42cc7b410027a1a9b1",
            "name":"Краторная булка N-200i",
            "type":"bun",
            "proteins":80,
            "fat":24,
            "carbohydrates":53,
            "calories":420,
            "price":1255,
            "image":"https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v":0
         },
        }
      )
    })
  
    it('should handle REMOVE_CURRENT_INGREDIENT', () => {
      expect(
        currentIngredientReducer({ currentIngredient: null }, {
          type: REMOVE_CURRENT_INGREDIENT
        })
      ).toEqual(
        {
          currentIngredient: null,
        }
      )
  
      expect(
        currentIngredientReducer({ currentIngredient: testIng1 },{
              type: REMOVE_CURRENT_INGREDIENT
          }
        )
      ).toEqual(
        {
          currentIngredient: null,
        }
      )
    })
  })



  describe('tabReducer ', () => {
    it('should return the initial state', () => {
      expect(tabReducer(undefined, {} as any)).toEqual(
        {
          currentTab: IngredientTypes.bun
        }
      )
    })

  
    it('should handle SET_CURRENT_TAB', () => {
      expect(
        tabReducer({ currentTab: IngredientTypes.bun }, {
          type: SET_CURRENT_TAB,
          currentTab: IngredientTypes.main
        })
      ).toEqual(
        {
          currentTab: "main",
        }
      )
  
      expect(
        tabReducer({ currentTab: IngredientTypes.bun}, {
          type: SET_CURRENT_TAB,
          currentTab: IngredientTypes.sauce
          }
        )
      ).toEqual(
        {
          currentTab: "sauce",
        }
      )
  
      expect(
        tabReducer({ currentTab: IngredientTypes.bun}, {
          type: SET_CURRENT_TAB,
          currentTab: IngredientTypes.bun
          }
        )
      ).toEqual(
        {
          currentTab: "bun",
        }
      )

    
  })

})