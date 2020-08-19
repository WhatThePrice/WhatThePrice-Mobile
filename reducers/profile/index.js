import { combineReducers } from "redux";

import userSession from "./userSession";
import getInfo from "./getInfo";
import premiumUpgrade from "./premiumUpgrade";
import getFull from "./getFull";

export default combineReducers({
  userSession,
  getInfo,
  premiumUpgrade,
  getFull,
});
