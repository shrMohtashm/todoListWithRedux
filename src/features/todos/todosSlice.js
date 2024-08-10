import { produce } from "immer";
import { statusFilters } from "../filter/filterSlice";

const initSate = {
    entities: {
        1: { id: 1, text: 'Deign ui', completed: true, color: 'red' },
        2: { id: 2, text: 'discover state', completed: true },
        3: { id: 3, text: 'discover actions', completed: false },
        4: { id: 4, text: 'implement reducer', completed: false, color: 'blue' },
        5: { id: 5, text: 'Complete patterns', completed: false, color: 'red' },
    }
}

const todoReducer = produce((state, action) => {
    switch (action.type) {
        case 'todos/todoAdded':
            const todo = action.payload;
            state.entities[todo.id] = todo
            break;

        case 'todos/todoToggled':
            const todoId = action.payload
            state.entities[todoId].completed = !state.entities[todoId].completed
            break;

        case 'todos/todoDeleted':
            const deletedTodoId = action.payload
            delete state.entities[deletedTodoId]
            break;
        case 'todos/MarkAllCompleted':
            Object.values(state.entities).forEach(todo => {todo.completed = true})
            break;
        case 'todos/clearCompeleted':
            Object.values(state.entities).forEach(todo =>{
                if(todo.completed){
                    delete state.entities[todo.id]
                }
            })    
            break; 
            
        case 'todos/changeColor':
            const {id , color}=action.payload
            state.entities[id].color = color
         
    }
}, initSate)
export default todoReducer;

// export default function todoReducer(state = initSate, action) {
//     switch (action.type) {
//         case 'todos/todoAdded':
//             const todo = action.payload;
//             return {
//                 ...state,
//                 entities: {
//                     ...state.entities,
//                     [todo.id] : todo
//                 }
//             }

//         case 'todos/todoToggled':
//             const todoId = action.payload
//             return {
//                 ...state,
//                 entities:{
//                     ...state.entities,
//                     [todoId] : {
//                         ...state.entities[todoId],
//                         completed : !state.entities[todoId].completed
//                     }
//                 }
//             }

//         case 'todos/todoDeleted':
//             const deletedTodoId = action.payload
//             const entities= {...state.entities}
//             delete entities[deletedTodoId]
//             return {
//                 ...state,
//                 entities
//             }
//         default:
//             return state;
//     }
// }

export const todoAdded = (text) => ({
    type: 'todos/todoAdded',
    payload: { id: 6, text, completed: false }
})

export const selectTodos = (state) => state.todos.entities

export const toggleTodo = (id) => ({
    type: 'todos/todoToggled',
    payload: id
})

export const deleteTodo = (id) => ({
    type: 'todos/todoDeleted',
    payload: id
})

export const selectTodoIds = (state) => Object.keys(state.todos.entities)


const selectFilteredTodos=(state)=>{
    const todos=Object.values(selectTodos(state))
    const { colors , status} = state.filters
    const showAll= status === statusFilters.All
    if(showAll && colors.length === 0){
        return todos
    }
    const showCompleted =status === statusFilters.Completed
    return todos.filter(todo =>{
        const statusFilter=showAll || todo.completed===showCompleted
        const colorsFilter =colors.length===0 || colors.includes(todo.color)
        return statusFilter && colorsFilter
    })
}

export const selectFilteredTodoIds=(state)=>{
    const todos=selectFilteredTodos(state)
    return todos.map(todo => todo.id)
}