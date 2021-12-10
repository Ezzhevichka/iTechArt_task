const request = () => {
    return { type: 'REQUEST' }
};

const requestSuccessful = (data) => {
    return { type: 'REQUEST_SUCCESSFUL', url: data.message }
};

const requestFailed = () => {
    return { type: 'REQUEST_FAILED' }
};

const fetchDog = () => {
    return { type: 'FETCHED_DOG' }
};

export { request, requestFailed, requestSuccessful, fetchDog };