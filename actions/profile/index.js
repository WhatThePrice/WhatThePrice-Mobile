import * as userSession from "./userSession";
import * as getInfo from "./getInfo";
import * as premiumUpgrade from "./premiumUpgrade";
import * as getFull from "./getFull";
import * as editAll from "./editAll";

export default {
  ...userSession,
  ...getInfo,
  ...premiumUpgrade,
  ...getFull,
  ...editAll,
};
