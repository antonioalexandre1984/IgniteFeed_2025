import { Avatar } from "../Avatar/Avatar";
import style from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react";


export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://media.istockphoto.com/id/2151295139/pt/foto/professional-online-gamer-hand-fingers.jpg?s=612x612&w=is&k=20&c=ZZ2UGpzUO30Vir0PSK978vwGGQmBk-wAwjfuHHlkH3k=" alt=""/>
            <div className={style.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/53489752?v=4"/>
                <strong className="">Antonio Santos</strong>
                <span className="">Developer Fullstack</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                        Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}