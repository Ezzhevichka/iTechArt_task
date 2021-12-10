import { put, takeEvery, call } from 'redux-saga/effects';
import { request, requestFailed, requestSuccessful } from './actions'

function* watchDog() {
  yield takeEvery('FETCHED_DOG', fetchAsync);
}

function* fetchAsync() {
  try {
    yield put(request());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    yield put(requestSuccessful(data));
  } catch (error) {
    yield put(requestFailed());
  }
}

export { watchDog, fetchAsync };