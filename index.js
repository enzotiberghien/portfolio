const scrollOffset = 100;

const scrollElements = document.querySelectorAll(".js-scroll");


const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
}

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})