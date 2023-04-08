import {Component} from "solid-js";
import s from './Header.module.css'


const Header: Component = () => {
    return <header>
        <h1 class={s.title}>Warhammer shop app</h1>
    </header>
}

export default Header