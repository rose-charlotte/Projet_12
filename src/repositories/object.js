//données necessaires pour le composant dailySession:
// USER_AVERAGE_SESSIONS.session.day - en lui passant l'id
// USER_ACTIVITY.session.kilogam
// USER_ACTIVITY.session.caslories;

import {
    // getUserActivityFromFile,
    // getUserDataFromFile,
    // getUserPerformanceFromFile,
    getUsersAverageSessionFromFile,
} from "./mockUserRepository";

const data = getUsersAverageSessionFromFile(18);
console.log(data);

export class User {
    constructor(id) {
        this.id = id;
    }
    get name() {
        return this;
    }
}
