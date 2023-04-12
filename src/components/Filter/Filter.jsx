import { useState } from "react";

export const Filter = ({children}) => {
    const [filterState, setFilterState] = useState('')

    const handleFilterChange = (event) => {
        setFilterState(event.target.value)
    }
    return children({filterState, handleFilterChange})
}