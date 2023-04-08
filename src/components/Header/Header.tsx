import {Component} from "solid-js";
import s from './Header.module.css'
import Search from "~/components/Search/Search";


const Header: Component = () => {
    return <header>
        <div class="container">
            <div class="header__logo">
                <img
                    style={{
                        'background-color': "#fff",
                        'padding': "0 10px",
                        'border-radius': "5px",
                        'width': "156px",
                    }}
                    src="https://www.games-workshop.com/resources/static/header-2017/gw-logo-default-stacked.svg"
                    alt="BL logo"
                />
                <div>
                    <h1>WARHAMMER</h1>
                    <p>Молот войны</p>
                </div>
            </div>
            <Search/>
            <div class="header__cart">
                <span>2310 ₽</span>
                <div class="button__delimiter"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 18 18"
                >
                    <path
                        stroke="#fff"
                        d="M6.333 16.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM14.333 16.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM4.78 5h11.553l-1.12 5.593a1.334 1.334 0 01-1.333 1.074H6.833a1.334 1.334 0 01-1.333-1.16l-1.013-7.68a1.333 1.333 0 00-1.32-1.16h-1.5"
                    ></path>
                </svg>
                <span>3</span>
            </div>
        </div>
    </header>
}

export default Header