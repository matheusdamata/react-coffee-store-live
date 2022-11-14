import React, { createContext, ReactNode, useReducer } from 'react'
import { CartProps, ProductProps, userReducer } from '../reducer/userReducer'

type ContextType = {
  carts: CartProps[]
  products: ProductProps[]
  dispatch: React.Dispatch<any>
}

interface ContextProviderType {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [userState, dispatch] = useReducer(userReducer, {
    carts: [],
    products: [],
  })

  const { carts, products } = userState

  return (
    <Context.Provider value={{ carts, products, dispatch }}>
      {children}
    </Context.Provider>
  )
}
