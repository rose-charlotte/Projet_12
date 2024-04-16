import { useEffect, useState } from "react";
import { getUserData } from "../../repositories/userRepository";
import { useUserId } from "../../utils/userHooks";

import style from "./Completion.module.scss";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import { Erreur } from "../Erreur/Erreur";
/**
 *
 * @returns {React.JSX.Element} completion journalière
 */
export function Completion() {
    const id = useUserId();
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        /**
         * Encapsulate getUserInfos call since useEffect cannot be async
         */
        async function getCompletion() {
            try {
                const userCompletion = await getUserData(id);

                setCompletion(
                    userCompletion.score
                        ? userCompletion.score
                        : userCompletion.todayScore,
                );
            } catch {
                alert("error");
            }
        }
        getCompletion();
    }, [id]);

    const progression = [
        {
            pourcentage: completion * 100,
        },
    ];
    const circleSize = 200;

    return (
        <article className={style.completionArticle}>
            <h1 className={style.title}>Score</h1>
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
                        {completion * 100}% de votre objectif
                    </text>
                </RadialBarChart>
            )}
            {!progression && <Erreur />}
        </article>
    );
}
