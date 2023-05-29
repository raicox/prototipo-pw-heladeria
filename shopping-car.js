/* SECTION ICE CREAM */

const anadirIce1 = document.querySelector('.anadir1-ice');
const eliminarIce1 = document.querySelector('.eliminar1-ice');
const anadir2 = document.querySelector('.anadir2-ice');
const eliminar2 = document.querySelector('.eliminar2-ice');
const anadir3 = document.querySelector('.anadir3-ice');
const eliminar3 = document.querySelector('.eliminar3-ice');
const anadir4 = document.querySelector('.anadir4-ice');
const eliminar4 = document.querySelector('.eliminar4-ice');
const anadir5 = document.querySelector('.anadir5-ice');
const eliminar5 = document.querySelector('.eliminar5-ice');


anadirIce1.addEventListener('click', sumaAnadir1);
eliminarIce1.addEventListener('click', restarAnadir1);

anadir2.addEventListener('click', sumaAnadir2);
eliminar2.addEventListener('click', restarAnadir2);

anadir3.addEventListener('click', sumaAnadir3);
eliminar3.addEventListener('click', restarAnadir3);

anadir4.addEventListener('click', sumaAnadir4);
eliminar4.addEventListener('click', restarAnadir4);

anadir5.addEventListener('click', sumaAnadir5);
eliminar5.addEventListener('click', restarAnadir5);

let totalCantidad1 = document.querySelector('.cantidad1-ice');
let totalprecio1 = document.querySelector('.precio1-ice');

let totalCantidad2 = document.querySelector('.cantidad2-ice');
let totalprecio2 = document.querySelector('.precio2-ice');

let totalCantidad3 = document.querySelector('.cantidad3-ice');
let totalprecio3 = document.querySelector('.precio3-ice');

let totalCantidad4 = document.querySelector('.cantidad4-ice');
let totalprecio4 = document.querySelector('.precio4-ice');

let totalCantidad5 = document.querySelector('.cantidad5-ice');
let totalprecio5 = document.querySelector('.precio5-ice');

let cantidad1 = 0;
let precio1 = 0;

let cantidad2 = 0;
let precio2 = 0;

let cantidad3 = 0;
let precio3 = 0;

let cantidad4 = 0;
let precio4 = 0;

let cantidad5 = 0;
let precio5 = 0;


let totalUnidad = document.querySelector('.total-unidad-ice');
let totalValor = document.querySelector('.total-valor-ice');

let globalSC = document.querySelector('.fruit-salad__global-car-img-marker-span');

let movement = document.querySelector('.fruit-salad__global-car-img-marker-span');



function sumaAnadir1 () {
    cantidad1 = cantidad1 + 1;
    precio1 = precio1 + 2000;
    totalCantidad1.innerHTML = cantidad1;
    totalprecio1.innerHTML = precio1;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');

}

