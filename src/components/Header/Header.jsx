import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (


        <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/'><img src="https://iili.io/JBh3vBS.png" className="h-8 mr-3" alt="Flowbite Logo" /></Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <NavLink to='/' className='text-black hover:text-red-600 hover:underline font-semibold'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/donation' className='text-black hover:text-red-600 hover:underline font-semibold'>Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to='/statistics' className='text-black hover:text-red-600 hover:underline font-semibold'>Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Header;