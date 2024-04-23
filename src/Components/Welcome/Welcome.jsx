import { getUserData } from "../../repositories/userRepository";
import { useCallback } from "react";
import style from "./Welcome.module.scss";
import { useUserId } from "../../utils/userHooks";
import { useData } from "../../utils/userHooks";

/**
 *
 * @returns {React.JSX.Element} Message d'acceuil personalisé
 */
export function Welcome() {
    const id = useUserId();

    // const fetchUserData = useCallback(async () => {
    //     const delay = (ms) =>
    //         new Promise((resolve) => setTimeout(() => resolve(), ms));

    //     await delay(2000);
    //     return await getUserData(id);
    // }, [id]);
    const fetchUserData = useCallback(() => getUserData(id), [id]);

    const {
        data: userData,
        isLoading,
        isError,
        refresh,
    } = useData(fetchUserData);

    return (
        <div className={style.titleContainer}>
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
        </div>
    );
}
