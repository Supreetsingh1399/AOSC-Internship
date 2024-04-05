const elements = document.querySelectorAll('.sub-container');
elements.forEach(element => {
    element.addEventListener('click', function (event) {
        this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active');
    });
});