var myfunc = () => {
    var name = document.getElementsByName("name")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var mobile = document.getElementsByName("mobile")[0].value;
    var table = document.getElementById("data-table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = mobile;
}