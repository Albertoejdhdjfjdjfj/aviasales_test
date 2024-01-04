import { takeEvery, put, all } from 'redux-saga/effects';
import { FETCH_TICKETS } from '../actions/actionsTypes';
import { getTickets } from '../../assets/functions/requestFunctions';
import { requestTickets, requestTicketsSuccess, requestTicketsError } from '../actions/actions';

export function* rootSaga() {
  yield all([]);
}

function* watchGetTickets() {
  yield takeEvery(FETCH_TICKETS, fetchTickets);
}

function* fetchTickets() {
  try {
    yield put(requestTickets());
    const data = yield getTickets();
    yield put(requestTicketsSuccess(data));
  } catch (error) {
    yield put(requestTicketsError());
  }
}
