const elements = document.querySelectorAll('.sub-container');
elements.forEach(element => {
    element.addEventListener('click', function () {
        this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active');
    });
});
var arr = [
    {
        A_Court_Of_Thieves: 419,
        Return: 400,
        Rise_Of_Dragons: 220,
        Freezing_Order: 200,
        Harry_Potter_Cursed_child: 330,
        The_Adventures_Of_Sherlock_Holmes: 340,
        The_Return_Of_Sherlock_Holmes: 400,
        Rich_Dad_Poor_Dad: 200
    }
];
document.getElementById('btn').addEventListener('click', calculate);
var table = document.querySelector('.Table-items');

function calculate() {
    var elements = document.querySelectorAll('.sub-container'); // Add missing declaration for 'elements' variable
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    var total_price = 0;
    var row;
    elements.forEach((element, j) => {
        if (element.classList.contains('active')) {
            var names = Object.keys(arr[0])[j];
            var price = arr[0][names];
            total_price += parseInt(price);
            row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = names;
            cell2.innerHTML = price;

        }
    });
    var cell3 = row.insertCell(2);
    cell3.innerHTML = total_price;
}

//-----------------------------------------side scroll buttons-----------------------------------//

var scrollSize = 300;
document.querySelector(".scroll-left").addEventListener("click", function () {
    scrollSize -= 300;
    if (scrollSize < 0) {
        scrollSize = 0;
    }
    document.getElementsByClassName("container")[0].scrollTo(scrollSize, 0);
});
document.querySelector(".scroll-right").addEventListener("click", function () {
    scrollSize += 300;
    var container = document.getElementsByClassName("container")[0];
    if (scrollSize > container.scrollWidth - container.clientWidth) {
        scrollSize = container.scrollWidth - container.clientWidth;
    }
    document.getElementsByClassName("container")[0].scrollTo(scrollSize, 0);
});

