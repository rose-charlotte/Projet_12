/** @module repository */

import { USER_AVERAGE_SESSIONS } from "../_mocks_/store.js";

/**
 * @returns {UserAverageSessions[]} all users average sessions
 */
function getAllUsersAverageSession() {
    const usersAverageSessions = USER_AVERAGE_SESSIONS;
    return usersAverageSessions;
}

/**
 *
 * @param {number} id id
 * @returns {UserAverageSessions | undefined} average session for the specified user ou undefined
 */
export function getUserAverageSession(id) {
    const usersAverageSession = getAllUsersAverageSession();
    const userAverageSession = usersAverageSession.find(
        (user) => user.userId === id,
    );
    return userAverageSession;
}
