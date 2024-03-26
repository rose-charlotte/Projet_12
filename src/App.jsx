import style from "./App.module.scss";
import { LeftNavBar } from "./Components/LeftNavBar/LeftNavBar";
import { TopNavBar } from "./Components/TopNavBar/TopNavBar";
import { Welcome } from "./Components/Welcome/Welcome";

/**
 * 
 * @returns {React.JSX.Element} app component
 */
function App() {
    return (
        <>
            <header className={style.navBar}>
                <TopNavBar />
            </header>
            <main className={style.main}>
                <LeftNavBar />
                <Welcome />
            </main>
        </>
    );
}

export default App;
