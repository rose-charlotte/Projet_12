import style from "./Activities.module.scss";

import { getUserPerformance } from "../../repositories/userRepository";
import { useUserId } from "../../utils/userHooks";
import { useEffect, useState } from "react";
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";

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
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="60%"
                    data={performance}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{
                            fill: "white",
                            fontSize: 12,
                            fontWeight: 500,
                            opacity: 1,
                        }}
                    />

                    <Radar
                        dataKey="value"
                        stroke="red"
                        fill="red"
                        opacity="0.7"
                    />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    );
}
