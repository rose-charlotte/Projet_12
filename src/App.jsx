import { useState } from "react";
import style from "./App.module.scss";
import { DailySession } from "./Components/DailySession/DailySession";
import { LeftNavBar } from "./Components/LeftNavBar/LeftNavBar";
import { TopNavBar } from "./Components/TopNavBar/TopNavBar";
import { Welcome } from "./Components/Welcome/Welcome";
import { UserContext } from "./utils/contexts";

/**
 * 
 * @returns {React.JSX.Element} app component
 */
function App() {
    const [userId, setUserId] = useState(18);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            <header className={style.navBar}>
                <TopNavBar />
            </header>
            <main className={style.main}>
                <LeftNavBar />
                <Welcome />
                <DailySession />
            </main>
        </UserContext.Provider>
    );
}

export default App;
