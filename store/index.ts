import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  quantity: number;
  deliveryOption: {
    id: number;
    name: string;
    cost: number;
  };
}

interface State {
  cartItems: Product[];
}

export const useCartStore = defineStore('cart', {
  state: (): State => ({
    cartItems: [],
  }),
  getters: {
    cartTotal: (state) =>
      state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity + item.deliveryOption.cost,
        0
      ),
  },
  actions: {
    addToCart(product: Product) {
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        this.cartItems.push(product);
      }
    },
    updateCart(cartItems: Product[]) {
      this.cartItems = cartItems;
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});