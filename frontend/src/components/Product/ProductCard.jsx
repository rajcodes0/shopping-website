import { Link } from "react-router"
import useCartStore from "../../Store/CartStore"
import toast from 'react-hot-toast'

function ProductCard({ product }) {
  const addToCart = useCartStore(state => state.addToCart)

  const handleAdd = (e) => {
    e.preventDefault()   // stops Link from navigating
    e.stopPropagation()  // stops click from bubbling up to Link
    addToCart(product)
    toast.success("Product added")
  }

  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-800 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-full w-full p-4"
          />
        </div>

        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              ${product.price}
            </h1>

            
            <button
              onClick={handleAdd}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm sm:text-base transition"
            >
              Add
            </button>
          </div>

          <p className="text-gray-300 text-sm line-clamp-2">
            {product.description || "No description available"}
          </p>

          <p className="text-center text-xs sm:text-sm text-gray-400">
            GO FOR IT
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
