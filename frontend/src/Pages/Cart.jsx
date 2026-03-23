import { Link } from 'react-router'
import useCartStore from '../Store/CartStore'

function Cart() {
  const cartItems = useCartStore(state => state.cartItems)
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const updateQuantity = useCartStore(state => state.updateQuantity)

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">Your cart is empty</p>
        <Link to="/products" className="text-black underline mt-4 inline-block">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-medium mb-6">
        Your cart <span className="text-gray-400 text-sm font-normal">({cartItems.length} items)</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Cart Items */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4 p-4 border rounded-xl items-center">
              <img src={item.image} className="w-20 h-20 object-contain bg-gray-50 rounded-lg p-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium leading-snug">{item.title}</p>
                <p className="text-xs text-gray-400 capitalize mt-1 mb-3">{item.category}</p>
                <div className="flex items-center gap-3">

                  {/* Quantity */}
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-7 h-7 bg-gray-100 text-lg flex items-center justify-center"
                    >−</button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 bg-gray-100 text-lg flex items-center justify-center"
                    >+</button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-400"
                  >Remove</button>

                  <span className="ml-auto font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border rounded-xl p-5 h-fit sticky top-4">
          <p className="font-medium mb-4">Order summary</p>
          <div className="flex justify-between text-sm text-gray-500 mb-3">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mb-3">
            <span>Shipping</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between font-medium border-t pt-3 mt-1">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/checkout">
            <button className="w-full mt-4 bg-black text-white py-2.5 rounded-lg text-sm font-medium">
              Proceed to checkout
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Cart