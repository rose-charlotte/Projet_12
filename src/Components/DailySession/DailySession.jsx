import style from "./DailySession.module.scss";
import { useData, useUserId } from "../../utils/userHooks";
import { getUserActivity } from "../../repositories/userRepository";
import { useCallback } from "react";
import PropTypes from "prop-types";

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from "recharts";

/**
 *
 * @returns {React.JSX.Element} tableau des activités quotidiennes
 */
export function DailySession() {
    const id = useUserId();

    const fetchUserData = useCallback(() => getUserActivity(id), [id]);

    const {
        data: userActivities,
        isLoading,
        isError,
        refresh,
    } = useData(fetchUserData);

    return (
        <article className={style.activitiesArticle}>
            <h1 className={style.title}>Activité quotidienne</h1>
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

            {userActivities && (
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={userActivities} barCategoryGap="40%">
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            axisLine={false}
                            tickLine={false}
                            padding={{ bottom: 200 }}
                            dataKey="day"
                        />
                        <YAxis
                            orientation="right"
                            dataKey="kilogram"
                            yAxisId="right"
                            axisLine={false}
                            tickLine={false}
                            tickCount={4}
                            padding={{ top: 50, left: 30 }}
                        />
                        <YAxis
                            orientation="left"
                            dataKey="calories"
                            hide={true}
                        />

                        <Tooltip
                            content={
                                <TooltipContent payload={userActivities} />
                            }
                        />
                        <Legend
                            width="500"
                            iconType="circle"
                            iconSize="9"
                            align="right"
                            verticalAlign="top"
                            wrapperStyle={{
                                top: -17,
                                fontSize: "14px",
                            }}
                        />
                        <Bar
                            dataKey="kilogram"
                            name="Poids (kg)"
                            fill="#282D30"
                            radius={[15, 15, 0, 0]}
                        />
                        <Bar
                            dataKey="calories"
                            name="Calories brûlées (kCal)"
                            fill="#E60000"
                            radius={[15, 15, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </article>
    );
}

const TooltipContent = ({ payload }) => {
    const tooltipStyle = {
        backgroundColor: "#E60000",
        width: 39,
        height: 63,
        color: "white",
        margin: 10,
        fontSize: 10,
        paddingLeft: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
    };

    return (
        <div style={tooltipStyle}>
            {payload.map((ele) =>
                ele.name === "Poids (kg)" ? (
                    <div key={ele.name}>{ele.value} Kg </div>
                ) : (
                    <div key={ele.name}>{ele.value} Cal </div>
                ),
            )}
        </div>
    );
};

TooltipContent.propTypes = {
    payload: PropTypes.array.isRequired,
};
