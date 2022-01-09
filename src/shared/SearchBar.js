import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ handleSearch }) => {
    return (
        <div className="d-flex justify-content-end">
            <input className='form-control mb-4 me-2 search-bar' placeholder='Search Medicine' type="text" onChange={(e) => handleSearch(e)} />
            <button className='btn search-icon bg-primary d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faSearch} className='text-white fs-4' /></button>
        </div>
    );
};

export default SearchBar;