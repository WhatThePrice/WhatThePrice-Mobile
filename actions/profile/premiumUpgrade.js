export const NAME = "PROFILE"; // folder name

// type name
export const PREMIUM_UPGRADE = `${NAME}/PREMIUM_UPGRADE`;
export const PREMIUM_UPGRADE_SUCCESS = `${NAME}/PREMIUM_UPGRADE_SUCCESS`;
export const PREMIUM_UPGRADE_FAIL = `${NAME}/PREMIUM_UPGRADE_FAIL`;

export const getPremiumUpgradeData = (store) =>store[NAME].premiumUpgrade;

// create action function
export const premiumUpgrade = (data) => ({
    type: PREMIUM_UPGRADE,
    data: data,
})

export const premiumUpgradeSuccess = (data) => ({
    type: PREMIUM_UPGRADE_SUCCESS,
    data,
})

export const premiumUpgradeFail = (error) => ({
    type: PREMIUM_UPGRADE_FAIL,
    error
  });