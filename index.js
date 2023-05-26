const theme = document.getElementById('theme');
const newItemInput = document.getElementById('addItem');
const todoList = document.querySelector('.content ul');
const todo_wrapper = document.querySelector('.new_content');
const itemsLeft = document.querySelector('.items-left span');
const itemsLeft2 = document.querySelector('.items-left2 span');


itemsLeft.innerText = document.querySelectorAll('.list-item input[type="checkbox"]').length;
itemsLeft2.innerText = document.querySelectorAll('.list-item input[type="checkbox"]').length;

theme.addEventListener('click', () => {
    document.querySelector('body').classList = [theme.checked ? 'theme-light' : 'theme-dark'];
});

document.querySelector('.add-new-item span').addEventListener('click', () => {
    if (newItemInput.value.length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});

newItemInput.addEventListener('keypress', (e) => {
    if (e.charCode === 13 && newItemInput.value.length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});

function createNewTodoItem(text) {
    const elem = document.createElement('li');
    elem.classList.add('flex-row');

    elem.innerHTML = `
        <label class="list-item">
        <input type="checkbox" name="todoItem">
        <span class="checkmark"></span>
        <span class="text">${text}</span>
    </label>
    <span class="remove"></span>
    `;

    if (document.querySelector('.filter input[type="radio"]:checked').id === 'completed') {
        elem.classList.add('hidden');
    }
    todoList.append(elem);
    updateItemsCount(1);
}

function updateItemsCount(number) {
    itemsLeft.innerText = +itemsLeft.innerText + number;
    itemsLeft2.innerText = +itemsLeft2.innerText + number;
}

// remove todo item

function removeTodoItem(elem) {
    elem.remove();
    updateItemsCount(-1);
}

todoList.addEventListener('click',(event) => {
    if (event.target.classList.contains('remove')) {
        removeTodoItem(event.target.parentElement);
    }
});

// clear completed items

document.querySelector('.clear').addEventListener('click', () => {
    document.querySelectorAll('.list-item input[type="checkbox"]:checked').forEach(item => {
        removeTodoItem(item.closest('li'));
    });
});
document.querySelector('.clear2').addEventListener('click', () => {
    document.querySelectorAll('.list-item input[type="checkbox"]:checked').forEach(item => {
        removeTodoItem(item.closest('li'));
    });
});



// filter todo list items
document.querySelectorAll('.filter input').forEach(radio => {
    radio.addEventListener('change', (e) => {
        filterTodoItems(e.target.id);
    });
});

function filterTodoItems(id) {
    const allItems = todoList.querySelectorAll('li');

    switch(id) {
        case 'all':
            allItems.forEach(item => {
                item.classList.remove('hidden');
            })
            break;
        case 'active':
            allItems.forEach(item => {
                item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
        default: 
            allItems.forEach(item => {
                !item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
    }
}

// window.addEventListener('DOMContentLoaded', () => {
//     const list = document.getElementById('list');
//     const mobileItem = document.querySelector('#list .mobile');
  
//     list.appendChild(mobileItem);
//   });
  


new Sortable(todo_wrapper,{
    animation: 300
});
