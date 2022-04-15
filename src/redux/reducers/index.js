import {combineReducers} from 'redux';
import Settings from './Setting';
import Common from './Common';
import Ecommerce from './Ecommerce';


const reducers = combineReducers({
  settings: Settings,
  common: Common,
  ecommerce: Ecommerce,
});
export default reducers;
