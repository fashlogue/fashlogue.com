import {SWITCH_TAB} from './constants';

export const switchTab = label => dispatch => {
    dispatch({
        type: SWITCH_TAB,
        label
    })
}