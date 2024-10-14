import { IoSearchSharp } from "react-icons/io5"
import style from "./search-bar.module.css"

interface SearchBarProperties {
    fill?: boolean
}
export const SearchBar = ({ fill }: SearchBarProperties) => {
    return (
        <div className={`${style.container}  ${fill ? style.fill : ''}`}>
            <IoSearchSharp size={24} />
            <input className={style.search_bar} type="text" placeholder="Search" />
        </div>
    )
}