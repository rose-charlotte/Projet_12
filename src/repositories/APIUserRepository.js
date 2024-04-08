const baseUrl = `http://localhost:3000/`;

/**
 * API CALL
 * Get user infos from it's id from the API
 * @param {number} id user id to fetch
 * @returns {Promise<UserData | undefined>} data for the specified user or undefined
 */
export async function getUserDataFromAPI(id) {
    const result = await fetch(`${baseUrl}user/${id}`);
    const json = await result.json();

    return json.data;
}

/**
 * API CALL
 * Get user activity from it's id
 * @param {number} id id
 * @returns {Promise<UserActivity | undefined>} activity Data for the specified user ou undefined
 */
export async function getUserActivityFromAPI(id) {
    const result = await fetch(`${baseUrl}user/${id}/activity`);
    const json = await result.json();
    return json.data.sessions;
}

/**
 *
 * @param {number} id id
 * @returns {Promise<UserAverageSessions | undefined>} average session for the specified user ou undefined
 */
export async function getUsersAverageSessionFromAPI(id) {
    const result = await fetch(`${baseUrl}user/${id}/average-sessions`);
    const json = await result.json();
    return json.data.sessions;
}
