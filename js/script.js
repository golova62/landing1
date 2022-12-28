'use strict'

const searchButton = document.querySelector('#search-button');
const searchPanel = document.querySelector('.header__hidden-search-panel');
const headerSubstrate = document.querySelector('.header__substrate');
const loginButton = document.querySelector("#login-button")
const loginForm = document.querySelector('.login-form');
const body = document.querySelector('.body');

searchButton.addEventListener('click', function() {
    searchPanel.classList.toggle('header__hidden-search-panel_open-search-form');
    headerSubstrate.classList.toggle('header__substrate-opener');
    // body.classList.toggle('body__none-scroll')
})
headerSubstrate.addEventListener('click', function() {
    searchPanel.classList.remove('header__hidden-search-panel_open-search-form');
    headerSubstrate.classList.remove('header__substrate-opener');
    // body.classList.toggle('body__none-scroll')
})
loginButton.addEventListener('click', function() {
    loginForm.classList.toggle("login-form__visible");
})













// const titles = document.querySelectorAll('[data-name="accordion-1_title"]');
// const titles2 = document.querySelectorAll('[data-name="accordion-2_title"]');

// titles.forEach(function(item) {
//     item.addEventListener('click', function() {
//         this.nextElementSibling.classList.toggle('hidden');
//     })
// })

// titles2.forEach(function(item) {
//     item.addEventListener('click', function() {
//         this.nextElementSibling.style = "max-height: 1000px"
//         this.nextElementSibling.style.padding = '10px'
//     })
// })



