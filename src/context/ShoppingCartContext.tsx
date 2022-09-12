import { createContext, useContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}


const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }:
ShoppingCartProviderProps) {
 return (
    <ShoppingCartContext.Provider value = {{}}>
        {children}
    </ShoppingCartContext.Provider>
 )
}
    