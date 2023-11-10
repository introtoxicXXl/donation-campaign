import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ handleSearch }) => {
    return (
        <div className='banner z-10'>
            <h1 className='lg:text-5xl md:text-4xl font-bold text-black'>I Grow By Helping People In Need</h1>
            <div className='lg:w-2/4 w-full md:w-2/4 mx-auto mt-5'>
                <form onSubmit={handleSearch} className="flex items-center">
                    <div className="relative w-full mr-1">
                        <input name='input' type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-3 p-2.5" placeholder="Search Here" />
                    </div>
                    <button type="submit" className="btn bg-red-600 text-white hover:bg-red-700">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default Banner;