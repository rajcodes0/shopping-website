import { useState, useEffect } from "react"
import { Link } from "react-router"
import { getAllProducts, getCategories } from "../Services/Api"
import ProductCard from "../components/Product/ProductCard"

function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllProducts().then(data => setProducts(data.slice(0, 8)))
    getCategories().then(data => setCategories(data))
  }, [])

  return (
    <div className="flex flex-col gap-16 pb-16">

    
      <section className="bg-black text-white px-6 py-20 flex flex-col items-center text-center gap-6">
        <p className="text-sm tracking-widest text-gray-400 uppercase">
          New Collection 2025
        </p>
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
          Find What You Love. Buy What You Need.
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-xl">
          Explore thousands of products across all categories — delivered fast, priced right.
        </p>
        <Link
          to="/products"
          className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>
      </section>

      
      <section className="px-6">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(catgry => (
            <Link
              key={catgry}
              to={`/products?category=${catgry}`}
              className="bg-gray-100 hover:bg-black hover:text-white transition rounded-2xl p-6 text-center capitalize font-medium text-sm"
            >
              {catgry}
            </Link>
          ))}
        </div>
      </section>

   
      <section className="px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <Link
            to="/products"
            className="text-sm text-gray-500 hover:text-black transition underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home
