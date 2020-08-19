import { combineReducers } from "redux";

import userSession from "./userSession";
import getInfo from "./getInfo";
import premiumUpgrade from "./premiumUpgrade";

export default combineReducers({
  userSession,
  getInfo,
  premiumUpgrade,
});
