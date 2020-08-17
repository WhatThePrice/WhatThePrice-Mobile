import { combineReducers } from "redux";

import userSession from "./userSession";
import getUser from "./getUser";
import premiumUpgrade from "./premiumUpgrade";

export default combineReducers({
  userSession,
  getUser,
  premiumUpgrade,
});
