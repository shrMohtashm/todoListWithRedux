import ColorFilters from './ColorFilters'
import StatusFilter from './StatusFilter'
import RemainingTodos from './RemainingTodos'
import { useDispatch } from 'react-redux'

export default function Footer() {
    const dispatch=useDispatch()

    function handleMarkAllCompleted(){
        dispatch({
            type:'todos/MarkAllCompleted'
        })
    }

    function handleClearCompleted(){
        dispatch({
            type :'todos/clearCompeleted'
        })
    }

    return (
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button className="button" onClick={handleMarkAllCompleted}>
                    Mark All Completed
          </button>
                <button className="button" onClick={handleClearCompleted}>
                    Clear Completed
          </button>
            </div>

            <RemainingTodos />
            <StatusFilter />
            <ColorFilters/>
        </footer>
    )
}
