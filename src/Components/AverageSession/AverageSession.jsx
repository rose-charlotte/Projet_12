import { useEffect, useState } from "react";
import { getUserAverageSession } from "../../repositories/userRepository";
import { useUserId } from "../../utils/userHooks";
import style from "./AverageSession.module.scss";
/**
 *
 * @returns {React.JSX.Element} tableau des moyennes de session
 */
export function AverageSession() {
    const id = useUserId();
    const [averageSessions, setAverageSessions] = useState();

    useEffect(() => {
        /**
         *
         *  Encapsulate getAverageSession call since useEffect cannot be async
         */
        async function getAverageSession() {
            const userAverageSessions = await getUserAverageSession(id);
            setAverageSessions(userAverageSessions);
        }

        getAverageSession();
    }, [id, averageSessions]);

    return (
        <article className={style.averageSessionArticle}>
            <h1>average sessions</h1>
            {averageSessions?.map((session) => (
                <ul className={style.averageSessionList} key={session.day}>
                    <li>{session.day}</li>
                    <li>{session.sessionLength}</li>
                </ul>
            ))}
        </article>
    );
}
