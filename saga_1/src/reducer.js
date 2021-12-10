const initialState = {
    url: '',
    loading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST':
            return { url: '', loading: true, error: false };
        case 'REQUEST_SUCCESSFUL':
            return { url: action.url, loading: false, error: false };
        case 'REQUEST_FAILED':
            return { url: '', loading: false, error: true }
        default:
            return state;
    }
};

export default reducer;