import { LOAD_AUTH } from './constants';


const initialState = { isLoading: false };

// tslint:disable:function-name
const authScreenReducer = (state = initialState, action) => {
  switch(action.type) {
          case LOAD_AUTH:
          return {
            ...state,
            isLoading: action.payload.isLoading
          }
          break
      }
      return state;
  }
  export default authScreenReducer