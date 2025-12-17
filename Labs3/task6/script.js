const itemList = document.getElementById('itemList');
const removeLastButton = document.getElementById('removeLastButton');
const itemsCountElement = document.getElementById('itemsCount');

function updateItemsCount() {
    const items = itemList.getElementsByTagName('li');
    itemsCountElement.textContent = items.length;
    
    removeLastButton.disabled = items.length === 0;
}

function removeLastItem() {
    const lastItem = itemList.lastElementChild;
    
    if (lastItem) {
        lastItem.style.opacity = '0';
        lastItem.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            itemList.removeChild(lastItem);
            updateItemsCount();
        }, 300);
    }
}

removeLastButton.onclick = removeLastItem;

updateItemsCount();