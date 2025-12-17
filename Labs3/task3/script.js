function addListItem() {
    const input = document.getElementById('itemInput');
    const list = document.getElementById('itemList');
    
    if (input.value.trim() === '') {
        alert('Пожалуйста, введите текст');
        return;
    }
    
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    list.appendChild(newItem);
    
    input.value = '';
    input.focus();
}