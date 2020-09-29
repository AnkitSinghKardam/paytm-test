document.querySelector("#getAppLink").addEventListener('click', () => {
    document.querySelector(".popup-container").classList.add('d-block');
    setTimeout(() => {
        document.querySelector(".popup-container > div").style.top="50%";
    },100);
});

document.querySelector(".close").addEventListener('click', () => {
    document.querySelector(".popup-container > div").style.top="-100%";
    setTimeout(() => {
        document.querySelector(".popup-container").classList.remove('d-block');
    },750)
});


document.querySelector(".mob-menu").addEventListener('click', () => {
    document.querySelector(".mob-menu-list").classList.toggle('show-menu');
});

document.querySelector(".mob-menu-list").addEventListener('click', (event) => {
    document.querySelector(".mob-menu-list").classList.toggle('show-menu');
    event.stopPropagation();
});


document.querySelector(".footer-nav > div:nth-child(2) > div:nth-child(1)").addEventListener('click', () => {
    document.querySelector(".footer-nav > div:nth-child(2) > div:nth-child(1) > ul").classList.toggle('block')
});

document.querySelector(".footer-nav > div:nth-child(2) > div:nth-child(2)").addEventListener('click', () => {
    document.querySelector(".footer-nav > div:nth-child(2) > div:nth-child(2) > ul").classList.toggle('block')
});

document.querySelector(".footer-nav > div:nth-child(2) > div:nth-child(3)").addEventListener('click', () => {
    document.querySelector(".footer-nav > div:nth-child(2) > div:nth-child(3) > ul").classList.toggle('block')
});

document.querySelector(".footer-nav > div:nth-child(2) > div:nth-child(4)").addEventListener('click', () => {
    document.querySelector(".footer-nav > div:nth-child(2) > div:nth-child(4) > ul").classList.toggle('block')
});
//if (window.matchMedia("(max-width: 768px)").matches) {}