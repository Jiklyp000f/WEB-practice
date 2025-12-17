const itemsList = document.getElementById('itemsList');
const addItemButton = document.getElementById('addItemButton');
const itemsCounter = document.getElementById('itemsCounter');

let itemCounter = 4;

function updateItemsCounter() {
    const items = itemsList.getElementsByTagName('li');
    itemsCounter.textContent = items.length;
}

itemsList.onclick = function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent = 'Нажато!';
        
        event.target.classList.add('clicked');
        
        event.target.style.cursor = 'default';
        event.target.onclick = null;
    }
};

function addNewItem() {
    itemCounter++;
    
    const newItem = document.createElement('li');
    newItem.textContent = `Новый элемент ${itemCounter}`;
    
    itemsList.appendChild(newItem);
    
    updateItemsCounter();
}

addItemButton.onclick = addNewItem;

updateItemsCounter();