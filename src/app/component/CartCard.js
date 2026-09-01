import ProductCard from "@/component/ProductCard";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white text-black">
      <h1 className = "text-3xl font-bold  text-gray-800"> PRODUCTS</h1>
      <ProductCard/>
      <Link href="/checkout" ><button className="mt-4 px-6 py-2 bg -black text-white rounded-lg  hover:bg-gray-800 transition-colors cursor-pointer "> Go to checkout page </button> </Link>
    </div>
  );
}
