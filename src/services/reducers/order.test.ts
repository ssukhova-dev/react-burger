import {currentOrderReducer} from './order'
import {ADD_CURRENT_ORDER, REMOVE_CURRENT_ORDER, TCurrentOrderActions} from '../actions/order';
import { TOrder } from '../../utils/types';

describe('currentOrderReducer ', () => {
  it('should return the initial state', () => {
    expect(currentOrderReducer(undefined, {} as any)).toEqual(
      {
        currentOrder: null
      }
    )
  })


  const testOrder1: TOrder = {
    _id: "_id1",
    name: "name",
    ingredients: [""],
    status: "status",
    number: 0,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };

  const testOrder2: TOrder = {
    _id: "_id2",
    name: "name",
    ingredients: [""],
    status: "status",
    number: 0,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };

  it('should handle ADD_CURRENT_ORDER', () => {
    expect(
      currentOrderReducer({ currentOrder: null }, {
        type: ADD_CURRENT_ORDER,
        order: testOrder1
      })
    ).toEqual(
      {
        currentOrder: testOrder1,
      }
    )

    expect(
      currentOrderReducer({ currentOrder: testOrder1 }, {
            type: ADD_CURRENT_ORDER,
            order: testOrder2
        }
      )
    ).toEqual(
      {
        currentOrder: testOrder2,
      }
    )

    expect(
      currentOrderReducer({ currentOrder: testOrder1 }, {
            type: ADD_CURRENT_ORDER,
            order: null!
        }
      )
    ).toEqual(
      {
        currentOrder: testOrder1,
      }
    )
  })

  it('should handle REMOVE_CURRENT_ORDER', () => {
    expect(
      currentOrderReducer({ currentOrder: null }, {
        type: REMOVE_CURRENT_ORDER
      })
    ).toEqual(
      {
        currentOrder: null,
      }
    )

    expect(
      currentOrderReducer({ currentOrder: testOrder1 },{
            type: REMOVE_CURRENT_ORDER
        }
      )
    ).toEqual(
      {
        currentOrder: null,
      }
    )
  })
})