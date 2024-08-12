// scripts.js

// Add any JavaScript functionality here
console.log("Welcome to [Your Institute Name] website!");
// Popup form script
document.getElementById("popupButton").onclick = function() {
    document.getElementById("popupForm").style.display = "block";
};

document.getElementById("closePopup").onclick = function() {
    document.getElementById("popupForm").style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById("popupForm")) {
        document.getElementById("popupForm").style.display = "none";
    }
};
