import { produce } from "immer"
export const statusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}

const initState = {
    status: statusFilters.All,
    colors: []
}

const filterReducer = produce((state, action) => {

    switch (action.type) {
        case 'filters/changedStatusFilter':
            const statusFilter = action.payload
            state.status = statusFilter
            break;

        case 'filters/changedColorsFilters':
            const { color, changeType } = action.payload
            switch (changeType) {
                case 'added':
                    state.colors.push(color)
                    break;
                case 'removed':
                state.colors =state.colors.filter(c => c !== color)
                break;
            }
            }
    }
    ,initState)
    export default filterReducer;

// export default function filterReducer(state=initState , action){

//     switch (action.type) {
//         case 'filters/changedStatusFilter':
//             const statusFilter=action.payload
//             return {
//                 ...state,
//                 status : statusFilter
//             }

//          case 'filters/changedColorsFilters':
//             const {color , changeType}=action.payload
//             switch (changeType) {
//                 case 'added':
//                   if(state.colors.includes(color)){
//                     return state
//                   }
//                   return {
//                     ...state,
//                     colors :[
//                         ...state.colors,
//                         color
//                     ]
//                 }

//                 case 'removed':
//                     return {
//                         ...state,
//                         colors : state.colors.filter(c => c!== color)
//                     }
//                 default:
//                    return state;
//             }


//         default:
//           return  state;
//     }

// }

export const selectStatusFilter = state => state.filters.status

export const changeStatusFilter = (status) => ({
    type: 'filters/changedStatusFilter',
    payload: status
})

export const changeColorFilter = (color, changeType) => ({
    type: 'filters/changedColorsFilters',
    payload: {
        color,
        changeType
    }
})