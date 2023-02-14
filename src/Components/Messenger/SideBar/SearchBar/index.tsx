import { Input } from "../../../base/forms/inputs"
import { BiSearchAlt } from 'react-icons/bi'
import { useContext } from "react"
import { AppContext } from "../../../../Context/store"
import { ContactActionTypes } from "../../../../Types/Context/Context.types"

interface SearchBarProps extends React.PropsWithChildren { }

export const SearchBar: React.FunctionComponent<SearchBarProps> = (props) => {
    const dispatch = useContext(AppContext).dispatch;
    const handleFilter = (e: any) => {
        dispatch(
            {
                type: ContactActionTypes.Filter_Contact,
                payload: e.target.value
            }
        )
    }

    return (
        <div className="flex justify-center items-center relative text-2xl m-2 mr-4">
            <Input variant="search" placeholder="Search" onChange={handleFilter} />
            <BiSearchAlt className="absolute text-MainGreen-1 top-3 right-3" />
        </div>

    )
}

export default SearchBar