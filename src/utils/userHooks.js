import { useContext } from "react";
import { UserContext } from "./contexts";
//import { getUserData } from "../repositories/userRepository";

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
