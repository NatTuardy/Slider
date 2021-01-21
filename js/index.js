const slidesToShow = 1;
const slidesToScroll = 1;
const nav = document.getElementById('nav');
const dots = document.querySelectorAll('.slider-dots_item');

nav.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('menu-item')) {
        target.querySelector('.submenu').classList.toggle('submenu--active');
        const container = document.querySelector('.slider');
        const items = document.querySelectorAll('.item');
        const itemWidth = container.clientWidth / slidesToShow;

        items.forEach((item => {
            item.style.minWidth = `${itemWidth}px`;
        }))
    }
})

const setPosition = (slideIndex)=> {
    const track = document.querySelector('.slider-track');
    const container = document.querySelector('.slider');
    const itemWidth = container.clientWidth / slidesToShow;
   
    track.style.transform = `translateX(-${slideIndex * itemWidth}px)`
}

function currentSlide(n) {
    toggleActivity(n);
    setPosition(n);
}

// Клик вне списка
document.addEventListener('mouseup', (event) => {
    if (!nav.contains(event.target)) {
        hideList();
    }
});

const hideList = () => {
    if(nav.querySelector('.submenu--active')) {
        nav.querySelector('.submenu--active').classList.remove('submenu--active');
    }
};

function toggleActivity (slideIndex) {
    for(let i = 0; i < dots.length; i++) {
        dots[i].classList.toggle('slider-dots_item--active', i === slideIndex);
    }
}
