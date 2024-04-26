import style from "./KeyDataList.module.scss";
import { KeyDataItem } from "../KeyDataItem/KeyDataItem";

import { getUserData } from "../../../repositories/userRepository";
import { useData, useUserId } from "../../../utils/userHooks";
import { useCallback } from "react";

/**
 *
 * @returns {React.JSX.Element} liste de chiffre clé
 */
export function KeyDataList() {
    const id = useUserId();

    const fetchUserData = useCallback(() => getUserData(id), [id]);

    const { data: data, isLoading, isError, refresh } = useData(fetchUserData);

    return (
        <article className={style.dataList}>
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
            {data && (
                <>
                    {" "}
                    <KeyDataItem
                        src={"src/assets/calories-icon (1).svg"}
                        quantity={`${data?.keyData.calorieCount}KCal`}
                        name={"calories"}
                    />
                    <KeyDataItem
                        src={"src/assets/protein-icon.svg"}
                        quantity={`${data?.keyData.proteinCount}g`}
                        name={"Proteines"}
                    />
                    <KeyDataItem
                        src={"src/assets/carbs-icon.svg"}
                        quantity={`${data?.keyData.carbohydrateCount}g`}
                        name={"Glucides"}
                    />
                    <KeyDataItem
                        src={"src/assets/fat-icon.svg"}
                        quantity={`${data?.keyData.lipidCount}g`}
                        name={"Lipides"}
                    />
                </>
            )}
        </article>
    );
}
