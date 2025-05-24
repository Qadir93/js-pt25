function showAlert() {
    alert("You clicked the link!");
}


function showImageAlert(mobileName) {
    alert("You clicked on " + mobileName);
}







function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}






var count = 0;

function updateDisplay() {
    document.getElementById("counter").innerText = count;
}

function increaseCounter() {
    count++;
    updateDisplay();
}

function decreaseCounter() {
    count--;
    updateDisplay();
}