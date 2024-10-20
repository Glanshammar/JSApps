$(function() {
    document.title = "JavaScript Apps - Shopping List";

    const itemInput = $('#');
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
                    <button class="btn btn-sm btn-success toggle-btn">Klar</button>
                    <button class="btn btn-sm btn-danger delete-btn">Ta bort</button>
                </div>
            `;
            shoppingList.appendChild(li);
            itemInput.value = '';

            li.querySelector('.toggle-btn').addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            li.querySelector('.delete-btn').addEventListener('click', () => {
                li.remove();
            });
        }
    }
});