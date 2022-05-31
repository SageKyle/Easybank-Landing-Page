// UI ELEMENT SELECTORS
const header = document.querySelector('.header');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('nav');

// TOGGLE THE NAVIGATION SECTION
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('hidden')
});