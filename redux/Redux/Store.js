import {createStore } from 'redux'; 
import reducer from './reducer/reducer';
//default State
const store = createStore(reducer)
export default store;
// tich hop vao ung dung react - Provider -> 1 component - 1 props -> store