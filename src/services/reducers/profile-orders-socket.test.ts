import {wsProfileOrdersReducer} from './profile-orders-socket'
import { TOrder } from '../../utils/types';
import {WS_CONNECT_PROFILE, ON_CLOSE_PROFILE, ON_ERROR_PROFILE, 
    ON_MESSAGE_PROFILE } from '../actions/profile-socket';

const initialState = {
    wsConnected: false,
    loading: false,
    
    orders: [],
    total: 0,
    totalToday: 0,
}

describe('wsProfileOrdersReducer ', () => {
    it('should return the initial state', () => {
      expect(wsProfileOrdersReducer(undefined, {} as any)).toEqual(
        {
            wsConnected: false,
            loading: false,
            
            orders: [],
            total: 0,
            totalToday: 0,
        }
      )
    })

    it('should handle WS_CONNECT_PROFILE', () => {
        expect(
            wsProfileOrdersReducer(initialState, {
            type: WS_CONNECT_PROFILE,
            payload: "payload"
          })
        ).toEqual(
          {
            ... initialState,
            wsConnected: true
          }
        )
    })

    it('should handle ON_ERROR_PROFILE', () => {
        expect(
            wsProfileOrdersReducer(initialState, {
            type: ON_ERROR_PROFILE,
            payload: new Event("")
          })
        ).toEqual( 
          {
            ... initialState,
            wsConnected: false
          }
        )
    })

    it('should handle ON_CLOSE_PROFILE', () => {
        expect(
            wsProfileOrdersReducer(initialState, {
            type: ON_CLOSE_PROFILE,
          })
        ).toEqual( 
          {
            ... initialState,
            wsConnected: false
          }
        )
    })

    it('should handle ON_MESSAGE_PROFILE', () => {
        expect(
            wsProfileOrdersReducer(initialState, {
            type: ON_MESSAGE_PROFILE,
            payload: { success: true,
                orders: null!,
                total: 20,
                totalToday: 10,}
          })
        ).toEqual( 
          {
            ... initialState,
            
            orders: [],
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

    it('should handle ON_MESSAGE_PROFILE', () => {
        expect(
            wsProfileOrdersReducer(initialState, {
            type: ON_MESSAGE_PROFILE,
            payload: { success: true,
                orders: [testOrder1, testOrder2],
                total: 20,
                totalToday: 10,}
          })
        ).toEqual(  
          {
            ... initialState,
            
            orders: [testOrder1, testOrder2],
            total: 20,
            totalToday: 10,

          }
        )
    })

})