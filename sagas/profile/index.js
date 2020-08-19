import { all, fork } from "redux-saga/effects";

import getInfo from "./getInfo";
import premiumUpgrade from "./premiumUpgrade";

export default function* submit() {
  yield all([fork(getInfo), fork(premiumUpgrade)]);
}