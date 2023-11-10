import './Banner.css';
const Banner = () => {
    return (
        <div className=''>
            <h1 className='text-5xl font-bold text-black'>I Grow By Helping People In Need</h1>
            <div className='w-2/4 mx-auto mt-5'>
                <form className="flex items-center">
                    <div className="relative w-full mr-1">
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-3 p-2.5" placeholder="Search Here"/>
                    </div>
                    <button type="submit" className="btn bg-red-600 text-white hover:bg-red-700">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Banner;