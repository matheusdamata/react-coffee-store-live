import produce from 'immer'

export type CartProps = {
  id: number
  name: string
  amount: number
}

export type ProductProps = {
  id: number
  amount: number
  description: string
  imageUrl: string
  name: string
  value: number
}

export type UserType = {
  carts: CartProps[]
  products: ProductProps[]
}

export const userReducer = (state: UserType, action: any) => {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      return produce(state, (draft) => {
        draft.products.push(...action.payload)
      })
    }
    case 'ADD_TO_CART': {
      const currentProductIndex = state.carts.findIndex((product) => {
        return product.id === action.payload.id
      })

      if (currentProductIndex < 0) {
        return produce(state, (draft) => {
          draft.carts.push(action.payload)
        })
      }

      return state
    }
    case 'INCREMENT_PRODUCT': {
      const currentProductIndex = state.products.findIndex((product) => {
        return product.id === action.payload.id
      })

      return produce(state, (draft) => {
        draft.products[currentProductIndex].amount += action.payload.increment
      })
    }
    default:
      return state
  }
}
