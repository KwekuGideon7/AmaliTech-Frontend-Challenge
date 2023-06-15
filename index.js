function get_element_id(...data) {
    let arr = [];
    data.forEach((id) => {
      arr.push(document.getElementById(id));
    });
    return arr;
  }
  let [theme, newItemInput] = get_element_id("theme", "addItem");
  // Query selector
  function query_selector(...selectors) {
    let arr = [];
    if (selectors.length == 1) return document.querySelector(selectors[0]);
    else {
      selectors.forEach((selector) => {
        arr.push(document.querySelector(selector));
      });
    }
    return arr;
  }
  
  let [todoList, todo_wrapper, itemsLeft, itemsLeft2] = query_selector(
    ".content ul",
    ".new_content",
    ".items-left span",
    ".items-left2 span"
  );
  // Query all
  function query_all(selector_id) {
    return document.querySelectorAll(`.${selector_id}`);
  }
  // Event listener
  function eventListener(accessor, event, callback) {
    accessor.addEventListener(event, callback);
  }
  
  //theme switcher
  eventListener(theme, "click", () => {
    const body = query_selector("body");
    const newTheme = theme.checked ? "theme-light" : "theme-dark";
    body.classList = [newTheme];
    localStorage.setItem("theme", newTheme);
  });
  
  // Retrieve theme from local storage
  function getThemeFromLocalStorage() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const body = query_selector("body");
      body.classList = [storedTheme];
      theme.checked = storedTheme === "theme-light";
    }
    itemsLeft2.innerHTML = JSON.parse(localStorage.getItem("itemsCount"));
  }
  
  // Retrieve todos from local storage
  function getLocalStorage() {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems !== null && typeof localItems === "string") {
      todoList.innerHTML = localItems;
    }
    addCompleted();
  }
  // Invoke functions
  function addCompleted() {
    let allItems = document
      .querySelectorAll('li input[type="checkbox"]')
      .forEach((item) => {
        item.addEventListener("click", () => {
          if (!item.checked) {
            updateItemsCount(1, false);
          } else if (item.checked) {
            updateItemsCount(-1, true); // Invoke with completed = true
          }
        });
      });
  }
  
  // Save todos to local storage
  function updateLocalStorage() {
    localStorage.setItem("localItem", JSON.stringify(todoList.innerHTML));
  }
  
  //mouse input
  eventListener(query_selector(".add-new-item span"), "click", () => {
    newItemInput.value.length > 0 &&
      (createNewTodoItem(newItemInput.value), (newItemInput.value = ""));
  });
  
  //keyboard input
  eventListener(newItemInput, "keypress", (e) => {
    e.key === "Enter" &&
      newItemInput.value.length > 0 &&
      (createNewTodoItem(newItemInput.value), (newItemInput.value = ""));
  });
  
  //create new todo item
  function createNewTodoItem(text) {
    const elem = document.createElement("li");
    elem.classList.add("flex-row");
  
    elem.innerHTML = `
          <label class="list-item">
          <input type="checkbox" name="todoItem">
          <span class="checkmark"></span>
          <span class="text">${text}</span>
      </label>
      <span class="remove"></span>
      `;
    //new
    elem
      .querySelector('input[type="checkbox"]')
      .addEventListener("click", (e) => {
        if (!e.target.checked) {
          updateItemsCount(1, false);
        } else if (e.target.checked) {
          updateItemsCount(-1, true); // Invoke with completed = true
        }
      });
  
    todoList.append(elem);
    newItemInput.value = "";
    updateItemsCount(1);
    updateLocalStorage();
  }
  
  // function updateItemsCount
  function updateItemsCount(num = 0, completed = false) {
    let count = todo_wrapper.getElementsByTagName("li").length;
    let currentCount = itemsLeft2.innerHTML;
    if (count === 0) {
      itemsLeft2.innerText = 0;
      itemsLeft.innerText = 0;
    } else if (completed) {
      itemsLeft2.innerText--;
      itemsLeft.innerText--;
    } else if (!completed) {
      itemsLeft2.innerText++;
      itemsLeft.innerText++;
    } else {
      itemsLeft2.innerText = num > 0 ? count : count - num;
      itemsLeft.innerText = num > 0 ? count : count - num;
    }
  
    localStorage.setItem("itemsCount", count); // Save updated count to local storage
  }
  
  // remove todo item
  function removeTodoItem(elem) {
    elem.remove();
    updateItemsCount(-1);
    updateLocalStorage();
    itemsLeft2.innerHTML = JSON.parse(localStorage.getItem("itemsCount"));
    itemsLeft.innerHTML = JSON.parse(localStorage.getItem("itemsCount"));
  }
  
  eventListener(todoList, "click", (event) => {
    event.target.classList.contains("remove") &&
      removeTodoItem(event.target.parentElement);
  });
  
  // clear completed items
  eventListener(query_selector(".clear"), "click", () => {
    query_all("list-item input[type='checkbox']:checked").forEach((item) => {
      removeTodoItem(item.closest("li"));
    });
    updateLocalStorage();
  });
  
  eventListener(query_selector(".clear2"), "click", () => {
    query_all("list-item input[type='checkbox']:checked").forEach((item) => {
      removeTodoItem(item.closest("li"));
    });
    updateLocalStorage();
  });
  
  // filter todo list items
  document.querySelectorAll(".filter input").forEach((radio) => {
    radio.addEventListener("change", (e) => {
      filterTodoItems(e.target.id);
    });
  });
  
  //can be made simpler with an if statement
  function filterTodoItems(id) {
    const allItems = todoList.querySelectorAll("li");
  
    if (id == "all") {
      allItems.forEach((item) => item.classList.remove("hidden"));
    }
    if (id == "Active") {
      allItems.forEach((item) =>
        item.querySelector("input").checked
          ? item.classList.add("hidden")
          : item.classList.remove("hidden")
      );
    }
    if (id == "Completed") {
      allItems.forEach((item) =>
        item.querySelector("input").checked
          ? item.classList.remove("hidden")
          : item.classList.add("hidden")
      );
    }
  }
  
  // drag and drop
  new Sortable(todo_wrapper, {
    animation: 300,
  });
  
  getLocalStorage();
  getThemeFromLocalStorage();
  
  itemsLeft2.innerHTML = JSON.parse(localStorage.getItem("itemsCount"));
  itemsLeft.innerHTML = JSON.parse(localStorage.getItem("itemsCount"));
  