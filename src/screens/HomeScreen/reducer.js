import { LOAD_HOME } from './constants';


const initialState = { isLoading: false };

// tslint:disable:function-name
const homeScreenReducer = (state = initialState, action) => {
  switch(action.type) {
          case LOAD_HOME:
          return {
            ...state,
            isLoading: action.payload.isLoading
          }

          default:
            return state
      }
  }
  export default homeScreenReducer