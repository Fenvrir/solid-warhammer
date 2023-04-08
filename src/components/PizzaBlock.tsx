const PizzaBlock = () => {
    return <div class="content__items">
        <div class="item-block__wrapper">
            <div class="item-block">
                <img class="item-block__image"
                     src="https://www.games-workshop.com/resources/catalog/product/600x620/60010199037_KT2Group1.jpg"
                     alt="item"/>
                <h4 class="item-block__title">Kill Team: Veteran
                    Guardsmen</h4>
                <div class="item-block__selector">
                    <ul>
                        <li class="active">Стандартное</li>
                        <li class="">Расширенное</li>
                    </ul>
                    <ul>
                        <li class="active">15 см.</li>
                        <li class="">26 см.</li>
                        <li class="">38 см.</li>
                    </ul>
                </div>
                <div class="item-block__bottom">
                    <div class="item-block__price">от 2310 ₽</div>
                    <button class="button button--outline button--add">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                        <span>Добавить</span><i>0</i></button>
                </div>
            </div>
        </div>
        <div class="item-block__wrapper">
            <div class="item-block">
                <img class="item-block__image"
                     src="https://www.games-workshop.com/resources/catalog/product/600x620/99120101177_TriumvirateofthePrimarch06.jpg"
                     alt="item"/>
                <h4 class="item-block__title">Cypher</h4>
                <div class="item-block__selector">
                    <ul>
                        <li class="active">Стандартное</li>
                        <li class="">Расширенное</li>
                    </ul>
                    <ul>
                        <li class="active">15 см.</li>
                        <li class="">26 см.</li>
                        <li class="">38 см.</li>
                    </ul>
                </div>
                <div class="item-block__bottom">
                    <div class="item-block__price">от 5940 ₽</div>
                    <button class="button button--outline button--add">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"></path>
                        </svg>
                        <span>Добавить</span><i>0</i></button>
                </div>
            </div>
        </div>
    </div>
}

export default PizzaBlock