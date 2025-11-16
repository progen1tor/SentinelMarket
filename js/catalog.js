const goToCartBtn = document.getElementById('cart-lnk');

function goToCartFunc(event) {
    event.preventDefault();

    const prodDict = {
        'ip-cam': [8991, 'IP-камера наружного наблюдения'],
        'alarm-system': [17909, 'Умная сигнализация с модулем GSM-связи'],
        'motion-sensor': [10990, 'Датчик движения для помещений'],
        'video-recorder': [11340, 'Профессиональный Wi-Fi видеодомофон'],
        'electronic-safe': [18399, 'Электронный сейф с кодовым замком'],
        doors: [28105, 'Входные двери повышенной защиты'],
        cables: [7078, 'Кабельная продукция для охранных систем'],
        dashcam: [13690, 'Многофункциональный видеорегистратор'],
        searchlight: [2399, 'Светодиодный прожектор с датчиком'],
        'control-system': [15554, 'Система контоля доступа с карточками'],
        'rotating-cam': [7440, 'Умная PTZ-камера видеонаблюдения'],
        'power-kit': [9855, 'Источник питания для охранных систем'],
    };

    let sum = 0;
    let orderData = '';

    for (const key in prodDict) {
        const price = prodDict[key][0];
        const count = +document.getElementById(key).value;
        if (count) {
            sum += price * count;
            orderData += `${prodDict[key][1]}: ${count} шт.<br class='mobile-br'>`;
        }
    }

    localStorage.setItem('totalSum', sum);  // сохранение суммы в локал хранилище
    localStorage.setItem('orderData', orderData)  // сохранение текста заказа в локал хранилище

    window.location.href = 'cart.html';
}

goToCartBtn.addEventListener('click', goToCartFunc);



// сортировка товаров
const container = document.getElementById('container');  // контейнер со всеми карточками
const containerCopied = document.getElementById('container').innerHTML;  // копия для резета сортировки
const cards = Array.from(container.querySelectorAll('.col'));  // каждая карточка

// кнопки для сортировки
const sortByPriceBtnUp = document.getElementById('sort-by-price-up');
const sortByPriceBtnDown = document.getElementById('sort-by-price-down');
const sortByAlphabet = document.getElementById('sort-by-alphabet');
const resetBtn = document.getElementById('reset-sorting');

// ф-я сортировки по возрастанию
function sortByPriceFuncUp() {
    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price-card-text').textContent.split(':')[1]) * 1000;
        const priceB = parseFloat(b.querySelector('.price-card-text').textContent.split(':')[1]) * 1000;
        return priceA - priceB;
    });

    container.innerHTML = '';

    for (let i = 0; i < cards.length; i += 4) {
        const row = document.createElement('div');
        row.className = 'row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4';
        cards.slice(i, i + 4).forEach((card) => row.appendChild(card));
        container.appendChild(row);
    }
}

// ф-я сортировки по убыванию
function sortByPriceFuncDown() {
    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price-card-text').textContent.split(':')[1]) * 1000;
        const priceB = parseFloat(b.querySelector('.price-card-text').textContent.split(':')[1]) * 1000;
        return priceB - priceA;
    });

    container.innerHTML = '';

    for (let i = 0; i < cards.length; i += 4) {
        const row = document.createElement('div');
        row.className = 'row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4';
        cards.slice(i, i + 4).forEach((card) => row.appendChild(card));
        container.appendChild(row);
    }
}

// ф-я сортировки по алфавиту
function sortByAlphabetFunc() {
    cards.sort((a, b) => {
        const nameA = a.querySelector('.card-title').textContent;
        const nameB = b.querySelector('.card-title').textContent;
        return nameA.localeCompare(nameB);
    });

    container.innerHTML = '';

    for (let i = 0; i < cards.length; i += 4) {
        const row = document.createElement('div');
        row.className ='row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4';
        cards.slice(i, i + 4).forEach((card) => row.appendChild(card));
        container.appendChild(row);
    }
}

// сброс сортировки
function resetSortingFunc() {
    container.innerHTML = containerCopied;
}

sortByPriceBtnUp.addEventListener('click', sortByPriceFuncUp);
sortByPriceBtnDown.addEventListener('click', sortByPriceFuncDown);
sortByAlphabet.addEventListener('click', sortByAlphabetFunc);
resetBtn.addEventListener('click', resetSortingFunc);