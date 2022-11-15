import produce from 'immer'

export type CartProps = {
  id: number
  name: string
  amount: number
  imageUrl: string
  value: number
}

export type ProductProps = {
  id: number
  stock: number
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

      return produce(state, (draft) => {
        draft.carts[currentProductIndex].amount =
          draft.carts[currentProductIndex].amount + action.payload.amount
      })
    }
    case 'INCREMENT_PRODUCT': {
      const currentProductIndex = state.carts.findIndex((product) => {
        return product.id === action.payload.id
      })

      return produce(state, (draft) => {
        draft.carts[currentProductIndex].amount += action.payload.increment
      })
    }
    case 'DECREMENT_PRODUCT': {
      const currentProductIndex = state.carts.findIndex((product) => {
        return product.id === action.payload.id
      })

      return produce(state, (draft) => {
        draft.carts[currentProductIndex].amount += action.payload.increment
      })
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        carts: state.carts.filter((product) => product.id !== action.payload),
      }
    }
    case 'REMOVE_ALL': {
      return produce(state, (draft) => {
        draft.carts = []
      })
    }
    default:
      return state
  }
}
