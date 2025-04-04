import {Link, useNavigate,} from 'react-router-dom'
import {FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import { useState } from 'react';
import Register from './Register';
import { setSearchTerm } from '../Redux/productSlice';


export default function Navbar(){
    const products = useSelector(state  => state.cart.products);
    const [isModalOpen, setIsModalOpen] =useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch] = useState();
    const Dispatch = useDispatch();
    const Navigate = useNavigate();

    const HandleSearch = (e) => {
        e.preventDefault()
        Dispatch(setSearchTerm(search))
        Navigate('/filter-data')
    }

    const OpenSignUp = () => {
        setIsLogin(false)
        setIsModalOpen(true)
    }
    const OpenLogin = () => {
        setIsLogin(true)
        setIsModalOpen(true)
    }

    return(
        <nav className=' bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to="/">e-MACK</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={HandleSearch}>
                        <input type="text" placeholder='Search Product'
                        className='w-full border py-2 px-4' onChange={(e)=> setSearch(e.target.value)} />
                        <button>
                        <FaSearch className='absolute top-3 right-3 text-red-500'/>
                        </button>
                    </form>
                </div>
                <div className='flex items-center  space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className='absolute top-0 text-xs w-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                                {products.length}
                            </span>
                        )}
                    </Link>
                    <button className='hidden md:block'
                     onClick={() => setIsModalOpen(true)}>
                        Login | Register
                    </button>
                    <button className='block md:hidden'
                     onClick={() => setIsModalOpen(true)}>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/" className='hover:underline'>
                    Home
                </Link>
                <Link to="/shop" className='hover:underline'>
                    Shop
                </Link>
                <Link to="/" className='hover:underline'>
                    Contact
                </Link>
                <Link to="/" className='hover:underline'>
                    About
                </Link>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {isLogin ? <Login openSignUp = {OpenSignUp}/> : <Register openLogin = {OpenLogin} />}
            </Modal>
        </nav>
    );
}