import { useSelector } from "react-redux"
import ProductCard from "../Components/productCard"
import image from '../assets/Images/No Product found.png'

export default function FilterData(){
    const FilterProducts = useSelector(state => state.product.filteredData)
    return(
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
            {FilterProducts.length > 0 ? 
        <>
        <h2 className='text-2xl font-bold mb-6 text-center'>SHOP</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
            {FilterProducts.map(((product) => (
                <ProductCard key={product.id} product={product} />
            )))}
        </div>
        </>
        : 
        <div className="flex justify-center">
            <img src={image} alt="no product found" />
        </div>
        }
    </div>
    )
}