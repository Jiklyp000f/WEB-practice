const toggleElement = document.getElementById('toggleElement');
const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('statusText');

function toggleVisibility() {
    toggleElement.classList.toggle('hidden');
    
    if (toggleElement.classList.contains('hidden')) {
        statusText.textContent = 'скрытый';
        statusText.style.color = '#f44336'; 
    } else {
        statusText.textContent = 'видимый';
        statusText.style.color = '#2196F3'; 
    }
}

toggleButton.onclick = toggleVisibility;

if (toggleElement.classList.contains('hidden')) {
    statusText.textContent = 'скрытый';
    statusText.style.color = '#f44336';
} else {
    statusText.textContent = 'видимый';
    statusText.style.color = '#2196F3';
}