function restarAnadir1 () {
    cantidad1 = 0;
    precio1 = 0;
    totalCantidad1.innerHTML = cantidad1;
    totalprecio1.innerHTML = precio1;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function sumaAnadir2 () {
    cantidad2 = cantidad2 + 1;
    precio2 = precio2 + 2000;
    totalCantidad2.innerHTML = cantidad2;
    totalprecio2.innerHTML = precio2;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function restarAnadir2 () {
    cantidad2 = 0;
    precio2 = 0;
    totalCantidad2.innerHTML = cantidad2;
    totalprecio2.innerHTML = precio2;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5; 
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function sumaAnadir3 () {
    cantidad3 = cantidad3 + 1;
    precio3 = precio3 + 2000;
    totalCantidad3.innerHTML = cantidad3;
    totalprecio3.innerHTML = precio3;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function restarAnadir3 () {
    cantidad3 = 0;
    precio3 = 0;
    totalCantidad3.innerHTML = cantidad3;
    totalprecio3.innerHTML = precio3;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function sumaAnadir4 () {
    cantidad4 = cantidad4 + 1;
    precio4 = precio4 + 2000;
    totalCantidad4.innerHTML = cantidad4;
    totalprecio4.innerHTML = precio4;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function restarAnadir4 () {
    cantidad4 = 0;
    precio4 = 0;
    totalCantidad4.innerHTML = cantidad4;
    totalprecio4.innerHTML = precio4;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function sumaAnadir5 () {
    cantidad5 = cantidad5 + 1;
    precio5 = precio5 + 2000;
    totalCantidad5.innerHTML = cantidad5;
    totalprecio5.innerHTML = precio5;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;


    globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function restarAnadir5 () {
    cantidad5 = 0;
    precio5 = 0;
    totalCantidad5.innerHTML = cantidad5;
    totalprecio5.innerHTML = precio5;
    totalUnidad.innerHTML = cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5;
    totalValor.innerHTML = precio1 + precio2 + precio3 + precio4 + precio5;

   globalSC.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



/* SECTION FRUIT */


const anadirFruit1 = document.querySelector('.anadir1-fruits');
const eliminarFruit1 = document.querySelector('.eliminar1-fruits');

const anadirFruit2 = document.querySelector('.anadir2-fruits');
const eliminarFruit2 = document.querySelector('.eliminar2-fruits');

const anadirFruit3 = document.querySelector('.anadir3-fruits');
const eliminarFruit3 = document.querySelector('.eliminar3-fruits');

const anadirFruit4 = document.querySelector('.anadir4-fruits');
const eliminarFruit4 = document.querySelector('.eliminar4-fruits');

const anadirFruit5 = document.querySelector('.anadir5-fruits');
const eliminarFruit5 = document.querySelector('.eliminar5-fruits');



anadirFruit1.addEventListener('click', anadirFruitSuma1);
eliminarFruit1.addEventListener('click', elminiarFruitResta1);

anadirFruit2.addEventListener('click', anadirFruitSuma2);
eliminarFruit2.addEventListener('click', elminiarFruitResta2);

anadirFruit3.addEventListener('click', anadirFruitSuma3);
eliminarFruit3.addEventListener('click', elminiarFruitResta3);

anadirFruit4.addEventListener('click', anadirFruitSuma4);
eliminarFruit4.addEventListener('click', elminiarFruitResta4);

anadirFruit5.addEventListener('click', anadirFruitSuma5);
eliminarFruit5.addEventListener('click', elminiarFruitResta5);



let cantidadSpanFruit1 = document.querySelector('.cantidad1-fruits');
let precioSpanFruit1 = document.querySelector('.precio1-fruits');

let cantidadSpanFruit2 = document.querySelector('.cantidad2-fruits');
let precioSpanFruit2 = document.querySelector('.precio2-fruits')

let cantidadSpanFruit3 = document.querySelector('.cantidad3-fruits');
let precioSpanFruit3 = document.querySelector('.precio3-fruits');

let cantidadSpanFruit4 = document.querySelector('.cantidad4-fruits');
let precioSpanFruit4 = document.querySelector('.precio4-fruits');

let cantidadSpanFruit5 = document.querySelector('.cantidad5-fruits');
let precioSpanFruit5 = document.querySelector('.precio5-fruits');



let sumaCantidadFruit1 = 0;
let sumaPrecioFruit1 = 0;

let sumaCantidadFruit2 = 0;
let sumaPrecioFruit2 = 0;

let sumaCantidadFruit3 = 0;
let sumaPrecioFruit3 = 0;

let sumaCantidadFruit4 = 0;
let sumaPrecioFruit4 = 0;

let sumaCantidadFruit5 = 0;
let sumaPrecioFruit5 = 0;


let cantidadTotalFruits = document.querySelector('.total-unidad-fruits');

let valorTotalFruits = document.querySelector('.total-valor-fruits');

let globalSCa = document.querySelector('.fruit-salad__global-car-img-marker-span');



function anadirFruitSuma1 () {
    sumaCantidadFruit1 = sumaCantidadFruit1 + 1;
    cantidadSpanFruit1.innerHTML = sumaCantidadFruit1;

    sumaPrecioFruit1 = sumaPrecioFruit1 + 2500;
    precioSpanFruit1.innerHTML = sumaPrecioFruit1;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5; 

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function elminiarFruitResta1 () {
    sumaCantidadFruit1 = 0;
    cantidadSpanFruit1.innerHTML = sumaCantidadFruit1;

    sumaPrecioFruit1 = 0;
    precioSpanFruit1.innerHTML = sumaPrecioFruit1;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5;

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
   
}



function anadirFruitSuma2 () {
    sumaCantidadFruit2 = sumaCantidadFruit2 + 1;
    cantidadSpanFruit2.innerHTML = sumaCantidadFruit2;

    sumaPrecioFruit2 = sumaPrecioFruit2 + 2500;
    precioSpanFruit2.innerHTML = sumaPrecioFruit2;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5; 

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5; 

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function elminiarFruitResta2 () {
    sumaCantidadFruit2 = 0;
    cantidadSpanFruit2.innerHTML = sumaCantidadFruit2;

    sumaPrecioFruit2 = 0;
    precioSpanFruit2.innerHTML = sumaPrecioFruit2;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5;

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirFruitSuma3 () {
    sumaCantidadFruit3 = sumaCantidadFruit3 + 1;
    cantidadSpanFruit3.innerHTML = sumaCantidadFruit3;

    sumaPrecioFruit3 = sumaPrecioFruit3 + 2500;
    precioSpanFruit3.innerHTML = sumaPrecioFruit3;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5; 

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function elminiarFruitResta3 () {
    sumaCantidadFruit3 = 0;
    cantidadSpanFruit3.innerHTML = sumaCantidadFruit3;

    sumaPrecioFruit3 = 0;
    precioSpanFruit3.innerHTML = sumaPrecioFruit3;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5;

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirFruitSuma4 () {
    sumaCantidadFruit4 = sumaCantidadFruit4 + 1;
    cantidadSpanFruit4.innerHTML = sumaCantidadFruit4;

    sumaPrecioFruit4 = sumaPrecioFruit4 + 2500;
    precioSpanFruit4.innerHTML = sumaPrecioFruit4;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5; 

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function elminiarFruitResta4 () {
    sumaCantidadFruit4 = 0;
    cantidadSpanFruit4.innerHTML = sumaCantidadFruit4;

    sumaPrecioFruit4 = 0;
    precioSpanFruit4.innerHTML = sumaPrecioFruit4;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5;

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirFruitSuma5 () {
    sumaCantidadFruit5 = sumaCantidadFruit5 + 1;
    cantidadSpanFruit5.innerHTML = sumaCantidadFruit5;

    sumaPrecioFruit5 = sumaPrecioFruit5 + 2500;
    precioSpanFruit5.innerHTML = sumaPrecioFruit5;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5; 

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function elminiarFruitResta5 () {
    sumaCantidadFruit5 = 0;
    cantidadSpanFruit5.innerHTML = sumaCantidadFruit5;

    sumaPrecioFruit5 = 0;
    precioSpanFruit5.innerHTML = sumaPrecioFruit5;

    cantidadTotalFruits.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5;;

    valorTotalFruits.innerHTML = sumaPrecioFruit1 + sumaPrecioFruit2 + sumaPrecioFruit3 + sumaPrecioFruit4 + sumaPrecioFruit5;

    globalSCa.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}




/* SECTION CREAM */

const anadirCream1 = document.querySelector('.anadir1-cream');
const eliminarCream1 = document.querySelector('.eliminar1-cream');

const anadirCream2 = document.querySelector('.anadir2-cream');
const eliminarCream2 = document.querySelector('.eliminar2-cream');

const anadirCream3 = document.querySelector('.anadir3-cream');
const eliminarCream3 = document.querySelector('.eliminar3-cream');

const anadirCream4 = document.querySelector('.anadir4-cream');
const eliminarCream4 = document.querySelector('.eliminar4-cream');

const anadirCream5 = document.querySelector('.anadir5-cream');
const eliminarCream5 = document.querySelector('.eliminar5-cream');




anadirCream1.addEventListener('click', anadirCreamSuma1);
eliminarCream1.addEventListener('click', eliminarCreamResta1);

anadirCream2.addEventListener('click', anadirCreamSuma2);
eliminarCream2.addEventListener('click', eliminarCreamResta2);

anadirCream3.addEventListener('click', anadirCreamSuma3);
eliminarCream3.addEventListener('click', eliminarCreamResta3);

anadirCream4.addEventListener('click', anadirCreamSuma4);
eliminarCream4.addEventListener('click', eliminarCreamResta4);

anadirCream5.addEventListener('click', anadirCreamSuma5);
eliminarCream5.addEventListener('click', eliminarCreamResta5);





let cantidadSpanCream1 = document.querySelector('.cantidad1-cream');
let precioSpanCream1 = document.querySelector('.precio1-cream');

let cantidadSpanCream2 = document.querySelector('.cantidad2-cream');
let precioSpanCream2 = document.querySelector('.precio2-cream');

let cantidadSpanCream3 = document.querySelector('.cantidad3-cream');
let precioSpanCream3 = document.querySelector('.precio3-cream');

let cantidadSpanCream4 = document.querySelector('.cantidad4-cream');
let precioSpanCream4 = document.querySelector('.precio4-cream');

let cantidadSpanCream5 = document.querySelector('.cantidad5-cream');
let precioSpanCream5 = document.querySelector('.precio5-cream');



let sumaCantidadCream1 = 0;
let sumaPrecioCream1 = 0;

let sumaCantidadCream2 = 0;
let sumaPrecioCream2 = 0;

let sumaCantidadCream3 = 0;
let sumaPrecioCream3 = 0

let sumaCantidadCream4 = 0;
let sumaPrecioCream4 = 0

let sumaCantidadCream5 = 0;
let sumaPrecioCream5 = 0


let cantidadTotalCream = document.querySelector('.total-unidad-cream');

let valorTotalCream = document.querySelector('.total-valor-cream');

let globalSCar = document.querySelector('.fruit-salad__global-car-img-marker-span');



function anadirCreamSuma1 () {
    sumaCantidadCream1 = sumaCantidadCream1 + 1;
    cantidadSpanCream1.innerHTML = sumaCantidadCream1;

    sumaPrecioCream1 = sumaPrecioCream1 + 2500;
    precioSpanCream1.innerHTML = sumaPrecioCream1;

    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');

}

function eliminarCreamResta1 () {
    sumaCantidadCream1 = 0;
    cantidadSpanCream1.innerHTML = sumaCantidadCream1;

    sumaPrecioCream1 = 0;
    precioSpanCream1.innerHTML = sumaPrecioCream1;

    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirCreamSuma2 () {
    sumaCantidadCream2 = sumaCantidadCream2 + 1;
    cantidadSpanCream2.innerHTML = sumaCantidadCream2;

    sumaPrecioCream2 = sumaPrecioCream2 + 2500;
    precioSpanCream2.innerHTML = sumaPrecioCream2;

    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function eliminarCreamResta2 () {
    sumaCantidadCream2 = 0;
    cantidadSpanCream2.innerHTML = sumaCantidadCream2;

    sumaPrecioCream2 = 0;
    precioSpanCream2.innerHTML = sumaPrecioCream2;
    
    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirCreamSuma3 () {
    sumaCantidadCream3 = sumaCantidadCream3 + 1;
    cantidadSpanCream3.innerHTML = sumaCantidadCream3;

    sumaPrecioCream3 = sumaPrecioCream3 + 2000;
    precioSpanCream3.innerHTML = sumaPrecioCream3;

    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function eliminarCreamResta3 () {
    sumaCantidadCream3 = 0;
    cantidadSpanCream3.innerHTML = sumaCantidadCream3;

    sumaPrecioCream3 = 0;
    precioSpanCream3.innerHTML = sumaPrecioCream3; 
    
    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirCreamSuma4 () {
    sumaCantidadCream4 = sumaCantidadCream4 + 1;
    cantidadSpanCream4.innerHTML = sumaCantidadCream4;

    sumaPrecioCream4 = sumaPrecioCream4 + 3000;
    precioSpanCream4.innerHTML = sumaPrecioCream4;

    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function eliminarCreamResta4 () {
    sumaCantidadCream4 = 0;
    cantidadSpanCream4.innerHTML = sumaCantidadCream4;

    sumaPrecioCream4 = 0;
    precioSpanCream4.innerHTML = sumaPrecioCream4; 
    
    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirCreamSuma5 () {
    sumaCantidadCream5 = sumaCantidadCream5 + 1;
    cantidadSpanCream5.innerHTML = sumaCantidadCream5;

    sumaPrecioCream5 = sumaPrecioCream5 + 2500;
    precioSpanCream5.innerHTML = sumaPrecioCream5;

    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function eliminarCreamResta5 () {
    sumaCantidadCream5 = 0;
    cantidadSpanCream5.innerHTML = sumaCantidadCream5;

    sumaPrecioCream5 = 0;
    precioSpanCream5.innerHTML = sumaPrecioCream5;  
    
    cantidadTotalCream.innerHTML = sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5;

    valorTotalCream.innerHTML = sumaPrecioCream1 + sumaPrecioCream2 + sumaPrecioCream3 + sumaPrecioCream4 + sumaPrecioCream5;

    globalSCar.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}


/* SECTION TOPPING */

const anadirTopping1 = document.querySelector('.anadir1-topping');
const eliminarTopping1 = document.querySelector('.eliminar1-topping');

const anadirTopping2 = document.querySelector('.anadir2-topping');
const eliminarTopping2 = document.querySelector('.eliminar2-topping');

const anadirTopping3 = document.querySelector('.anadir3-topping');
const eliminarTopping3 = document.querySelector('.eliminar3-topping');

const anadirTopping4 = document.querySelector('.anadir4-topping');
const eliminarTopping4 = document.querySelector('.eliminar4-topping');

const anadirTopping5 = document.querySelector('.anadir5-topping');
const eliminarTopping5 = document.querySelector('.eliminar5-topping');



anadirTopping1.addEventListener('click', anadirToppingSuma1);
eliminarTopping1.addEventListener('click', eliminarToppingResta1);

anadirTopping2.addEventListener('click', anadirToppingSuma2);
eliminarTopping2.addEventListener('click', eliminarToppingResta2);

anadirTopping3.addEventListener('click', anadirToppingSuma3);
eliminarTopping3.addEventListener('click', eliminarToppingResta3);

anadirTopping4.addEventListener('click', anadirToppingSuma4);
eliminarTopping4.addEventListener('click', eliminarToppingResta4);

anadirTopping5.addEventListener('click', anadirToppingSuma5);
eliminarTopping5.addEventListener('click', eliminarToppingResta5);



let cantidadSpanTopping1 = document.querySelector('.cantidad1-topping');
let precioSpanTopping1 = document.querySelector('.precio1-topping');

let cantidadSpanTopping2 = document.querySelector('.cantidad2-topping');
let precioSpanTopping2 = document.querySelector('.precio2-topping');

let cantidadSpanTopping3 = document.querySelector('.cantidad3-topping');
let precioSpanTopping3 = document.querySelector('.precio3-topping');

let cantidadSpanTopping4 = document.querySelector('.cantidad4-topping');
let precioSpanTopping4 = document.querySelector('.precio4-topping');

let cantidadSpanTopping5 = document.querySelector('.cantidad5-topping');
let precioSpanTopping5 = document.querySelector('.precio5-topping');


let sumaCantidadTopping1 = 0;
let sumaPrecioTopping1 = 0;

let sumaCantidadTopping2 = 0;
let sumaPrecioTopping2 = 0;

let sumaCantidadTopping3 = 0;
let sumaPrecioTopping3 = 0

let sumaCantidadTopping4 = 0;
let sumaPrecioTopping4 = 0

let sumaCantidadTopping5 = 0;
let sumaPrecioTopping5 = 0



let cantidadTotalTopping = document.querySelector('.total-unidad-topping');

let valorTotalTopping = document.querySelector('.total-valor-topping');

let globalSCarr = document.querySelector('.fruit-salad__global-car-img-marker-span');



function anadirToppingSuma1 () {
    sumaCantidadTopping1 = sumaCantidadTopping1 + 1;
    cantidadSpanTopping1.innerHTML = sumaCantidadTopping1;

    sumaPrecioTopping1 = sumaPrecioTopping1 + 2500;
    precioSpanTopping1.innerHTML = sumaPrecioTopping1;

    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;
    

    movement.classList.add('movement');

}

function eliminarToppingResta1 () {
    sumaCantidadTopping1 = 0;
    cantidadSpanTopping1.innerHTML = sumaCantidadTopping1;

    sumaPrecioTopping1 = 0;
    precioSpanTopping1.innerHTML = sumaPrecioTopping1;

    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}


function anadirToppingSuma2 () {
    sumaCantidadTopping2 = sumaCantidadTopping2 + 1;
    cantidadSpanTopping2.innerHTML = sumaCantidadTopping2;

    sumaPrecioTopping2 = sumaPrecioTopping2 + 2500;
    precioSpanTopping2.innerHTML = sumaPrecioTopping2;

    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function eliminarToppingResta2 () {
    sumaCantidadTopping2 = 0;
    cantidadSpanTopping2.innerHTML = sumaCantidadTopping2;

    sumaPrecioTopping2 = 0;
    precioSpanTopping2.innerHTML = sumaPrecioTopping2;
    
    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirToppingSuma3 () {
    sumaCantidadTopping3 = sumaCantidadTopping3 + 1;
    cantidadSpanTopping3.innerHTML = sumaCantidadTopping3;

    sumaPrecioTopping3 = sumaPrecioTopping3 + 2500;
    precioSpanTopping3.innerHTML = sumaPrecioTopping3;

    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;


    movement.classList.add('movement');
}

function eliminarToppingResta3 () {
    sumaCantidadTopping3 = 0;
    cantidadSpanTopping3.innerHTML = sumaCantidadTopping3;

    sumaPrecioTopping3 = 0;
    precioSpanTopping3.innerHTML = sumaPrecioTopping3;
    
    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}


function anadirToppingSuma4 () {
    sumaCantidadTopping4 = sumaCantidadTopping4 + 1;
    cantidadSpanTopping4.innerHTML = sumaCantidadTopping4;

    sumaPrecioTopping4 = sumaPrecioTopping4 + 2500;
    precioSpanTopping4.innerHTML = sumaPrecioTopping4;

    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;


    movement.classList.add('movement');
}

function eliminarToppingResta4 () {
    sumaCantidadTopping4 = 0;
    cantidadSpanTopping4.innerHTML = sumaCantidadTopping4;

    sumaPrecioTopping4 = 0;
    precioSpanTopping4.innerHTML = sumaPrecioTopping4;
    
    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5; 

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}


function anadirToppingSuma5 () {
    sumaCantidadTopping5 = sumaCantidadTopping5 + 1;
    cantidadSpanTopping5.innerHTML = sumaCantidadTopping5;

    sumaPrecioTopping5 = sumaPrecioTopping5 + 2500;
    precioSpanTopping5.innerHTML = sumaPrecioTopping5;

    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;


    movement.classList.add('movement');
}

function eliminarToppingResta5 () {
    sumaCantidadTopping5 = 0;
    cantidadSpanTopping5.innerHTML = sumaCantidadTopping5;

    sumaPrecioTopping5 = 0;
    precioSpanTopping5.innerHTML = sumaPrecioTopping5;
    
    cantidadTotalTopping.innerHTML = sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5;

    valorTotalTopping.innerHTML = sumaPrecioTopping1 + sumaPrecioTopping2 + sumaPrecioTopping3 + sumaPrecioTopping4 + sumaPrecioTopping5;

    globalSCarr.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



/* SECTION DRESSING */

const anadirDressing1 = document.querySelector('.anadir1-dressing');
const eliminarDressing1 = document.querySelector('.eliminar1-dressing');

const anadirDressing2 = document.querySelector('.anadir2-dressing');
const eliminarDressing2 = document.querySelector('.eliminar2-dressing');

const anadirDressing3 = document.querySelector('.anadir3-dressing');
const eliminarDressing3 = document.querySelector('.eliminar3-dressing');

const anadirDressing4 = document.querySelector('.anadir4-dressing');
const eliminarDressing4 = document.querySelector('.eliminar4-dressing');

const anadirDressing5 = document.querySelector('.anadir5-dressing');
const eliminarDressing5 = document.querySelector('.eliminar5-dressing');


anadirDressing1.addEventListener('click', anadirDressingSuma1);
eliminarDressing1.addEventListener('click', eliminarDressingResta1);

anadirDressing2.addEventListener('click', anadirDressingSuma2);
eliminarDressing2.addEventListener('click', eliminarDressingResta2);

anadirDressing3.addEventListener('click', anadirDressingSuma3);
eliminarDressing3.addEventListener('click', eliminarDressingResta3);

anadirDressing4.addEventListener('click', anadirDressingSuma4);
eliminarDressing4.addEventListener('click', eliminarDressingResta4);

anadirDressing5.addEventListener('click', anadirDressingSuma5);
eliminarDressing5.addEventListener('click', eliminarDressingResta5);


let cantidadSpanDressing1 = document.querySelector('.cantidad1-dressing');
let precioSpanDressing1 = document.querySelector('.precio1-dressing');

let cantidadSpanDressing2 = document.querySelector('.cantidad2-dressing');
let precioSpanDressing2 = document.querySelector('.precio2-dressing');

let cantidadSpanDressing3 = document.querySelector('.cantidad3-dressing');
let precioSpanDressing3 = document.querySelector('.precio3-dressing');

let cantidadSpanDressing4 = document.querySelector('.cantidad4-dressing');
let precioSpanDressing4 = document.querySelector('.precio4-dressing');

let cantidadSpanDressing5 = document.querySelector('.cantidad5-dressing');
let precioSpanDressing5 = document.querySelector('.precio5-dressing');


let sumaCantidadDressing1 = 0;
let sumaPrecioDressing1 = 0;

let sumaCantidadDressing2 = 0;
let sumaPrecioDressing2 = 0;

let sumaCantidadDressing3 = 0;
let sumaPrecioDressing3 = 0

let sumaCantidadDressing4 = 0;
let sumaPrecioDressing4 = 0

let sumaCantidadDressing5 = 0;
let sumaPrecioDressing5 = 0


let cantidadTotalDressing = document.querySelector('.total-unidad-dressing');

let valorTotalDressing = document.querySelector('.total-valor-dressing');

let globalSCarro = document.querySelector('.fruit-salad__global-car-img-marker-span');



function anadirDressingSuma1 () {
    sumaCantidadDressing1 = sumaCantidadDressing1 + 1;
    cantidadSpanDressing1.innerHTML = sumaCantidadDressing1;

    sumaPrecioDressing1 = sumaPrecioDressing1 + 2500;
    precioSpanDressing1.innerHTML = sumaPrecioDressing1;

    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;
    

    movement.classList.add('movement');

}

function eliminarDressingResta1 () {
    sumaCantidadDressing1 = 0;
    cantidadSpanDressing1.innerHTML = sumaCantidadDressing1;

    sumaPrecioDressing1 = 0;
    precioSpanDressing1.innerHTML = sumaPrecioDressing1;

    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}


function anadirDressingSuma2 () {
    sumaCantidadDressing2 = sumaCantidadDressing2 + 1;
    cantidadSpanDressing2.innerHTML = sumaCantidadDressing2;

    sumaPrecioDressing2 = sumaPrecioDressing2 + 2500;
    precioSpanDressing2.innerHTML = sumaPrecioDressing2;

    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function eliminarDressingResta2 () {
    sumaCantidadDressing2 = 0;
    cantidadSpanDressing2.innerHTML = sumaCantidadDressing2;

    sumaPrecioDressing2 = 0;
    precioSpanDressing2.innerHTML = sumaPrecioDressing2;
    
    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



function anadirDressingSuma3 () {
    sumaCantidadDressing3 = sumaCantidadDressing3 + 1;
    cantidadSpanDressing3.innerHTML = sumaCantidadDressing3;

    sumaPrecioDressing3 = sumaPrecioDressing3 + 2500;
    precioSpanDressing3.innerHTML = sumaPrecioDressing3;

    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;


    movement.classList.add('movement');
}

function eliminarDressingResta3 () {
    sumaCantidadDressing3 = 0;
    cantidadSpanDressing3.innerHTML = sumaCantidadDressing3;

    sumaPrecioDressing3 = 0;
    precioSpanDressing3.innerHTML = sumaPrecioDressing3;
    
    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}


function anadirDressingSuma4 () {
    sumaCantidadDressing4 = sumaCantidadDressing4 + 1;
    cantidadSpanDressing4.innerHTML = sumaCantidadDressing4;

    sumaPrecioDressing4 = sumaPrecioDressing4 + 2500;
    precioSpanDressing4.innerHTML = sumaPrecioDressing4;

    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;


    movement.classList.add('movement');
}

function eliminarDressingResta4 () {
    sumaCantidadDressing4 = 0;
    cantidadSpanDressing4.innerHTML = sumaCantidadDressing4;

    sumaPrecioDressing4 = 0;
    precioSpanDressing4.innerHTML = sumaPrecioDressing4;
    
    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}


function anadirDressingSuma5 () {
    sumaCantidadDressing5 = sumaCantidadDressing5 + 1;
    cantidadSpanDressing5.innerHTML = sumaCantidadDressing5;

    sumaPrecioDressing5 = sumaPrecioDressing5 + 2500;
    precioSpanDressing5.innerHTML = sumaPrecioDressing5;

    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;


    movement.classList.add('movement');
}

function eliminarDressingResta5 () {
    sumaCantidadDressing5 = 0;
    cantidadSpanDressing5.innerHTML = sumaCantidadDressing5;

    sumaPrecioDressing5 = 0;
    precioSpanDressing5.innerHTML = sumaPrecioDressing5;
    
    cantidadTotalDressing.innerHTML = sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5;

    valorTotalDressing.innerHTML = sumaPrecioDressing1 + sumaPrecioDressing2 + sumaPrecioDressing3 + sumaPrecioDressing4 + sumaPrecioDressing5;

    globalSCarro.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}



/* SECTION CHEESE */

const anadirCheese1 = document.querySelector('.anadir1-cheese');
const eliminarCheese1 = document.querySelector('.eliminar1-cheese');

const anadirCheese2 = document.querySelector('.anadir2-cheese');
const eliminarCheese2 = document.querySelector('.eliminar2-cheese');

const anadirCheese3 = document.querySelector('.anadir3-cheese');
const eliminarCheese3 = document.querySelector('.eliminar3-cheese');

const anadirCheese4 = document.querySelector('.anadir4-cheese');
const eliminarCheese4 = document.querySelector('.eliminar4-cheese');

const anadirCheese5 = document.querySelector('.anadir5-cheese');
const eliminarCheese5 = document.querySelector('.eliminar5-cheese');


anadirCheese1.addEventListener('click', anadirCheeseSuma1);
eliminarCheese1.addEventListener('click', eliminarCheeseResta1);

anadirCheese2.addEventListener('click', anadirCheeseSuma2);
eliminarCheese2.addEventListener('click', eliminarCheeseResta2);

anadirCheese3.addEventListener('click', anadirCheeseSuma3);
eliminarCheese3.addEventListener('click', eliminarCheeseResta3);

anadirCheese4.addEventListener('click', anadirCheeseSuma4);
eliminarCheese4.addEventListener('click', eliminarCheeseResta4);

anadirCheese5.addEventListener('click', anadirCheeseSuma5);
eliminarCheese5.addEventListener('click', eliminarCheeseResta5);


let cantidadSpanCheese1 = document.querySelector('.cantidad1-cheese');
let precioSpanCheese1 = document.querySelector('.precio1-cheese');

let cantidadSpanCheese2 = document.querySelector('.cantidad2-cheese');
let precioSpanCheese2 = document.querySelector('.precio2-cheese');

let cantidadSpanCheese3 = document.querySelector('.cantidad3-cheese');
let precioSpanCheese3 = document.querySelector('.precio3-cheese');

let cantidadSpanCheese4 = document.querySelector('.cantidad4-cheese');
let precioSpanCheese4 = document.querySelector('.precio4-cheese');

let cantidadSpanCheese5 = document.querySelector('.cantidad5-cheese');
let precioSpanCheese5 = document.querySelector('.precio5-cheese');


let sumaCantidadCheese1 = 0;
let sumaPrecioCheese1 = 0;

let sumaCantidadCheese2 = 0;
let sumaPrecioCheese2 = 0;

let sumaCantidadCheese3 = 0;
let sumaPrecioCheese3 = 0

let sumaCantidadCheese4 = 0;
let sumaPrecioCheese4 = 0

let sumaCantidadCheese5 = 0;
let sumaPrecioCheese5 = 0;


let cantidadTotalCheese = document.querySelector('.total-unidad-cheese');

let valorTotalCheese = document.querySelector('.total-valor-cheese');

let globalSCarroS = document.querySelector('.fruit-salad__global-car-img-marker-span');


function anadirCheeseSuma1 () {
    sumaCantidadCheese1 = sumaCantidadCheese1 + 1;
    cantidadSpanCheese1.innerHTML = sumaCantidadCheese1;

    sumaPrecioCheese1 = sumaPrecioCheese1 + 2500;
    precioSpanCheese1.innerHTML = sumaPrecioCheese1;

    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;


    movement.classList.add('movement');

}

function eliminarCheeseResta1 () {
    sumaCantidadCheese1 = 0;
    cantidadSpanCheese1.innerHTML = sumaCantidadCheese1;

    sumaPrecioCheese1 = 0;
    precioSpanCheese1.innerHTML = sumaPrecioCheese1;

    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }

}


function anadirCheeseSuma2 () {
    sumaCantidadCheese2 = sumaCantidadCheese2 + 1;
    cantidadSpanCheese2.innerHTML = sumaCantidadCheese2;

    sumaPrecioCheese2 = sumaPrecioCheese2 + 3000;
    precioSpanCheese2.innerHTML = sumaPrecioCheese2;

    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

  
    movement.classList.add('movement');
}

function eliminarCheeseResta2 () {
    sumaCantidadCheese2 = 0;
    cantidadSpanCheese2.innerHTML = sumaCantidadCheese2;

    sumaPrecioCheese2 = 0;
    precioSpanCheese2.innerHTML = sumaPrecioCheese2;
    
    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
 
}



function anadirCheeseSuma3 () {
    sumaCantidadCheese3 = sumaCantidadCheese3 + 1;
    cantidadSpanCheese3.innerHTML = sumaCantidadCheese3;

    sumaPrecioCheese3 = sumaPrecioCheese3 + 4000;
    precioSpanCheese3.innerHTML = sumaPrecioCheese3;

    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function eliminarCheeseResta3 () {
    sumaCantidadCheese3 = 0;
    cantidadSpanCheese3.innerHTML = sumaCantidadCheese3;

    sumaPrecioCheese3 = 0;
    precioSpanCheese3.innerHTML = sumaPrecioCheese3;
    
    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
  
}


function anadirCheeseSuma4 () {
    sumaCantidadCheese4 = sumaCantidadCheese4 + 1;
    cantidadSpanCheese4.innerHTML = sumaCantidadCheese4;

    sumaPrecioCheese4 = sumaPrecioCheese4 + 4000;
    precioSpanCheese4.innerHTML = sumaPrecioCheese4;

    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');
}

function eliminarCheeseResta4 () {
    sumaCantidadCheese4 = 0;
    cantidadSpanCheese4.innerHTML = sumaCantidadCheese4;

    sumaPrecioCheese4 = 0;
    precioSpanCheese4.innerHTML = sumaPrecioCheese4;
    
    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
}


function anadirCheeseSuma5 () {
    sumaCantidadCheese5 = sumaCantidadCheese5 + 1;
    cantidadSpanCheese5.innerHTML = sumaCantidadCheese5;

    sumaPrecioCheese5 = sumaPrecioCheese5 + 4500;
    precioSpanCheese5.innerHTML = sumaPrecioCheese5;

    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    movement.classList.add('movement');

    

}

function eliminarCheeseResta5 () {
    sumaCantidadCheese5 = 0;
    cantidadSpanCheese5.innerHTML = sumaCantidadCheese5;

    sumaPrecioCheese5 = 0;
    precioSpanCheese5.innerHTML = sumaPrecioCheese5;
    
    cantidadTotalCheese.innerHTML = sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    valorTotalCheese.innerHTML = sumaPrecioCheese1 + sumaPrecioCheese2 + sumaPrecioCheese3 + sumaPrecioCheese4 + sumaPrecioCheese5;

    globalSCarroS.innerHTML = sumaCantidadFruit1 + sumaCantidadFruit2 + sumaCantidadFruit3 + sumaCantidadFruit4 + sumaCantidadFruit5 + cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + sumaCantidadCream1 + sumaCantidadCream2 + sumaCantidadCream3 + sumaCantidadCream4 + sumaCantidadCream5 + sumaCantidadTopping1 + sumaCantidadTopping2 + sumaCantidadTopping3 + sumaCantidadTopping4 + sumaCantidadTopping5 + sumaCantidadDressing1 + sumaCantidadDressing2 + sumaCantidadDressing3 + sumaCantidadDressing4 + sumaCantidadDressing5 + sumaCantidadCheese1 + sumaCantidadCheese2 + sumaCantidadCheese3 + sumaCantidadCheese4 + sumaCantidadCheese5;

    if (cantidad1 === 0 && cantidad2 === 0 && cantidad3 === 0 && cantidad4 === 0 && cantidad5 === 0 && sumaCantidadFruit1 === 0 && sumaCantidadFruit2 === 0 && sumaCantidadFruit3 === 0 && sumaCantidadFruit4 === 0 && sumaCantidadFruit5 === 0 && sumaCantidadCream1 === 0 && sumaCantidadCream2 === 0 && sumaCantidadCream3 === 0 && sumaCantidadCream4 === 0 && sumaCantidadCream5 === 0 && sumaPrecioTopping1 === 0 && sumaPrecioTopping2 === 0 && sumaPrecioTopping3 === 0 && sumaPrecioTopping4 === 0 && sumaPrecioTopping5 === 0 && sumaCantidadDressing1 === 0 && sumaCantidadDressing2 === 0 && sumaCantidadDressing3 === 0 && sumaCantidadDressing4 === 0 && sumaCantidadDressing5 === 0 && sumaCantidadCheese1 === 0 && sumaCantidadCheese2 === 0 && sumaCantidadCheese3 === 0 && sumaCantidadCheese4 === 0 && sumaCantidadCheese5 === 0)  {
        movement.classList.remove('movement');
    }
    
}

let allProducts = [];


const car = document.querySelector('.carrito-cheese');

carito.addEventListener('click', e => {
    if (e.target.classList.contains('anadir1-cheese')) {
        console.log(e.target.parentElement)
    }
})



