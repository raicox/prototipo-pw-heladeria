const iceCreamButton = document.querySelector('.ice-cream__button');
const fruitsButton = document.querySelector('.fruits__button');
const creamButton = document.querySelector('.cream__button');
const toppingButton = document.querySelector('.topping__button');
const dressingButton = document.querySelector('.dressing__button');
const cheeseButton = document.querySelector('.cheese__button');





const mainCarrito = document.querySelector('.main-shopping__ice');
const mainCarritoFruits = document.querySelector('.main-shopping__fruits');
const mainCarritoCream = document.querySelector('.main-shopping__cream');
const mainCarritoTopping = document.querySelector('.main-shopping__topping');
const mainCarritoDressing = document.querySelector('.main-shopping__dressing');
const mainCarritoCheese = document.querySelector('.main-shopping__cheese');




const main = document.querySelector('.main-container');
const mainCloseIce = document.querySelector('.main-close-ice');
const mainCloseFruit = document.querySelector('.main-close-fruits');
const mainCloseCream = document.querySelector('.main-close-cream');
const mainCloseTopping = document.querySelector('.main-close-topping');
const mainCloseDressing = document.querySelector('.main-close-dressing');
const mainCloseCheese = document.querySelector('.main-close-cheese');





iceCreamButton.addEventListener('click', iceCreamClick);
mainCloseIce.addEventListener('click', mainCloseIceClick);

fruitsButton.addEventListener('click', fruitClick);
mainCloseFruit.addEventListener('click', mainCloseFruitClick);

creamButton.addEventListener('click', creamClick);
mainCloseCream.addEventListener('click', mainCloseCreamClick);

toppingButton.addEventListener('click', toppingClick);
mainCloseTopping.addEventListener('click', mainCloseToppingClick);

dressingButton.addEventListener('click', dressingClick);
mainCloseDressing.addEventListener('click', mainCloseDressingClick);

cheeseButton.addEventListener('click', cheeseClick);
mainCloseCheese.addEventListener('click', mainCloseCheeseClick);





function iceCreamClick () {
    mainCarrito.classList.toggle('aparecer-ice');
    main.classList.toggle('tono-oscuro');
    mainCloseIce.classList.toggle('aparecer-ice');
};

function mainCloseIceClick () {
    mainCarrito.classList.toggle('aparecer-ice');
    main.classList.toggle('tono-oscuro');
    mainCloseIce.classList.toggle('aparecer-ice');
};



function fruitClick () {
    mainCarritoFruits.classList.toggle('aparecer-fruit');
    main.classList.toggle('tono-oscuro');
    mainCloseFruit.classList.toggle('aparecer-fruit');
};

function mainCloseFruitClick () {
    mainCarritoFruits.classList.toggle('aparecer-fruit');
    main.classList.toggle('tono-oscuro');
    mainCloseFruit.classList.toggle('aparecer-fruit');
};



function creamClick () {
    mainCarritoCream.classList.toggle('aparecer-cream');
    main.classList.toggle('tono-oscuro');
    mainCloseCream.classList.toggle('aparecer-cream');
};

function mainCloseCreamClick () {
    mainCarritoCream.classList.toggle('aparecer-cream');
    main.classList.toggle('tono-oscuro');
    mainCloseCream.classList.toggle('aparecer-cream');
};



function toppingClick () {
    mainCarritoTopping.classList.toggle('aparecer-topping');
    main.classList.toggle('tono-oscuro');
    mainCloseTopping.classList.toggle('aparecer-topping');
};

function mainCloseToppingClick () {
    mainCarritoTopping.classList.toggle('aparecer-topping');
    main.classList.toggle('tono-oscuro');
    mainCloseTopping.classList.toggle('aparecer-topping');
};


function dressingClick () {
    mainCarritoDressing.classList.toggle('aparecer-dressing');
    main.classList.toggle('tono-oscuro');
    mainCloseDressing.classList.toggle('aparecer-dressing');
};

function mainCloseDressingClick () {
    mainCarritoDressing.classList.toggle('aparecer-dressing');
    main.classList.toggle('tono-oscuro');
    mainCloseDressing.classList.toggle('aparecer-dressing');
};


function cheeseClick () {
    mainCarritoCheese.classList.toggle('aparecer-cheese');
    main.classList.toggle('tono-oscuro');
    mainCloseCheese.classList.toggle('aparecer-cheese');
};

function mainCloseCheeseClick () {
    mainCarritoCheese.classList.toggle('aparecer-cheese');
    main.classList.toggle('tono-oscuro');
    mainCloseCheese.classList.toggle('aparecer-cheese');
};



function parImpar (list) {

    let par = [];
    let impar = [];

    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0 ) {
            par.push(list[i])
        }

        if (!(list[i] % 2 === 0)) {
            impar.push(list[i])
        }
    }
    console.log(`Mi listado es ${list}, los numeros pares son ${par} y los numeros impares son ${impar}`)
}
