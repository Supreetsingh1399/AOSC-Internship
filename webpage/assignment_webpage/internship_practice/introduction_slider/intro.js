let scrollSize = 0;
const container = document.querySelector(".container");

function scrollRight() {
    scrollSize += 1930;
    if (scrollSize > container.scrollWidth - container.clientWidth) {
        // Go back to the first div
        scrollSize = 0;
        // behavior: 'smooth'
    }
    scrollSize = scrollSize + 25;
    container.scrollTo({
        left: scrollSize,
        behavior: 'smooth'
    });
}

document.querySelector(".scroll-left").addEventListener("click", function () {
    scrollSize -= 1950;
    if (scrollSize < 0) {
        // Go to the last div
        scrollSize = container.scrollWidth - container.clientWidth;
    }
    container.scrollTo({
        left: scrollSize,
        behavior: 'smooth'
    });
});

document.querySelector(".scroll-right").addEventListener("click", scrollRight);

setInterval(scrollRight, 5000);