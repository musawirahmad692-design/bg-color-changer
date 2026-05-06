const btn = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");
const container = document.querySelector(".container");

// Generate HEX color
function randomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
}

// Check brightness (to decide text color)
function getTextColor(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // brightness formula
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 150 ? "#000000" : "#ffffff";
}

// Change color
btn.addEventListener("click", () => {
    let color = randomHexColor();

    document.body.style.background = color;
    colorCode.textContent = color;

    // change font colors dynamically
    let textColor = getTextColor(color);
    document.body.style.color = textColor;
    colorCode.style.color = textColor;
    btn.style.color = textColor;
});