/** @module repository */

import { USER_MAIN_DATA } from "../_mocks_/store.js";
import { USER_ACTIVITY } from "../_mocks_/store.js";
import { USER_AVERAGE_SESSIONS } from "../_mocks_/store.js";

const endPoint = `http://localhost:3000/user/`;

// /**
//  *Get all usersId
//  * @returns {number[]} user ids
//  */
// export function getAllUserIds() {
//     const usersId = USER_MAIN_DATA.map((userId) => userId.id);

//     return usersId;
// }

/**
 * Get user Data from it's id
 * @param {number} id user id to fetch
 * @returns {Promise<UserData | undefined>} data for the specified user or undefined
 */
export async function getUserData(id) {
    try {
        if (import.meta.env.MODE === "mock") {
            return await getUserDataFromFile(id);
        }

        return await getUserDataFromAPI(id);
    } catch (error) {
        logError(error);
        throw error;
    }
}

/**
 * Get user infos from it's id from the mock file
 * @param {number} id user id to fetch
 * @returns {Promise<UserData | undefined>} data for the specified user or undefined
 */
function getUserDataFromFile(id) {
    const userData = USER_MAIN_DATA.find((userData) => userData.id === id);
    return Promise.resolve(userData);
}

/**
 * API CALL
 * Get user infos from it's id from the API
 * @param {number} id user id to fetch
 * @returns {Promise<UserData | undefined>} data for the specified user or undefined
 */
async function getUserDataFromAPI(id) {
    const result = await fetch(`${endPoint} ${id}`);
    const json = await result.json();

    return json.data;
}

/**
 * Get user activities from it's id
 * @param {number} id user id to fetch
 * @returns {Promise<UserActivity | undefined>} activity Data for the specified user ou undefined
 */
export async function getUserActivity(id) {
    try {
        if (import.meta.env.MODE === "mock") {
            return await getUserActivityFromFile(id);
        }

        return await getUserActivityFromAPI(id);
    } catch (error) {
        logError(error);
        throw error;
    }
}

/**
 *
 * Get user activity from it's id
 * @param {number} id id
 * @returns {Promise<UserActivity | undefined>} activity Data for the specified user ou undefined
 */
function getUserActivityFromFile(id) {
    const userActivityData = USER_ACTIVITY.find((user) => user.userId === id);

    return Promise.resolve(userActivityData.sessions);
}

/**
 * API CALL
 * Get user activity from it's id
 * @param {number} id id
 * @returns {Promise<UserActivity | undefined>} activity Data for the specified user ou undefined
 */
async function getUserActivityFromAPI(id) {
    const result = await fetch(`${endPoint}${id}/activity`);
    const json = await result.json();
    return json.data.sessions;
}

/**
 * Get user average session from it's id
 * @param {number} id user id to fetch
 * @returns {Promise<UserAverageSessions | undefined>} data for the specified user or undefined
 */
export async function getUserAverageSession(id) {
    try {
        if (import.meta.env.MODE === "mock") {
            return await getUsersAverageSessionFromFile(id);
        }

        return await getUsersAverageSessionFromAPI(id);
    } catch (error) {
        logError(error);
        throw error;
    }
}

/**
 *
 * @param {number} id id
 * @returns {Promise<UserAverageSessions | undefined>} average session for the specified user ou undefined
 */
function getUsersAverageSessionFromFile(id) {
    const userAverageSession = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === id,
    );

    return Promise.resolve(userAverageSession.sessions);
}

/**
 *
 * @param {number} id id
 * @returns {Promise<UserAverageSessions | undefined>} average session for the specified user ou undefined
 */
async function getUsersAverageSessionFromAPI(id) {
    const result = await fetch(`${endPoint}${id}/average-sessions`);
    const json = await result.json();
    return json.data.sessions;
}

/**
 *
 * @param {number} id id
 * @returns
 */
export async function getUserPerformance(id) {}

/**
 * log error in the global logging system
 * @param {Error} error error to log
 */
function logError(error) {
    console.log(error);
}
