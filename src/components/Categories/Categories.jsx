import {createSignal} from "solid-js";

export default function Categories() {
  const category = createSignal()

  const arrayOfCategories = [
    "https://www.games-workshop.com/resources/static/header-2017/40k-nav-logo.png",
    "https://www.games-workshop.com/resources/static/header-2017/New_AOS_Logo.png",
    "https://www.games-workshop.com/resources/static/header-2017/HH-Nav-logo.png",
    "https://www.games-workshop.com/resources/static/header-2017/LOTR_NavBar_Logo.png",
    "https://www.games-workshop.com/resources/static/header-2017/GW-BL-Logo-Update.png",
  ];

  return (
    <div className="categories">
      <ul>
        {arrayOfCategories.map((item, index) => {
          return (
            <li
              key={index}
            >
              <img className="categories__img" src={item} alt="age of sigmar" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
