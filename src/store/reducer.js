const initialState = {
    value: 5,
    isPending: false,
    hasFailed: false,
    hasSucceeded: false,
    apiData: {}
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            value: state.value - 1
        }
    }
    if (action.type === 'SAGA_INCREASE_BY_FIVE') {
        return {
            ...state,
            value: state.value + 5
        }
    }
    if (action.type === 'API_FETCH_FAILURE') {
        return {
            ...state,
            hasFailed: true,
            isPending: false,
            hasSucceeded: false
        }
    }
    if (action.type === 'API_FETCH_SUCCESS') {
        return {
            ...state,
            hasFailed: false,
            isPending: false,
            hasSucceeded: true,
            apiData: action.payload
        }
    }
    if (action.type === 'LAUNCH_API') {
        return {
            ...state,
            hasFailed: false,
            isPending: true,
            hasSucceeded: false
        }
    }
    return state;
}

export default reducer;