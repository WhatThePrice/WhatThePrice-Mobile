import { all, fork } from "redux-saga/effects";

import getUser from "./getUser";
import premiumUpgrade from "./premiumUpgrade";

export default function* submit() {
  yield all([fork(getUser), fork(premiumUpgrade)]);
}