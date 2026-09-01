"use client"
import { products, addToCart } from '@/data/cart'

export default function ProductCard({name, price}) {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {products.map((prod) => (
                <div key={prod.id} className='border border-gray-300 rounded-lg p-6 w-64 bg-white text-gray-800 flex flex-col justify-between'>
                    <div>
                    <h3 className='text-xl font-semibold mb-2'>{prod.name}</h3>
                    <h3 className='text-lg text-gray-600 mb-4'>{prod.price}</h3>
                    <button onClick={() => addToCart({ id: prod.id })}
                        className = "w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover: bg-blue-700 transition-colors cursor-pointer"> Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
