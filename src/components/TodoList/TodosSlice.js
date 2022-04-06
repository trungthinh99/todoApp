const initState = [
    { id: 1, name: 'Lau nhà', completed: false, priority: 'Low' },
    { id: 2, name: 'Mua thiết bị', completed: true, priority: 'Medium' },
    { id: 3, name: 'Ôn bài KT cuối kì', completed: false, priority: 'High'},   
]

const todoListReducer = (state = initState, action) => {
console.log(state, action);
switch(action.type) {
    case 'todoList/addTodo':
        return [...state, action.payload]

    case 'todoList/toggleTodoStatus':
        return state.map((todo) =>
            todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    default:
        return state;
}

}

export default todoListReducer