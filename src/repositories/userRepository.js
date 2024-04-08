/** @module repository */

import {
    getUserActivityFromFile,
    getUserDataFromFile,
    getUserPerformanceFromFile,
    getUsersAverageSessionFromFile,
} from "./mockUserRepository";

import {
    getUserActivityFromAPI,
    getUserDataFromAPI,
    getUsersAverageSessionFromAPI,
} from "./APIUserRepository";

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
 * @returns {Promise<UserPerformance | undefined>} data for the specified user or undefined
 */
export async function getUserPerformance(id) {
    try {
        if (import.meta.env.MODE === "mock") {
            return getUserPerformanceFromFile(id);
        }
        //return getUserPerformanceFromAPI(id);
    } catch (error) {
        logError(error);
        throw error;
    }
}

/**
 * log error in the global logging system
 * @param {Error} error error to log
 */
function logError(error) {
    console.log(error);
}
