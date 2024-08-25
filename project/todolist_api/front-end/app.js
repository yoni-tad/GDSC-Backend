const domain = "https://gdsc-backend-todo-list.onrender.com";

async function fetchTodos() {
  try {
    const response = await fetch(`${domain}/api/todos`);
    const todos = await response.json();

    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    todos.forEach((todo) => {
      const todoItem = document.createElement("div");
      // todoItem.textContent = todo.todo
      todoItem.innerHTML = `
                  <div>
                    <input class="hidden" type="checkbox" id="task_${
                      todo._id
                    }" ${todo.checked ? "checked" : ""} />
                    <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_${
                      todo._id
                    }">
                      <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span class="ml-4 text-sm">${todo.todo}</span>
                      <div class="flex flex-1 justify-end">
                          <button data-id="${todo._id}" class="-m-3 p-3">
                          <svg class="h-5 w-5 text-red-500 hover:text-red-700"" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                          </svg>
                          </button>
                      </div>
                    </label>
                  </div>
                `;
      todoList.append(todoItem);
    });

    // Update
    todoList.addEventListener("change", async function (event) {
      if (event.target.type === "checkbox") {
        const checkbox = event.target;
        const todoId = checkbox.id.replace("task_", "");
        const updateTodo = { checked: checkbox.checked };

        try {
          const response = await fetch(`${domain}/api/todos/${todoId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateTodo),
          });

          if (!response.ok) {
            console.log("Failed update todo", response);
          }
        } catch (e) {
          console.log(`Error update todo: ${e}`);
        }
      }
    });

    // delete
    todoList.addEventListener("click", async function (event) {
      if (event.target.closest("button")) {
        const todoId = event.target.closest("button").dataset.id;
        try {
          const resnponse = await fetch(`${domain}/api/todos/${todoId}`, {
            method: "DELETE",
          });

          if (response.ok) {
            console.log("Todo deleted successfully");
            fetchTodos();
          } else {
            console.log("Failed delete todo");
          }
        } catch (e) {
          console.log(`Error update todo: ${e}`);
        }
      }
    });
  } catch (e) {
    console.log(`Error fetch todos: ${e}`);
  }
}

async function addTodos(event) {
  event.preventDefault();

  const todoInput = document.getElementById("todoInput").value;

  if (todoInput === "") {
    return;
  }
  try {
    const response = await fetch(`${domain}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todoInput }),
    });

    if (response.ok) {
      document.getElementById("todoInput").value = "";
      fetchTodos();
    } else {
      console.log("Failed to add todo");
    }
  } catch (e) {
    console.log(`Error add todos: ${e}`);
  }
}

document.addEventListener("DOMContentLoaded", fetchTodos);
document.getElementById("addBtn").addEventListener("click", addTodos);
