import { getUserInfos } from "../../dataFetching/repository";
import style from "./Welcome.module.scss";

export function Welcome() {
    const id = 18;
    const userInfos = getUserInfos(id);

    console.log(userInfos);

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                Bonjour <span className={style.name}>{userInfos?.firstName}</span>
            </h1>
            <p className={style.text}>Félicitation! Vous avez explosé vos objectifs hier {"\u{1f44f}"} </p>
        </div>
    );
}
