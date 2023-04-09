const PizzaBlock = () => {
    return <main class="main mb-20">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <img
                        src="https://www.games-workshop.com/resources/catalog/product/600x620/60010199037_KT2Group1.jpg"
                        alt="item"/>
                    <h4 class="font-bold text-xl py-4">Kill Team: Veteran
                        Guardsmen</h4>
                    <div class="item-block__selector bg-gray-200 rounded">
                        <ul class="flex text-center py-2">
                            <li class="active flex-auto bg-white mx-2 py-2 rounded">Стандартное</li>
                            <li class="flex-auto mx-2 py-2 rounded">Расширенное</li>
                        </ul>
                        <ul class="flex text-center py-2">
                            <li class="active flex-auto mx-2 py-2 bg-white rounded">15 см.</li>
                            <li class="flex-auto mx-2 py-2 rounded ">26 см.</li>
                            <li class="flex-auto mx-2 py-2 rounded">38 см.</li>
                        </ul>
                    </div>
                    <div class="flex items-center my-4">
                        <div class="flex-auto text-xl font-bold">от 2310 ₽</div>
                        <button class="flex-auto border-4 rounded">
                            <span>Добавить</span>
                            <i class="ml-2">0</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
}

export default PizzaBlock