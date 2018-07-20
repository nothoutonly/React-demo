function makeActionCreator(type, ...argNames) {
	return function(...args) {
		let action = { type }
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index]
		})
		return action
	}()
}

const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

const addTodo = makeActionCreator(ADD_TODO, 'todo')
const editTodo = makeActionCreator(EDIT_TODO, 'id', 'todo')
const removeTodo = makeActionCreator(REMOVE_TODO, 'id')
console.log(addTodo);