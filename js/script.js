// NAV
const navItems = document.querySelector('nav');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

// CAROUSEL
let carousel = document.querySelector('.carousel .carousel-slider');
let slider = document.querySelectorAll('.carousel .carousel-slider .slider');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.carousel .dots li');

let lengthItems = slider.length - 1;
let active = 0;

// Next Button
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadcarousel();
}

// Previous Button
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadcarousel();
}

// Autoslide
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadcarousel(){
    carousel.style.left = -slider[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.carousel .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}

// Dots
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadcarousel();
    })
})
window.onresize = function(event) {
    reloadcarousel();
};

// INPUT OUTPUT
document.getElementById("submit").onclick = function() {
    const currentTime = new Date().toLocaleString();
    document.getElementById("output-time").innerText = currentTime;

    const name = document.getElementById('name').value;
    document.getElementById("output-name").innerText = name;

    const date = document.getElementById('dateBirth').value;
    document.getElementById("output-dateBirth").innerText = date;

    const gender = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("output-gender").innerText = gender;

    const message = document.getElementById('message').value;
    document.getElementById("output-message").innerText = message;
}