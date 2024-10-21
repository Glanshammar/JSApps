document.addEventListener('DOMContentLoaded', function() {
    document.title = "JavaScript Apps - Shopping List";

    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const shoppingList = document.getElementById('shoppingList');

    addButton.addEventListener('click', addItem);

    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `
                <span class="item-text">${itemText}</span>
                <div class="item-actions">
                    <button class="button done done-btn">Done</button>
                    <button class="button delete delete-btn">Remove</button>
                </div>
            `;
            shoppingList.appendChild(li);
            itemInput.value = '';

            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });

            const doneBtn = li.querySelector('.done-btn');
            doneBtn.addEventListener('click', function() {
                li.classList.toggle('done');
                if (li.classList.contains('done')) {
                    doneBtn.textContent = 'Undo';
                } else {
                    doneBtn.textContent = 'Done';
                }
            });
        }
    }
});