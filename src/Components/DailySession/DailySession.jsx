import style from "./DailySession.module.scss";
import { useUserId } from "../../utils/userHooks";
import { getUserActivity } from "../../repositories/useActivityRepository";


/**
 * 
 * @returns {React.JSX.Element} tableau des activités quotidiennes
 */
export function DailySession(){
const id = useUserId();
const userActivities = getUserActivity(id)

    return(
        <>
        <h1 className={style.title}>Activité quotidienne</h1>
        <ul>
           {userActivities.map((userActivity) =><li key= {userActivity.day}>{userActivity.day} / {userActivity.kilogram} / {userActivity.calories}</li> )} 
        </ul>
        </>
    )
}