export const NAME = "PROFILE"; // folder name

// type name
export const PREMIUM_DOWNGRADE = `${NAME}/PREMIUM_DOWNGRADE`;
export const PREMIUM_DOWNGRADE_SUCCESS = `${NAME}/PREMIUM_DOWNGRADE_SUCCESS`;
export const PREMIUM_DOWNGRADE_FAIL = `${NAME}/PREMIUM_DOWNGRADE_FAIL`;

export const getPremiumDowngradeData = (store) =>store[NAME].premiumDowngrade;

// create action function
export const premiumDowngrade = (data) => ({
    type: PREMIUM_DOWNGRADE,
    data: data,
})

export const premiumDowngradeSuccess = (data) => ({
    type: PREMIUM_DOWNGRADE_SUCCESS,
    data,
})

export const premiumDowngradeFail = (error) => ({
    type: PREMIUM_DOWNGRADE_FAIL,
    error
  });