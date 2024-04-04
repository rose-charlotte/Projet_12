import style from "./DailySession.module.scss";
import { useUserId } from "../../utils/userHooks";
import { getUserActivity } from "../../repositories/useActivityRepository";
import { useEffect, useState } from "react";

/**
 *
 * @returns {React.JSX.Element} tableau des activités quotidiennes
 */
export function DailySession() {
    const id = useUserId();
    const [userActivities, setUserActivities] = useState();

    console.log(userActivities);
    useEffect(() => {
        /**
         *
         * @returns {Session} activity session
         */
        async function getUserActivitySession() {
            const userActivities = await getUserActivity(id);
            console.log(userActivities);
            setUserActivities(userActivities);
        }
        getUserActivitySession();
    }, [userActivities]);

    console.log(userActivities);
    return (
        <article className={style.article}>
            <h1 className={style.title}>Activité quotidienne</h1>

            {userActivities?.map((activity) => (
                <ul className={style.articleListContainer} key={activity.day}>
                    <li>{activity.kilogram}</li>
                    <li>{activity.calories}</li>
                </ul>
            ))}
        </article>
    );
}
