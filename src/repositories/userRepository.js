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
    getUserPerformanceFromAPI,
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
        const userActivity = await (import.meta.env.MODE === "mock"
            ? getUserActivityFromFile(id)
            : getUserActivityFromAPI(id));

        return userActivity.map((data) => ({
            day: new Date(data.day).getDate(),
            kilogram: data.kilogram,
            calories: data.calories,
        }));
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
        const dayInLetter = ["L", "M", "M", "J", "V", "S", "D"];
        const averageSessions = await (import.meta.env.MODE === "mock"
            ? getUsersAverageSessionFromFile(id)
            : getUsersAverageSessionFromAPI(id));

        return averageSessions.map((session) => ({
            day: dayInLetter[session.day - 1],
            sessionLength: session.sessionLength,
        }));
    } catch (error) {
        logError(error);
        throw error;
    }
}

/**
 *
 * @param {number} id id
 * @returns {Promise<UserPerformance[] | undefined>} performance data for the specified user or undefined
 */
export async function getUserPerformance(id) {
    try {
        const userPerformance = await (import.meta.env.MODE === "mock"
            ? getUserPerformanceFromFile(id)
            : getUserPerformanceFromAPI(id));

        const UserPerformanceKind = [
            "Cardio",
            "Energie",
            "Endurance",
            "Force",
            "Vitesse",
            "Intensité",
        ];
        return userPerformance.data.map((data) => ({
            kind: UserPerformanceKind[data.kind - 1],
            value: data.value,
        }));
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
