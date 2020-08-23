import { all, fork } from "redux-saga/effects";

import getInfo from "./getInfo";
import premiumUpgrade from "./premiumUpgrade";
import getFull from "./getFull";
import editAll from "./editAll";

export default function* submit() {
  yield all([fork(getInfo), fork(premiumUpgrade), fork(getFull), fork(editAll)]);
}