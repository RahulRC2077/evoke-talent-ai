import { createContext, useContext, useState, ReactNode } from 'react';

interface Artist {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  location: string;
}

interface CartContextType {
  cart: Artist[];
  addToCart: (artist: Artist) => void;
  removeFromCart: (artistId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Artist[]>(() => {
    const saved = localStorage.getItem('artiq-cart');
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (artist: Artist) => {
    setCart(prev => {
      const exists = prev.find(a => a.id === artist.id);
      if (exists) return prev;
      const newCart = [...prev, artist];
      localStorage.setItem('artiq-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (artistId: string) => {
    setCart(prev => {
      const newCart = prev.filter(a => a.id !== artistId);
      localStorage.setItem('artiq-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('artiq-cart');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
