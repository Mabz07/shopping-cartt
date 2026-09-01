"use client"
import { cart } from '@/data/cart'

export default function ProductCard({name, price}) {
    return (
       <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-wd w-full shadow-sm text-black">
        <h2 className='text-2xl font-bold mb-4 border-b pb-2'> Cart Items</h2>

        <div className=' flex flex-col gap-4'>
            {cart.map((item,index) => (
        <div key={'${item.id}-${index}'} className='flex justify-between items-center border-b pb-2'>
            <h3 className='text-lg font-medium'>{item.name}</h3>
            <p className='text-gray-700'>${item.price?.toFixed(2)}</p>
        </div>
        
            ))}
        </div>
        </div>

    )
}
