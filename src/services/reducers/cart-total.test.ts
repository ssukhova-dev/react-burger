import {ordersReducer} from './cart-total'
import { GET_ORDERS_REQUEST, 
    GET_ORDERS_SUCCESS, 
    GET_ORDERS_ERROR,
    OPEN_ORDER_DETAILS,
    CLOSE_ORDER_DETAILS,
    TOrderActions } from '../actions/cart-total';


describe('ordersReducer ', () => {
    it('should return the initial state', () => {
      expect(ordersReducer(undefined, {} as any)).toEqual(
        {
            orderId: null,
            ordersRequest: false,
            ordersFailed: false,
            isOrderDetailOpen: false
        }
      )
    })
  

    it('should handle GET_ORDERS_REQUEST', () => {
      expect( 
        ordersReducer({ orderId: null,
                        ordersRequest: false,
                        ordersFailed: false,
                        isOrderDetailOpen: false
                    }, 
        {
          type: GET_ORDERS_REQUEST
        })
      ).toEqual(
        {
            orderId: null,
            ordersRequest: true,
            ordersFailed: false,
            isOrderDetailOpen: false
        }
      )
    })

    it('should handle GET_ORDERS_SUCCESS', () => {
      expect( 
        ordersReducer( {  orderId: null,
                          ordersRequest: true,
                          ordersFailed: true,
                          isOrderDetailOpen: false
                        }, 
        {
          type: GET_ORDERS_SUCCESS,
          orderId: "orderId",
        })
      ).toEqual(
        {
            orderId: "orderId",
            ordersRequest: false,
            ordersFailed: false,
            isOrderDetailOpen: false
        }
      )
    })


    it('should handle GET_ORDERS_ERROR', () => {
      expect( 
        ordersReducer( {  orderId: null,
                          ordersRequest: true,
                          ordersFailed: false,
                          isOrderDetailOpen: false
                        }, 
        {
          type: GET_ORDERS_ERROR
        })
      ).toEqual(
        {
            orderId: null,
            ordersRequest: false,
            ordersFailed: true,
            isOrderDetailOpen: false
        }
      )
    })

    it('should handle OPEN_ORDER_DETAILS', () => {
      expect( 
        ordersReducer( {  orderId: null,
                          ordersRequest: false,
                          ordersFailed: false,
                          isOrderDetailOpen: false
                        }, 
        {
          type: OPEN_ORDER_DETAILS
        })
      ).toEqual(
        {
            orderId: null,
            ordersRequest: false,
            ordersFailed: false,
            isOrderDetailOpen: true
        }
      )
    })

    it('should handle CLOSE_ORDER_DETAILS', () => {
      expect( 
        ordersReducer( {  orderId: null,
                          ordersRequest: false,
                          ordersFailed: false,
                          isOrderDetailOpen: true
                        }, 
        {
          type: CLOSE_ORDER_DETAILS
        })
      ).toEqual(
        {
            orderId: null,
            ordersRequest: false,
            ordersFailed: false,
            isOrderDetailOpen: false
        }
      )
    })


  })