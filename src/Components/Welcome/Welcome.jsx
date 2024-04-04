import { getUserInfos } from "../../repositories/userRepository";
import { useEffect, useState } from "react";
import style from "./Welcome.module.scss";
import { useUserId } from "../../utils/userHooks";

/**
 *
 * @returns {React.JSX.Element} Message d'acceuil personalisé
 */
export function Welcome() {
    const id = useUserId();
    const [userInfos, setUserInfos] = useState();

    useEffect(() => {
        /**
         *
         * @returns {UserInfos} userData
         */
        async function getUserData() {
            const userInfos = await getUserInfos(id);

            setUserInfos(userInfos);
        }

        getUserData();
    }, [userInfos]);

    console.log(userInfos);
    return (
        <div className={style.titleContainer}>
            <h1 className={style.title}>
                Bonjour {""}
                <span className={style.name}>{userInfos?.firstName}</span>
            </h1>
            <p className={style.text}>
                Félicitation! Vous avez explosé vos objectifs hier {"\u{1f44f}"}{" "}
            </p>
        </div>
    );
}
