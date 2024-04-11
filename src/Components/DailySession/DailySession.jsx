import style from "./DailySession.module.scss";
import { useUserId } from "../../utils/userHooks";
import { getUserActivity } from "../../repositories/userRepository";
import { useEffect, useState } from "react";

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from "recharts";
/**
 *
 * @returns {React.JSX.Element} tableau des activités quotidiennes
 */
export function DailySession() {
    const id = useUserId();
    const [userActivities, setUserActivities] = useState();

    useEffect(() => {
        /**
         *
         *  Encapsulate getUserInfos call since useEffect cannot be async
         */
        async function getUserActivitySession() {
            const getUserActivities = await getUserActivity(id);
            setUserActivities(getUserActivities);
        }
        getUserActivitySession();
    }, [id, userActivities]);

    return (
        <article className={style.activitiesArticle}>
            <h1 className={style.title}>Activité quotidienne</h1>
            <BarChart
                width={835}
                height={350}
                data={userActivities}
                barCategoryGap="40%"
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis
                    orientation="right"
                    dataKey="kilogram"
                    yAxisId="right"
                    axisLine={false}
                    tickLine={false}
                    tickCount={4}
                    padding={{ top: 50, left: 30 }}
                />
                <YAxis orientation="left" dataKey="calories" hide={true} />

                <Tooltip />
                <Legend iconType="circle" align="right" verticalAlign="top" />
                <Bar dataKey="kilogram" fill="#282D30" />
                <Bar dataKey="calories" fill="#E60000" />
            </BarChart>
        </article>
    );
}
