import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NoResult = () => {
    return (
        <div className='text-center my-5 pb-5 text-secondary'>
            <FontAwesomeIcon icon={faSearch} className='mb-4' style={{ fontSize: "70px" }} />
            <h1> Sorry ! No Results Found</h1>
        </div>
    );
};

export default NoResult;