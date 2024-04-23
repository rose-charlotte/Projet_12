import { useCallback, useContext, useState } from "react";
import { UserContext } from "./contexts";
import { useEffect } from "react";

/**
 *
 * @returns {number} User id
 */
export function useUserId() {
    const user = useContext(UserContext);
    return user.userId;
}

// export function useUserData() {
//     const id = useUserId();

//     const [userData, setUserData] = useState(undefined);

//     useEffect(() => {
//         async function fetchUserData() {
//             setUserData(await getUserData(id));
//         }

//         fetchUserData();
//     }, [id]);

//     return userData;
// }

/**
 *
 * @param {*} fetchData getData from id
 * @returns {*} data, isLoading, isError
 */
export function useData(fetchData) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getData = useCallback(async () => {
        try {
            setIsError(false);
            const fetchedData = await fetchData();
            setData(fetchedData);
        } catch {
            setIsError(true);
            setData(undefined);
        } finally {
            setIsLoading(false);
        }
    }, [fetchData]);

    /**
     *
     */
    function refresh() {
        getData();
    }

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, isLoading, isError, refresh };
}
