import style from "./Header.module.css"
import logoIgnite from "../../assets/Vector.svg"

export function Header(){
    return(
        <header  className={style.header}>
            <img src={logoIgnite} alt="Logotipo do Ignite Feed"/>
            <strong>Ignite Feed</strong>
        </header>
    );
}