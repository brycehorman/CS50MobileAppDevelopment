const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const todoText = prompt('Enter todo.')
  let todo = document.createElement('li')
  addStyle(classNames.TODO_ITEM, todo)
  let text = document.createElement('span')
  addStyle(classNames.TODO_TEXT, text)
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  addStyle(classNames.TODO_CHECKBOX, checkbox)

  if(todoText.length === 0){
  	alert('You havent entered any text')
  	return false
  }else{
  	todo.appendChild(document.createTextNode(' ' + todoText))
  }

  list.appendChild(todo)
  todo.appendChild(text)
  todo.appendChild(checkbox)

  countTodos(itemCountSpan)
  countUncheckTodos(uncheckedCountSpan)

  let checkedItems = todo.lastChild

  checkedItems.addEventListener('click', function(e){
  	if(e.target.checked){
  		let count = uncheckedCountSpan.innerHTML
  		count--
  		uncheckedCountSpan.innerHTML = count.toString()
  	}
  	else if (!e.target.checked){
  		countUncheckTodos(uncheckedCountSpan)
  	}
  	else{}
  })

}

function countUncheckTodos(value){
	let count = +value.innerHTML
	count++
	uncheckedCountSpan.innerHTML = count
}

function countTodos(value){
	let count = +value.innerHTML
	count++
	itemCountSpan.innerHTML = count
}


function addStyle(selector, property){
	property.setAttribute('class', selector)
}
