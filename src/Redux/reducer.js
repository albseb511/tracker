import { actions } from './fireRequest';

const initState ={
    
}

const reducer = (state = {}, changeAction) => {
    switch (changeAction.type) {
        case actions.FETCH_REQUEST: {
            const obj = {...state};
            obj[changeAction.key] = {
                isFetching: true,
                error: false,
            };
            return obj;
        }
        case actions.FETCH_REQUEST_SUCCESS: {
            const obj= {...state};
            obj[changeAction.key] = {
                isFetching: false,
                error: false,
                data: changeAction.data,
            };
            return obj;
        }
        case actions.FETCH_REQUEST_ERROR: {
            const obj= {...state};
            obj[changeAction.key] = {
                isFetching: false,
                error: true,
                errorMessage: changeAction.error,
            };
            return obj;
        }

        case actions.SET_DATA: {
            const obj= {...state};
            obj[changeAction.key] = changeAction.value;
            return obj;
        }

        default:
            return state;
    }
};
export default reducer;
