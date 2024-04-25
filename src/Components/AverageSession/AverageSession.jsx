import { useCallback } from "react";
import { getUserAverageSession } from "../../repositories/userRepository";
import { useData, useUserId } from "../../utils/userHooks";
import style from "./AverageSession.module.scss";
import PropTypes from "prop-types";

import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";

/**
 *
 * @returns {React.JSX.Element} tableau des moyennes de session
 */
export function AverageSession() {
    const id = useUserId();

    const fetchUserData = useCallback(() => getUserAverageSession(id), [id]);

    const {
        data: averageSessions,
        isLoading,
        isError,
        refresh,
    } = useData(fetchUserData);

    return (
        <article className={style.averageSessionArticle}>
            <h1 className={style.title}>Durée Moyenne des sessions</h1>

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

            {averageSessions && (
                <LineChart data={averageSessions} width={270} height={126}>
                    <XAxis
                        dataKey="day"
                        stroke="white"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, opacity: 0.5 }}
                        tickMargin={10}
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
                        width="110%"
                    />
                </LineChart>
            )}
        </article>
    );
}

const TooltipContent = ({ payload }) => {
    const tooltipContentStyle = {
        width: 50,
        height: 20,
        backgroundColor: "white",
        fontSize: 10,
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
