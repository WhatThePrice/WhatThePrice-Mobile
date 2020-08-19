import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "actions";
import * as api from "api";


import {getStore} from '../../store/configureStore';


function* getFull() {
    
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers = { Authorization: `Bearer ${token}` };

    console.log("GET FULL SAGA TOKEN", token)

    const { response, error } = yield call(api.getFull, headers);
    console.log("get full saga", response.data, error)
    if(response.data.status === 'success') {
      yield put(Actions.getFullSuccess(response.data));
    }else if( error ) {
      yield put(Actions.getFullFail(error.response));
    }

}

function* watchGetFull() {
  yield takeLatest(Actions.GET_FULL, getFull);
}

export default function* submit() {
  yield all([fork(watchGetFull)]);
}