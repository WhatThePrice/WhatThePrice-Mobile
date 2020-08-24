import { all, fork } from "redux-saga/effects";

import auth from "./auth";
import profile from "./profile";
import query from "./query"

export default function* submit() {
  yield all([fork(auth), fork(profile), fork(query)]);
}