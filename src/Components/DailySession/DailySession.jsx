import style from "./DailySession.module.scss";
import { useUserId } from "../../utils/userHooks";
import { getUserActivity } from "../../repositories/userRepository";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from "recharts";
import { Erreur } from "../Erreur/Erreur";

/**
 *
 * @returns {React.JSX.Element} tableau des activités quotidiennes
 */
export function DailySession() {
    const id = useUserId();
    const [userActivities, setUserActivities] = useState();

    useEffect(() => {
        /**
         *
         *  Encapsulate getUserInfos call since useEffect cannot be async
         */
        async function getUserActivitySession() {
            const getUserActivities = await getUserActivity(id);
            setUserActivities(getUserActivities);
        }
        getUserActivitySession();
    }, [id]);

    const tooltipStyle = {
        backgroundColor: "#E60000",
        width: 39,
        height: 63,
        color: "white",
        margin: 10,
        fontSize: 7,
        paddingLeft: 15,
    };
    const tooltipElementStyle = {
        paddingTop: 20,
    };
    const TooltipContent = ({ payload }) => {
        console.log(payload);
        return (
            <div style={tooltipStyle}>
                {payload.map((ele) =>
                    ele.name === "kilogram" ? (
                        <div style={tooltipElementStyle} key={ele.name}>
                            {ele.value} Kg{" "}
                        </div>
                    ) : (
                        <div style={tooltipElementStyle} key={ele.name}>
                            {ele.value} Cal{" "}
                        </div>
                    ),
                )}
            </div>
        );
    };

    TooltipContent.propTypes = {
        payload: PropTypes.array.isRequired,
    };

    console.log(userActivities);
    return (
        <article className={style.activitiesArticle}>
            <h1 className={style.title}>Activité quotidienne</h1>
            {userActivities && (
                <BarChart
                    width={835}
                    height={300}
                    data={userActivities}
                    barCategoryGap="40%"
                >
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
                    <YAxis orientation="left" dataKey="calories" hide={true} />

                    <Tooltip
                        content={<TooltipContent payload={userActivities} />}
                    />
                    <Legend
                        iconType="circle"
                        align="right"
                        verticalAlign="top"
                    />
                    <Bar dataKey="kilogram" fill="#282D30" />
                    <Bar dataKey="calories" fill="#E60000" />
                </BarChart>
            )}

            {!userActivities && <Erreur />}
        </article>
    );
}
