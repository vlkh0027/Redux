import {createStore} from 'redux';
const defaultState = {
    cityName: null,
    temp:null,
    isLoading:false,
    error:false,
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'START_FETCH' :
            return { cityName: null, error: false, isLoading:true, temp:null};
        case 'FETCH_SUCCES' :
            return {cityName: action.cityName, error:false, isLoading:false, temp:action.temp};
        case 'FETCH_ERROR' :
            return {cityName:null, temp:null, isLoading:false, error:true};

        default :
            return state;
    }
};

const store = createStore(reducer);
export default store;