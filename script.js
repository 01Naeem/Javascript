var heading = document.getElementById("head");
button.style.color = "red";
function display(){
    heading.innerHTML = "Hello World!";
    heading.style.color = "red";
    heading.style.backgroundColor = "lightgreen";
    heading.style.padding = "20px";
    heading.style.fontSize = "40px";
    heading.style.boxShadow = "4px 4px 8px gray";
};

function calculateArea(width, height){
    width = document.getElementById("width").value;
    height = document.getElementById("height").value;
    let area = document.getElementById("Area");
    let Area = width * height;
    area.style.color = "red";
    area.style.backgroundColor = "lightgreen";
    area.style.padding = "20px";
    area.style.fontSize = "40px";
    area.style.boxShadow = "4px 4px 8px gray";
    area.innerHTML = "Area: of Reactangle is: " + Area + " sq. units";
};
