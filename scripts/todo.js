$(function() {
    document.title = "JavaScript Apps - Shopping List";

    const $itemInput = $('#itemInput');
    const $addButton = $('#addButton');
    const $shoppingList = $('#shoppingList');

    $addButton.on('click', addItem);

    $itemInput.on('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });

    function addItem() {
        const itemText = $itemInput.val().trim();
        if (itemText !== '') {
            const $li = $('<li>').addClass('list-group-item').html(`
                <span class="item-text">${itemText}</span>
                <div class="item-actions">
                    <button class="button delete delete-btn">Ta bort</button>
                </div>
            `);
            $shoppingList.append($li);
            $itemInput.val('');

            $li.find('.toggle-btn').on('click', function() {
                $li.toggleClass('completed');
            });

            $li.find('.delete-btn').on('click', function() {
                $li.remove();
            });
        }
    }
});