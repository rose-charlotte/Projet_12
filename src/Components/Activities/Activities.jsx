import style from "./Activities.module.scss";

import { getUserPerformance } from "../../repositories/userRepository";
import { useUserId } from "../../utils/userHooks";
import { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

/**
 * @returns {React.JSX.Element} object des differents types d'activitées
 */
export function Activities() {
    const id = useUserId();
    const [performance, setPerformance] = useState();

    useEffect(() => {
        /**
         * Encapsulate getAverageSession call since useEffect cannot be async
         */
        async function getPerformance() {
            const userPerformance = await getUserPerformance(id);
            setPerformance(userPerformance);
        }
        getPerformance();
    }, [id]);

    return (
        <article className={style.activitiesContainer}>
            <RadarChart width={250} height={250} data={performance}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" />

                <Radar dataKey="value" stroke="red" fill="red" />
            </RadarChart>
        </article>
    );
}
