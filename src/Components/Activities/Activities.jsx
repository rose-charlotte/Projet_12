import style from "./Activities.module.scss";

import { getUserPerformance } from "../../repositories/userRepository";
import { useData, useUserId } from "../../utils/userHooks";
import { useCallback } from "react";
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

    // const fetchUserData = useCallback(async () => {
    //     const delay = (ms) =>
    //         new Promise((resolve) => setTimeout(() => resolve(), ms));

    //     await delay(2000);
    //     return await getUserPerformance(id);
    // }, [id]);
    const fetchUserData = useCallback(() => getUserPerformance(id), [id]);
    const {
        data: performance,
        isLoading,
        isError,
        refresh,
    } = useData(fetchUserData);

    return (
        <article className={style.activitiesContainer}>
            {isLoading && <p>Loading...</p>}

            {isError && (
                <button
                    onClick={() => {
                        refresh();
                    }}
                >
                    Refresh
                </button>
            )}

            {performance && (
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
            )}
        </article>
    );
}
