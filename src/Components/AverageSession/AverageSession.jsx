import { useEffect, useState } from "react";
import { getUserAverageSession } from "../../repositories/userRepository";
import { useUserId } from "../../utils/userHooks";
import style from "./AverageSession.module.scss";
import PropTypes from "prop-types";

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
                    <XAxis
                        dataKey="day"
                        stroke="white"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, opacity: 0.5 }}
                        tickMargin={20}
                    />
                    <YAxis dataKey="sessionLength" hide={true} />
                    <Tooltip
                        content={<TooltipContent payload={averageSessions} />}
                        cursor={false}
                    />
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

const TooltipContent = ({ payload }) => {
    const tooltipContentStyle = {
        width: 40,
        height: 15,
        backgroundColor: "white",
        fontSize: 8,
        paddingTop: 10,
    };
    const tooltipElementStyle = {
        color: "black",
        paddingTop: 10,
        paddingLeft: 10,
    };
    return (
        <div style={tooltipContentStyle}>
            {payload.map((ele) => (
                <span style={tooltipElementStyle} key={ele.name}>
                    {ele.value} min
                </span>
            ))}
        </div>
    );
};

TooltipContent.propTypes = {
    payload: PropTypes.array.isRequired,
};
