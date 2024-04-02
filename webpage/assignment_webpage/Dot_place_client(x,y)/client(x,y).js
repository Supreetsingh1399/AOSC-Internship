var container = document.getElementById("container").addEventListener("click", (event) => {
    var pt_x = event.clientX;
    var pt_y = event.clientY;
    console.log(event.clientX, event.clientY);
    var div = document.createElement("div");
    div.style.width = "4px";
    div.style.height = "4px";
    div.style.backgroundColor = "white";
    div.style.position = "absolute";
    div.style.left = pt_x + "px";
    div.style.top = pt_y + "px";
    div.style.borderRadius = "50%";
    document.getElementById("container").appendChild(div);});