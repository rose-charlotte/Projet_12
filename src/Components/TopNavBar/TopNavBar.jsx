
import style from "./TopNavBar.module.scss";


/**
 * 
 * @returns {React.JSX.Element} Top NavBar
 */
export function TopNavBar() {
 
    return (
        <nav className={style.container}>
            <img src="src/assets/logo.svg" />
            <span>Accueil</span>
            <span>Profil</span>
            <span>réglage</span>
            <span>Communauté</span>
        </nav>
    );
}
