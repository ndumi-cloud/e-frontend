import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  login: (email: string, password: string) => Promise<void>; 
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => currItems.filter(item => item.id !== id));
  }

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      const res = await axios.post('/api/auth/register', { username, email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['x-auth-token'];
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        login,
        register, 
        logout,
        isLoggedIn, // Provide the isLoggedIn state
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}



// src/context/ShoppingCartContext.tsx
// import { createContext, ReactNode, useContext, useState, useEffect } from "react";
// import axios from 'axios';
// import { ShoppingCart } from "../components/ShoppingCart";

// type ShoppingCartProviderProps = {
//   children: ReactNode;
// };

// type CartItem = {
//   id: string;
//   quantity: number;
// };

// type ShoppingCartContext = {
//   openCart: () => void;
//   closeCart: () => void;
//   getItemQuantity: (id: string) => number;
//   increaseCartQuantity: (id: string) => void;
//   decreaseCartQuantity: (id: string) => void;
//   removeFromCart: (id: string) => void;
//   cartQuantity: number;
//   cartItems: CartItem[];
//   login: (email: string, password: string) => Promise<void>;
//   register: (username: string, email: string, password: string) => Promise<void>;
//   logout: () => void;
// };

// const ShoppingCartContext = createContext({} as ShoppingCartContext);

// export function useShoppingCart() {
//   return useContext(ShoppingCartContext);
// }

// export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common['x-auth-token'] = token;
//       fetchCart();
//     }
//   }, [token]);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get('/api/cart');
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error fetching cart', error);
//     }
//   };

//   const cartQuantity = cartItems.reduce(
//     (quantity, item) => item.quantity + quantity,
//     0
//   );

//   const openCart = () => {
//     console.log('Opening cart');
//     setIsOpen(true);
//   };
//   useEffect(() => {
//     console.log("isOpenChanged:" , isOpen)
//   }, [isOpen])

//   const closeCart = () => setIsOpen(false);

//   function getItemQuantity(id: string) {
//     return cartItems.find(item => item.id === id)?.quantity || 0;
//   }

//   async function increaseCartQuantity(id: string) {
//     try {
//       const response = await axios.post('/api/cart/add', { itemId: id, quantity: 1 });
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error increasing cart quantity', error);
//       if (axios.isAxiosError(error)) {
//         console.error('Response data:', error.response?.data);
//         console.error('Response status:', error.response?.status);
//       }
//     }
//   }

//   async function decreaseCartQuantity(id: string) {
//     try {
//       const item = cartItems.find(item => item.id === id);
//       if (item?.quantity === 1) {
//         await removeFromCart(id);
//       } else {
//         const response = await axios.post('/api/cart/update', { itemId: id, quantity: (item?.quantity || 0) - 1 });
//         setCartItems(response.data);
//       }
//     } catch (error) {
//       console.error('Error decreasing cart quantity', error);
//     }
//   }

//   async function removeFromCart(id: string) {
//     try {
//       const response = await axios.post('/api/cart/remove', { itemId: id });
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error removing from cart', error);
//     }
//   }

  // const login = async (email: string, password: string) => {
  //   try {
  //     const res = await axios.post('/api/auth/login', { email, password });
  //     setToken(res.data.token);
  //     localStorage.setItem('token', res.data.token);
  //   } catch (error) {
  //     console.error('Login failed', error);
  //   }
  // };

  // const register = async (username: string, email: string, password: string) => {
  //   try {
  //     const res = await axios.post('/api/auth/register', { username, email, password });
  //     setToken(res.data.token);
  //     localStorage.setItem('token', res.data.token);
  //   } catch (error) {
  //     console.error('Registration failed', error);
  //   }
  // };

  // const logout = () => {
  //   setToken(null);
  //   localStorage.removeItem('token');
  //   delete axios.defaults.headers.common['x-auth-token'];
  //   setCartItems([]);
  // };

//   return (
//     <ShoppingCartContext.Provider
//       value={{
//         getItemQuantity,
//         increaseCartQuantity,
//         decreaseCartQuantity,
//         removeFromCart,
//         openCart,
//         closeCart,
//         cartItems,
//         cartQuantity,
//         login,
//         register,
//         logout,
//       }}
//     >
//       {children}
//       <ShoppingCart isOpen={isOpen} />
//     </ShoppingCartContext.Provider>
//   );
// }
