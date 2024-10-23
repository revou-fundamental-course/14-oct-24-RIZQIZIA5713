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

