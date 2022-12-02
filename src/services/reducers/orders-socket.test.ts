import {wsOrdersReducer} from './orders-socket'
import { TOrder } from '../../utils/types';
import {WS_CONNECT, ON_CLOSE, ON_ERROR, ON_MESSAGE } from '../actions/socket';

const initialState = {
    wsConnected: false,
    loading: false,
    
    feedOrders: [],
    total: 0,
    totalToday: 0,
}

describe('wsOrdersReducer ', () => {
    it('should return the initial state', () => {
      expect(wsOrdersReducer(undefined, {} as any)).toEqual(
        {
            wsConnected: false,
            loading: false,
            
            feedOrders: [],
            total: 0,
            totalToday: 0,
        }
      )
    })

    it('should handle WS_CONNECT', () => {
        expect(
            wsOrdersReducer(initialState, {
            type: WS_CONNECT,
            payload: "payload"
          })
        ).toEqual(
          {
            ... initialState,
            wsConnected: true
          }
        )
    })

    it('should handle ON_ERROR', () => {
        expect(
            wsOrdersReducer(initialState, {
            type: ON_ERROR,
            payload: new Event("")
          })
        ).toEqual( 
          {
            ... initialState,
            wsConnected: false
          }
        )
    })

    it('should handle ON_CLOSE', () => {
        expect(
            wsOrdersReducer(initialState, {
            type: ON_CLOSE,
          })
        ).toEqual( 
          {
            ... initialState,
            wsConnected: false
          }
        )
    })

    it('should handle ON_MESSAGE', () => {
        expect(
            wsOrdersReducer(initialState, {
            type: ON_MESSAGE,
            payload: { success: true,
                orders: null!,
                total: 20,
                totalToday: 10,}
          })
        ).toEqual( 
          {
            ... initialState,
            
            feedOrders: [],
            total: 20,
            totalToday: 10,

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

    it('should handle ON_MESSAGE', () => {
        expect(
            wsOrdersReducer(initialState, {
            type: ON_MESSAGE,
            payload: { success: true,
                orders: [testOrder1, testOrder2],
                total: 20,
                totalToday: 10,}
          })
        ).toEqual(  
          {
            ... initialState,
            
            feedOrders: [testOrder1, testOrder2],
            total: 20,
            totalToday: 10,

          }
        )
    })

})