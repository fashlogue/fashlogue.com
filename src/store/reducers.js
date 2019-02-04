import { combineReducers } from 'redux';
import { default as HomeScreenReducer } from '../screens/HomeScreen/reducer';
import { default as AuthScreenReducer } from '../screens/AuthChoiceScreen/reducer';

export default combineReducers({
    homeScreen: HomeScreenReducer,
    authScreen: AuthScreenReducer
});