// buttons
const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const yellowBtn = document.getElementById("yellow-btn");
const greenBtn = document.getElementById("green-btn");

const crownBtn = document.getElementById("crown-btn");
const htmlBtn = document.getElementById("html-btn");
const cssBtn = document.getElementById("css-btn");
const jsBtn = document.getElementById("js-btn");

// elements
const posterColor = document.getElementById("poster");
const crownIcon = document.getElementById("crown-icon");
const htmlIcon = document.getElementById("html-icon");
const cssIcon = document.getElementById("css-icon");
const jsIcon = document.getElementById("js-icon");
const inputEl = document.getElementById("input-el");
let captionEl = document.getElementById("caption");

// Event Listeners

redBtn.addEventListener("click", function() {
    posterColor.style.background = "red";
    removeBorder();
    redBtn.style.border = "5px solid black";
})

blueBtn.addEventListener("click", function() {
    posterColor.style.background = "blue";
    removeBorder();
    blueBtn.style.border = "5px solid black";
})

yellowBtn.addEventListener("click", function() {
    posterColor.style.background = "#CEC110";
    removeBorder();
    yellowBtn.style.border = "5px solid black";
})

greenBtn.addEventListener("click", function() {
    posterColor.style.background = "green";
    removeBorder();
    greenBtn.style.border = "5px solid black";
})




htmlBtn.addEventListener("click", function() {
    removeIcon();
    removeiconBtnBorder();
    htmlIcon.style.display = "block";
    htmlBtn.style.border = "5px solid white";
})

cssBtn.addEventListener("click", function() {
    removeIcon();
    removeiconBtnBorder();
    cssIcon.style.display = "block";
    cssBtn.style.border = "5px solid white";
})

jsBtn.addEventListener("click", function() {
    removeIcon();
    removeiconBtnBorder();
    jsIcon.style.display = "block";
    jsBtn.style.border = "5px solid white";
})

crownBtn.addEventListener("click", function() {
    removeIcon();
    removeiconBtnBorder();
    crownIcon.style.display = "block";
    crownBtn.style.border = "5px solid white";
})


// functions

function removeBorder() {
    redBtn.style.border = "5px solid grey";
    blueBtn.style.border = "5px solid grey";
    yellowBtn.style.border = "5px solid grey";
    greenBtn.style.border = "5px solid grey";
}

function removeIcon() {
    htmlIcon.style.display = "none";
    jsIcon.style.display = "none";
    crownIcon.style.display = "none";
    cssIcon.style.display = "none";
}

function removeiconBtnBorder() {
    jsBtn.style.border = "5px solid grey";
    htmlBtn.style.border = "5px solid grey";
    cssBtn.style.border = "5px solid grey";
    crownBtn.style.border = "5px solid grey";
}

inputEl.addEventListener("keyup", function() {
    let userCaption = inputEl.value;
    captionEl.textContent = `${userCaption}`;
})