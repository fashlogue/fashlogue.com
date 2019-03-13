import {SWITCH_TAB} from './constants';

const initialState = {
    activeTab: null
}

const tabReducer = (state = initialState, action)=> {
    switch(action.type) {
        case SWITCH_TAB:
        return {
          ...state,
          activeTab: action.label
        }
        default:
        return state
    }
}
export default tabReducer;