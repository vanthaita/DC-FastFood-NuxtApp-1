import { defineStore } from 'pinia';

// Define types for the state
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

interface UserProfile {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
  day: string;
  month: string;
  year: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface OrderInfo {
  recipientName: string;
  recipientPhone: string;
  deliveryOption: {
    id: number;
    name: string;
    cost: number;
  };
}

interface State {
  cartItems: Product[];
  userProfile: UserProfile;
  defaultAddress: Address;
  orderInfo: OrderInfo;
}

// Define the initial state
const initialState: State = {
  cartItems: [],
  userProfile: {
    firstName: 'Lê Thanh',
    lastName: 'Tài',
    phone: '123456789',
    email: '22521276@gm.uit.edu.vn',
    gender: 'male',
    day: '1',
    month: '1',
    year: '1990',
  },
  defaultAddress: {
    street: '123 Main St',
    city: 'HCM',
    state: 'HCM',
    zip: '700000',
  },
  orderInfo: {
    recipientName: 'Lê Thanh Tài',
    recipientPhone: '123456789',
    deliveryOption: {
      id: 1,
      name: 'Standard',
      cost: 5.00,
    },
  },
};

// Create the store
export const useStore = defineStore('main', {
  state: (): State => initialState,
  getters: {
    cartItems: (state) => state.cartItems,
    userProfile: (state) => state.userProfile,
    defaultAddress: (state) => state.defaultAddress,
    orderInfo: (state) => state.orderInfo,
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
    updateUserProfile(profile: UserProfile) {
      this.userProfile = profile;
    },
    updateDefaultAddress(address: Address) {
      this.defaultAddress = address;
    },
    updateOrderInfo(orderInfo: OrderInfo) {
      this.orderInfo = orderInfo;
    },
  },
});