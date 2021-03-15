//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

//Functions
function addTodo(event) {
    //Prevent form from submmiting
    event.preventDefault()

    //Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //Create LI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //Check Mark Button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    //Check trash button
    const TrashButton = document.createElement('button')
    TrashButton.innerHTML = '<i class="fas fa-trash"></i>'
    TrashButton.classList.add('trash-btn')
    todoDiv.appendChild(TrashButton)
    //Apend to List
    todoList.appendChild(todoDiv)
    //Clear Todo Input Value
    todoInput.value = ''
}

function deleteCheck(e){
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.ParentElement
        //Animation
        todo.classList.add('fall')
        todo.addEventListener('transitioned', function(){
            todo.remove()
        })
    }

    //Check Mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.ParentElement
        todo.classList.toggle('completed')
    }
}