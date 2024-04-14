import { useContext } from "react"
import { UserContext } from "./contexts"

/**
 * 
 * @returns {number} User id
 */
export function useUserId() {
    const user = useContext(UserContext);
    return user.userId + 1;
}