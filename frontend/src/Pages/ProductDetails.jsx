import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProductById } from '../Services/Api'
import useCartStore from '../Store/CartStore'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const addToCart = useCartStore(state =>state.addToCart)

  useEffect(() => {
    getProductById(id).then(data => {
      setProduct(data)
      setLoading(false)
    })
  }, [id])

  if (loading) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="flex gap-10 p-10">

      {/* Left - Image */}
      <div className="w-1/2 flex items-center justify-center">
        <img src={product.image} className="h-80 object-contain" />
      </div>

      {/* Right - Details */}
      <div className="w-1/2 flex flex-col gap-4">
        <span className="text-sm text-gray-400 capitalize">{product.category}</span>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <p className="text-2xl font-bold text-green-600">${product.price}</p>
        <button className="bg-black text-white px-6 py-2 rounded-lg w-fit" onClick={()=>addToCart(product)}
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductDetail