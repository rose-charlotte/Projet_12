import { getUserData } from "../../repositories/userRepository";
import { useEffect, useState } from "react";
import style from "./Welcome.module.scss";
import { useUserId } from "../../utils/userHooks";
import { Erreur } from "../Erreur/Erreur";

/**
 *
 * @returns {React.JSX.Element} Message d'acceuil personalisé
 */
export function Welcome() {
    const id = useUserId();
    const [userData, setUserData] = useState();

    useEffect(() => {
        /**
         * Encapsulate getUserInfos call since useEffect cannot be async
         */
        async function fetchUserData() {
            try {
                const userInfos = await getUserData(id);
                setUserData(userInfos);
            } catch {
                alert("error");
            }
        }

        fetchUserData();
    }, [id]);

    return (
        <div className={style.titleContainer}>
            {userData && (
                <>
                    {" "}
                    <h1 className={style.title}>
                        Bonjour {""}
                        <span className={style.name}>
                            {userData?.userInfos.firstName}
                        </span>
                    </h1>
                    <p className={style.text}>
                        Félicitation! Vous avez explosé vos objectifs hier{" "}
                        {"\u{1f44f}"}{" "}
                    </p>
                </>
            )}
            {!userData && <Erreur />}
        </div>
    );
}
