import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "actions";
import * as api from "api";


import {getStore} from '../../store/configureStore';


function* getUser() {
    
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers = { Authorization: `Bearer ${token}` };

    console.log("GET USER SAGA TOKEN", token)

    const { response, error } = yield call(api.getUser, headers);
    console.log("GEt USER SAGa., ", response.data, error)
    if(response.data.status === 'success') {
      yield put(Actions.getUserSuccess(response.data));
    }else if( error ) {
      yield put(Actions.getUserFail(error.response));
    }

}

function* watchGetUser() {
  yield takeLatest(Actions.GET_USER, getUser);
}

export default function* submit() {
  yield all([fork(watchGetUser)]);
}