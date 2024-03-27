/**
 * @typedef UserData
 * @type {object}
 * @property {number} id
 * @property {UserInfos} userInfos
 * @property {number|undefined} todayScore
 * @property {number|undefined} score
 * @property {KeyData} keyData
 */

/**
 * @typedef UserInfos
 * @type {object}
 * @property {string} firstName
 * @property {string} lastName
 * @property {number} age
 */

/**
 * @typedef KeyData
 * @type {object}
 * @property {number} calorieCount
 * @property {number} proteinCount
 * @property {number} carbohydrateCount
 * @property {number} lipidCount
 */

/**
 * @typedef UserActivity
 * @type {object}
 * @property {number} userId
 * @property {Session[]} sessions
 */

/**
 * @typedef Session
 * @type {object}
 * @property {Date} day
 * @property {number} kilogram
 * @property {number} calories
 */
