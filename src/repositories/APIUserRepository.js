const baseUrl = `http://localhost:3000/`;

let userData = undefined;
let userActivity = undefined;
let userAverageSession = undefined;
let userPerformance = undefined;

/**
 * API CALL
 * Get user infos from it's id from the API
 * @param {number} id user id to fetch
 * @returns {Promise<UserData | undefined>} data for the specified user or undefined
 */
export async function getUserDataFromAPI(id) {
    if (!userData) {
        const result = await fetch(`${baseUrl}user/${id}`);
        const json = await result.json();

        userData = json.data;
    }

    return userData;
}

/**
 * API CALL
 * Get user activity from it's id
 * @param {number} id id
 * @returns {Promise<UserActivity | undefined>} activity Data for the specified user ou undefined
 */
export async function getUserActivityFromAPI(id) {
    if (!userActivity) {
        const result = await fetch(`${baseUrl}user/${id}/activity`);
        const json = await result.json();
        userActivity = json.data.sessions;
    }

    return userActivity;
}

/**
 *
 * @param {number} id id
 * @returns {Promise<UserAverageSessions | undefined>} average session for the specified user ou undefined
 */
export async function getUsersAverageSessionFromAPI(id) {
    if (!userAverageSession) {
        const result = await fetch(`${baseUrl}user/${id}/average-sessions`);
        const json = await result.json();
        userAverageSession = json.data.sessions;
    }

    return userAverageSession;
}

/**
 *
 * @param {number} id id
 * @returns {Promise<UserPerformance | undefined>} performance for the specified user or undefined
 */
export async function getUserPerformanceFromAPI(id) {
    if (!userPerformance) {
        const result = await fetch(`${baseUrl}user/${id}/performance`);
        const json = await result.json();
        userPerformance = json.data;
    }

    return userPerformance;
}
