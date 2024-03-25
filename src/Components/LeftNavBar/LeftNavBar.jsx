import style from "./LeftNavBar.module.scss";

export function LeftNavBar() {
    return (
        <div className={style.container}>
            <nav className={style.navContainer}>
                <img className={style.icone} src="src/assets/icon1.svg" alt="icone zen" />
                <img className={style.icone} src="src/assets/icon2.svg" alt="icone piscine" />
                <img className={style.icone} src="src/assets/icon3.svg" alt="icone velo" />
                <img className={style.icone} src="src/assets/icon4.svg" alt="icone muscu" />
            </nav>
            <p className={style.text}>Copiryght, SportsSee 2020</p>
        </div>
    );
}
