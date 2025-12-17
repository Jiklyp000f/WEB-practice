let count = 0;

const counterValueElement = document.getElementById('counterValue');
const incrementButton = document.getElementById('incrementButton');

function updateCounterDisplay() {
    counterValueElement.textContent = count;
}

incrementButton.onclick = function() {
    count++;
    updateCounterDisplay();
};

updateCounterDisplay();