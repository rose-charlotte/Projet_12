import { getUserInfos } from "../../repositories/userRepository";
import style from "./Welcome.module.scss";
import { useUserId } from "../../utils/userHooks";

/**
 * 
 * @returns {React.JSX.Element} Message d'acceuil personalisé
 */
export function Welcome() {
    //const id = 18;

    const id = useUserId();
    const userInfos = getUserInfos(id);

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                Bonjour <span className={style.name}>{userInfos?.firstName}</span>
            </h1>
            <p className={style.text}>Félicitation! Vous avez explosé vos objectifs hier {"\u{1f44f}"} </p>
        </div>
    );
}
