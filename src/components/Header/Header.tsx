import {Component} from "solid-js";
import s from './Header.module.css'
import Search from "~/components/Search/Search";


const Header: Component = () => {
    return <header class="header py-4 ">
        <div class="container mx-auto px-6 flex items-center">
            <div class="flex-1 w-64">
                <div class="flex text-center">
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
                        <h1 class="text-3xl font-bold">WARHAMMER</h1>
                        <p>Молот войны</p>
                    </div>
                </div>
            </div>
            <Search/>
            <div class="flex bg-black p-2 rounded-lg mx-2">
                <span class="text-white mx-2">2310 ₽</span>
                <div class="height-12 w-0.5 bg-white"></div>
                <svg
                    class="ml-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 18 18">
                    <path
                        stroke="#fff"
                        d="M6.333 16.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM14.333 16.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM4.78 5h11.553l-1.12 5.593a1.334 1.334 0 01-1.333 1.074H6.833a1.334 1.334 0 01-1.333-1.16l-1.013-7.68a1.333 1.333 0 00-1.32-1.16h-1.5"
                    ></path>
                </svg>
                <span class="text-white mx-2">3</span>
            </div>
        </div>
    </header>
}

export default Header