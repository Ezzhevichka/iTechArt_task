const initialState = {
    url: '',
    loading: false,
    error: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST':
            return {
                url: '',
                loading: true,
                error: false,
            };
        case 'REQUEST_SUCCESSFUL':
            return {
                url: action.url,
                loading: false,
                error: false,
            };
        case 'REQUEST_FAILED':
            return {
                url: '',
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}

const request = () => {
    return { type: 'REQUEST' }
};

const requestSuccessful = (data) => {
    return { type: 'REQUEST_SUCCESSFUL', url: data.message }
};

const requestError = () => {
    return { type: 'REQUEST_FAILED' }
};

const fetchDog = () => {
    return (dispatch) => {
        dispatch(request());
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(
                data => dispatch(requestSuccessful(data)),
                err => dispatch(requestError())
            );
    }
};

export { reducer, fetchDog }