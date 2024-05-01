import { FiSearch } from "react-icons/fi";

import './index.css'

const SearchAndToggle = () => {

    return (
        <div className="seach-and-toggle-container">
            <div className="responsive-search-toggle-container">
                <div className="search-container">
                    <FiSearch size={16} />
                    <input type="search" placeholder="Search for Characters" className="seach-input" />
                </div>
            </div>
        </div>
    )
}

export default SearchAndToggle