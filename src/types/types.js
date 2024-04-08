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

/**
 * @typedef UserAverageSessions
 * @type {object}
 * @property {number} userId
 * @property {SessionAverage[]} averageSession
 */

/**
 * @typedef SessionAverage
 * @type {object}
 * @property {number} day
 * @property {number} sessionLenght
 */

/**
 * @typedef UserPerformance
 * @type {object}
 * @property {number} userId
 * @property {Kind} Kind
 * @property {Data[]} activityDataType
 */

/**
 * @typedef Kind
 * @type { object}
 * @property {string} TypeOfActivity
 */

/**
 *
 * @typedef Data
 * @type {object}
 * @property {string} value
 * @property {number} kind
 */
