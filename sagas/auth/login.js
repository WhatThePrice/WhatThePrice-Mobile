import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "actions";
import * as api from "api";

// import { encode } from "../../services/encryption";

function* login({ data }) {
  console.log("LOGIN SAGA");

  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);

  const { response, error } = yield call(api.login, formData);
  // console.log(response, error);

  if (response && response.data.status === "success") {
      yield put(Actions.loginSuccess(response.data.token));
      yield put(Actions.activateUserSession(response.data.token));
  } else if (error) {
      yield put(Actions.loginFail(error.response));
  }

  
//   yield call();
}

function* watchLogin() {
  yield takeLatest(Actions.LOGIN, login);
}

export default function* submit() {
  yield all([fork(watchLogin)]);
}
