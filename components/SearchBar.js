import { FiSearch } from "react-icons/fi";

const SearchBar = () => {

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[90%] flex justify-end">
                <div className="bg-gray-200 flex items-center mt-6 py-2.5 px-3.5 rounded-3xl">
                    <FiSearch size={16} />
                    <input type="search" placeholder="Search for Characters" className="border-none outline-none px-1.5 bg-transparent w-56 md:w-72" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar