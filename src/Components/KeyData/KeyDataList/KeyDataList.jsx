import style from "./KeyDataList.module.scss";
import { KeyDataItem } from "../KeyDataItem/KeyDataItem";

import { getUserData } from "../../../repositories/userRepository";
import { useUserId } from "../../../utils/userHooks";
import { useEffect, useState } from "react";
import { Erreur } from "../../Erreur/Erreur";

/**
 *
 * @returns {React.JSX.Element} liste de chiffre clé
 */
export function KeyDataList() {
    const id = useUserId();
    const [data, setData] = useState();
    useEffect(() => {
        /**
         * Encapsulate getAverageSession call since useEffect cannot be async
         */
        async function getKeyData() {
            const data = await getUserData(id);
            setData(data.keyData);
        }
        getKeyData();
    }, [id, data]);

    return (
        <article className={style.dataList}>
            {data && (
                <>
                    {" "}
                    <KeyDataItem
                        src={"src/assets/calories-icon (1).svg"}
                        quantity={`${data?.calorieCount}Kcal`}
                        name={"calories"}
                    />
                    <KeyDataItem
                        src={"src/assets/protein-icon.svg"}
                        quantity={`${data?.proteinCount}g`}
                        name={"Proteines"}
                    />
                    <KeyDataItem
                        src={"src/assets/carbs-icon.svg"}
                        quantity={`${data?.carbohydrateCount}g`}
                        name={"Glucides"}
                    />
                    <KeyDataItem
                        src={"src/assets/fat-icon.svg"}
                        quantity={`${data?.lipidCount}g`}
                        name={"Lipides"}
                    />
                </>
            )}
            {!data && <Erreur />}
        </article>
    );
}
