const colorText = document.getElementById('colorText');
const colorSelect = document.getElementById('colorSelect');
const currentColorSpan = document.getElementById('currentColor');

function changeTextColor() {
    const selectedColor = colorSelect.value;
    
    if (selectedColor) {
        colorText.style.color = selectedColor;
        
        currentColorSpan.textContent = selectedColor;
        currentColorSpan.style.color = selectedColor;
        
        colorText.style.borderColor = selectedColor;
        
        if (selectedColor === '#000000' || selectedColor === '#0000FF') {
            colorText.style.backgroundColor = '#f5f5f5';
        } else {
            colorText.style.backgroundColor = 'white';
        }
    } else {
        colorText.style.color = '#333';
        currentColorSpan.textContent = 'не выбран';
        currentColorSpan.style.color = '#666';
        colorText.style.borderColor = '#ddd';
        colorText.style.backgroundColor = 'white';
    }
}

colorSelect.addEventListener('change', changeTextColor);

if (colorSelect.value) {
    changeTextColor();
}