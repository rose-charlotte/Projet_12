import { useEffect, useState } from "react";
import { getUserAverageSession } from "../../repositories/userRepository";
import { useUserId } from "../../utils/userHooks";
import style from "./AverageSession.module.scss";

import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";
import { Erreur } from "../Erreur/Erreur";

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
    }, [id]);
    return (
        <article className={style.averageSessionArticle}>
            <h1 className={style.title}>Durée Moyenne des sessions</h1>

            {averageSessions && (
                <LineChart data={averageSessions} width={255} height={126}>
                    <XAxis dataKey="day" stroke="white" />
                    <YAxis hide={true} />
                    <Tooltip dataKey="sessionLength" />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        dot={false}
                        stroke="white"
                    />
                </LineChart>
            )}
            {!averageSessions && <Erreur />}
        </article>
    );
}
