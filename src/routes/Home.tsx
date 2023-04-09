import {Component} from "solid-js";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import PizzaBlock from "~/components/PizzaBlock/PizzaBlock";

const Home: Component = () => {
    return <>
        <Header/>
        <PizzaBlock/>
        <Footer/>
    </>
}
export default Home
