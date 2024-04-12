import { useState } from "react";
import style from "./App.module.scss";
import { DailySession } from "./Components/DailySession/DailySession";
import { LeftNavBar } from "./Components/LeftNavBar/LeftNavBar";
import { TopNavBar } from "./Components/TopNavBar/TopNavBar";
import { Welcome } from "./Components/Welcome/Welcome";
import { UserContext } from "./utils/contexts";
import { AverageSession } from "./Components/AverageSession/AverageSession";
import { Completion } from "./Components/Completion/Completion";

import { KeyDataList } from "./Components/KeyData/KeyDataList/KeyDataList";
import { Activities } from "./Components/Activities/Activities";

/**
 *
 * @returns {React.JSX.Element} app component
 */
function App() {
    const [userId, setUserId] = useState(18);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            <header>
                <TopNavBar />
            </header>

            <main className={style.mainContainer}>
                <nav className={style.navBar}>
                    <LeftNavBar />
                </nav>
                <div className={style.elementContainer}>
                    <Welcome />
                    <section className={style.container}>
                        <div className={style.individualRate}>
                            <DailySession />
                            <div className={style.rates}>
                                <AverageSession />
                                <Activities />
                                <Completion />
                            </div>
                        </div>
                        <div className={style.generalInfo}>
                            <KeyDataList />
                        </div>
                    </section>
                </div>
            </main>
            <footer></footer>
        </UserContext.Provider>
    );
}

export default App;
