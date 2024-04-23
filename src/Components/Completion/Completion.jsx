import { useCallback } from "react";
import { getUserData } from "../../repositories/userRepository";
import { useData, useUserId } from "../../utils/userHooks";

import style from "./Completion.module.scss";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

/**
 *
 * @returns {React.JSX.Element} completion journalière
 */
export function Completion() {
    const id = useUserId();

    const fetchUserData = useCallback(() => getUserData(id), [id]);
    // const fetchUserData = useCallback(async () => {
    //     const delay = (ms) =>
    //         new Promise((resolve) => setTimeout(() => resolve(), ms));

    //     await delay(2000);
    //     return await getUserData(id);
    // }, [id]);

    const {
        data: completion,
        isLoading,
        isError,
        refresh,
    } = useData(fetchUserData);

    console.log(completion);

    const completionScore = completion?.score
        ? completion?.score
        : completion?.todayScore;

    console.log(completionScore);

    const progression = [
        {
            pourcentage: completionScore * 100,
        },
    ];
    const circleSize = 200;

    return (
        <article className={style.completionArticle}>
            <h1 className={style.title}>Score</h1>

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

            {progression && (
                <RadialBarChart
                    width={circleSize}
                    height={circleSize}
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    innerRadius={90}
                    outerRadius={110}
                    barSize={8}
                    data={progression}
                    startAngle={90}
                    endAngle={450}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                    <RadialBar
                        dataKey="pourcentage"
                        cornerRadius={circleSize / 2}
                        fill="#FF0101"
                    />
                    <text
                        x={circleSize / 2}
                        y={circleSize / 2}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={style.text}
                    >
                        {completionScore * 100}% de votre objectif
                    </text>
                </RadialBarChart>
            )}
        </article>
    );
}
