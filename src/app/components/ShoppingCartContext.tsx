"use client"
import React, { createContext, useState, ReactNode } from "react";

interface ShoppingCartContextProps {
  itemsInShoppingCart: boolean;
  setItemsInShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
  handleShoppingCart: () => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  itemsInShoppingCart: false,
  setItemsInShoppingCart: () => {},
  handleShoppingCart: () => {},
});

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [itemsInShoppingCart, setItemsInShoppingCart] =
    useState<boolean>(false);

  const handleShoppingCart = () => {
    setItemsInShoppingCart(true);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        itemsInShoppingCart,
        setItemsInShoppingCart,
        handleShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
