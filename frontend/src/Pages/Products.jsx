import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { getAllProducts, getCategories, getProductsByCategory } from "../Services/Api";
import ProductCard from "../components/Product/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  // filter by search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // fetch categories once
  useEffect(() => {
    getCategories().then(data => setCategories(data))
  }, [])

  // fetch products when category changes
  useEffect(() => {
    let ignore = false

    const fetch = async () => {
      setLoading(true)
      const data = selectedCategory === "all"
        ? await getAllProducts()
        : await getProductsByCategory(selectedCategory)

      if (!ignore) {
        setProducts(data)
        setLoading(false)
      }
    }

    fetch()
    return () => { ignore = true }

  }, [selectedCategory])

  return (
    <div className="p-6">

      {/* Search feedback */}
      {searchQuery && (
        <p className="text-sm text-gray-500 mb-4">
          Results for <span className="font-medium text-black">"{searchQuery}"</span>
        </p>
      )}

    
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-1.5 rounded-full text-sm capitalize transition
            ${selectedCategory === "all"
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
        >
          All
        </button>

        {categories.map(catgry => (
          <button
            key={catgry}
            onClick={() => setSelectedCategory(catgry)}
            className={`px-4 py-1.5 rounded-full text-sm capitalize transition
              ${selectedCategory === catgry
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
          >
            {catgry}
          </button>
        ))}
      </div>

    
      {loading ? (
        <p className="text-center mt-10 text-gray-400">Loading...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center mt-10 text-gray-400">No products found for "{searchQuery}"</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  )
}

export default Products;
