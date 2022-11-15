
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
  } from 'react-redux';
  import { AppDispatch, AppThunk, RootState } from './types';
  

export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
  