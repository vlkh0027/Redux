export function startFetchData(){
    return {type: 'START_FETCH' };
}

export function fetchSucces(cityName,temp){
    return {type: 'FETCH_SUCCES',
        cityName,
        temp,
    };
}

export function fetchError(){
    return {type: 'FETCH_ERROR'};
};