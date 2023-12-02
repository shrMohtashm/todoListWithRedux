import { useDispatch, useSelector } from "react-redux"
import { changeStatusFilter, selectStatusFilter, statusFilters } from "../filter/filterSlice"

const StatusFilter = () => {

    const status= useSelector(selectStatusFilter)
    const dispatch=useDispatch()
    
    function handleChangeStatus(status){
        dispatch(changeStatusFilter(status))
    }
    const renderedFilters = Object.keys(statusFilters).map((key) => {
        const value = statusFilters[key]
        const className = value === status ? 'selected' : ''

        return (
            <li key={value}>
                <button className={className} onClick={()=> handleChangeStatus(value)}>
                    {key}
                </button>
            </li>
        )
    })

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>{renderedFilters}</ul>
        </div>
    )
}

export default StatusFilter