import { useState } from "react"
import { useNavigate } from "react-router"
import useCartStore from "../Store/CartStore"
import toast from "react-hot-toast"

function Checkout() {
  const { cartItems, clearCart } = useCartStore()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOrder = (e) => {
    e.preventDefault()

    // basic validation
    const isEmpty = Object.values(form).some(val => val.trim() === "")
    if (isEmpty) {
      toast.error("Please fill all fields")
      return
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty")
      return
    }

    // place order — later this will call your backend API
    clearCart()
    toast.success("Order placed successfully!")
    navigate("/")
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-8">Checkout</h1>

      <form onSubmit={handleOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left — Form */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Delivery Info */}
          <div className="border rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="font-medium text-lg">Delivery Information</h2>

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="border px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-black/10 text-sm"
            />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-black/10 text-sm"
            />
            <input
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              className="border px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-black/10 text-sm"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="border px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-black/10 text-sm"
              />
              <input
                name="zip"
                placeholder="ZIP Code"
                value={form.zip}
                onChange={handleChange}
                className="border px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-black/10 text-sm"
              />
            </div>
          </div>

          {/* Payment Info */}
          <div className="border rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="font-medium text-lg">Payment Details</h2>

            <input
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleChange}
              maxLength={16}
              className="border px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-black/10 text-sm"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                maxLength={5}
                className="border px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-black/10 text-sm"
              />
              <input
                name="cvv"
                placeholder="CVV"
                value={form.cvv}
                onChange={handleChange}
                maxLength={3}
                className="border px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-black/10 text-sm"
              />
            </div>
          </div>

        </div>

        {/* Right — Order Summary */}
        <div className="flex flex-col gap-4">
          <div className="border rounded-2xl p-6 flex flex-col gap-4 sticky top-4">
            <h2 className="font-medium text-lg">Order Summary</h2>

            {/* Cart Items */}
            <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    className="w-12 h-12 object-contain bg-gray-50 rounded-lg p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">{item.title}</p>
                    <p className="text-xs text-gray-400">x{item.quantity}</p>
                  </div>
                  <p className="text-xs font-medium flex-shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 flex flex-col gap-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between font-semibold text-base mt-1">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Place Order
            </button>

            <p className="text-xs text-gray-400 text-center">
              This is a demo — no real payment is processed
            </p>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Checkout


