import { create } from 'zustand'

const useCartStore = create((set) => ({

  // this is your cart array, starts empty
  cartItems: [],

  // ADD item to cart
  addToCart: (product) => set((state) => {

    // check if product already exists in cart
    const exists = state.cartItems.find(item => item.id === product.id)

    if (exists) {
      // already in cart → just increase quantity by 1
      return {
        cartItems: state.cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
    }

    // not in cart → add it fresh with quantity 1
    return {
      cartItems: [...state.cartItems, { ...product, quantity: 1 }]
    }
  }),

  // REMOVE item from cart by id
  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== id)
  })),

  // CHANGE quantity of an item
  updateQuantity: (id, quantity) => set((state) => ({
    cartItems: state.cartItems.map(item =>
      item.id === id
        ? { ...item, quantity }
        : item
    )
  })),

  // EMPTY the entire cart
  clearCart: () => set({ cartItems: [] })

}))

export default useCartStore
