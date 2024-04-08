import { useEffect, useState } from "react";
import { getUserData } from "../../repositories/userRepository";
import { useUserId } from "../../utils/userHooks";

import style from "./Completion.module.scss";

/**
 *
 * @returns {React.JSX.Element} completion journalière
 */
export function Completion() {
    const id = useUserId();
    const [completion, setCompletion] = useState();

    useEffect(() => {
        /**
         * Encapsulate getUserInfos call since useEffect cannot be async
         */
        async function getCompletion() {
            try {
                const userCompletion = await getUserData(id);
                setCompletion(userCompletion.score);
            } catch {
                alert("error");
            }
        }
        getCompletion();
    }, [id, completion]);
    return (
        <article className={style.completionArticle}>
            completion: {completion * 100}%{" "}
        </article>
    );
}
