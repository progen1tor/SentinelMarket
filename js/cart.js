const sum = localStorage.getItem('totalSum');
const orderData = localStorage.getItem('orderData');

const sumTxt = document.getElementById('sum');
const orderDataTxt = document.getElementById('order-data');

sumTxt.innerHTML = `${sum}₽`;
orderDataTxt.innerHTML = orderData;


// имитация флоатинг формы для радио
const formFloatingImitation = document.getElementById('form-floating-imitation');
const standart = document.getElementById('standart');
const express = document.getElementById('express');

function focus() {
    formFloatingImitation.style.borderColor = '#5e5e5e';
    formFloatingImitation.style.boxShadow =
        '0px 0px 2px 1px rgba(34, 60, 80, 0.2)';

    setTimeout(() => {
        formFloatingImitation.style.borderColor = '#dee2e6';
        formFloatingImitation.style.boxShadow = 'none';
    }, 1000);
}

standart.addEventListener('click', focus)
express.addEventListener('click', focus);
