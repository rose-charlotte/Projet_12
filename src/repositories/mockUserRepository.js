/** @module repository */

import {
    USER_MAIN_DATA,
    USER_PERFORMANCE,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
} from "../_mocks_/store.js";

/**
 * Get user infos from it's id from the mock file
 * @param {number} id user id to fetch
 * @returns {Promise<UserData | undefined>} data for the specified user or undefined
 */
export function getUserDataFromFile(id) {
    const userData = USER_MAIN_DATA.find((userData) => userData.id === id);

    return Promise.resolve(userData);
}

/**
 *
 * Get user activity from it's id
 * @param {number} id id
 * @returns {Promise<UserActivity | undefined>} activity Data for the specified user ou undefined
 */
export function getUserActivityFromFile(id) {
    const userActivityData = USER_ACTIVITY.find((user) => user.userId === id);

    return Promise.resolve(userActivityData.sessions);
}

/**
 *
 * @param {number} id id
 * @returns {Promise<UserAverageSessions | undefined>} average session for the specified user ou undefined
 */
export function getUsersAverageSessionFromFile(id) {
    const userAverageSession = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === id,
    );

    return Promise.resolve(userAverageSession.sessions);
}

/**
 *
 * @param {number} id id
 * @returns {Promise<UserPerformance | undefined>} data for the specified user or undefined
 */
export function getUserPerformanceFromFile(id) {
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId === id);

    const arrayOfKind = Object.entries(userPerformance.kind);
    const kindMap = new Map(arrayOfKind);
    console.log(kindMap.keys());

    // if (kindMap.keys()(userPerformance.data[0].kind)) {
    //     console.log("ca match");
    // } else {
    //     console.log("essaye encore");
    // }

    // if (userPerformance.data[0].kind === "1"){
    //     co
    // }

    //console.log(userPerformance);

    return Promise.resolve(userPerformance);
}
