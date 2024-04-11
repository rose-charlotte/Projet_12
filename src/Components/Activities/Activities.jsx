import style from "./Activities.module.scss";

import { getUserPerformance } from "../../repositories/userRepository";
import { useUserId } from "../../utils/userHooks";
import { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

/**
 * @returns {React.JSX.Element} object des differents types d'activitées
 */
export function Activities() {
    // const id = useUserId();
    // const [performance, setPerformance] = useState();

    // useEffect(() => {
    //     /**
    //      * Encapsulate getAverageSession call since useEffect cannot be async
    //      */
    //     async function getPerformance() {
    //         const userPerformance = await getUserPerformance(id);
    //         setPerformance(userPerformance);
    //     }
    //     getPerformance();
    // }, [id, performance]);

    const performance = [
        { kind: "cardio", value: 200 },
        { kind: "energy", value: 240 },
        { kind: "endurance", value: 80 },
        { kind: "strength", value: 80 },
        { kind: "speed", value: 220 },
        { kind: "intensity", value: 110 },
    ];
    return (
        <article className={style.activitiesContainer}>
            <RadarChart width={300} height={300} data={performance}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" />

                <Radar dataKey="value" stroke="red" fill="red" />
            </RadarChart>
        </article>
    );
}
