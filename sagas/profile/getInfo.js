import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "actions";
import * as api from "api";


import {getStore} from '../../store/configureStore';


function* getInfo() {
    
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers = { Authorization: `Bearer ${token}` };

    // console.log("GET INFO SAGA TOKEN", token)

    const { response, error } = yield call(api.getInfo, headers);
    console.log("get info saga", response, error)
    if(response.data.status === 'success') {
      yield put(Actions.getInfoSuccess(response.data));
    }else if( error ) {
      yield put(Actions.getInfoFail(error.response));
    }

}

function* watchGetInfo() {
  yield takeLatest(Actions.GET_INFO, getInfo);
}

export default function* submit() {
  yield all([fork(watchGetInfo)]);
}