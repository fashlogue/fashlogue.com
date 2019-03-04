import { combineReducers } from 'redux';
import { default as HomeScreenReducer } from '../screens/HomeScreen/reducer';
import {ModalReducer } from '../containers/Modal';
import {TabReducer} from '../containers/Tab';


export default combineReducers({
    homeScreen: HomeScreenReducer,
    modal: ModalReducer,
    tab: TabReducer
});