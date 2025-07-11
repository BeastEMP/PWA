
import { useState, useEffect } from 'react';
import { CartItem, getCartItems, addToCart, updateCartItem, removeFromCart, clearCart } from '@/utils/indexedDB';
import { toast } from '@/hooks/use-toast';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadCart = async () => {
    try {
      const items = await getCartItems();
      setCartItems(items);
    } catch (error) {
      console.error('Error loading cart:', error);
      toast({
        title: "Error",
        description: "Failed to load cart items",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addItem = async (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    try {
      const cartItem: CartItem = { ...item, quantity: item.quantity || 1 };
      await addToCart(cartItem);
      await loadCart();
      toast({
        title: "Added to cart",
        description: `${item.title} has been added to your cart`
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive"
      });
    }
  };

  const updateQuantity = async (id: number, quantity: number) => {
    try {
      if (quantity <= 0) {
        await removeItem(id);
        return;
      }
      await updateCartItem(id, quantity);
      await loadCart();
    } catch (error) {
      console.error('Error updating cart:', error);
      toast({
        title: "Error",
        description: "Failed to update cart item",
        variant: "destructive"
      });
    }
  };

  const removeItem = async (id: number) => {
    try {
      await removeFromCart(id);
      await loadCart();
      toast({
        title: "Removed from cart",
        description: "Item has been removed from your cart"
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast({
        title: "Error",
        description: "Failed to remove item from cart",
        variant: "destructive"
      });
    }
  };

  const clearAllItems = async () => {
    try {
      await clearCart();
      await loadCart();
      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart"
      });
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast({
        title: "Error",
        description: "Failed to clear cart",
        variant: "destructive"
      });
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return {
    cartItems,
    isLoading,
    addItem,
    updateQuantity,
    removeItem,
    clearAllItems,
    getTotalPrice,
    getTotalItems,
    refreshCart: loadCart
  };
};
