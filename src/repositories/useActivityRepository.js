/** @module repository */

import { USER_ACTIVITY } from "../_mocks_/store.js";

/**
 *
 * @returns {UserActivity[]} all user activity
 */
function getUsersActivity() {
    const usersActivity = USER_ACTIVITY;
    return usersActivity;
}

/**
 * Get user activity from it's id
 * @param {number} id id
 * @returns {UserActivity | undefined} activity Data for the specified user ou undefined
 */
export function getUserActivity(id) {
    const usersActivity = getUsersActivity();
    const userActivityData = usersActivity.find(user => user.userId === id);
    const userActivity = userActivityData.sessions;

    return userActivity;
}
