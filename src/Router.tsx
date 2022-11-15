import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'

import { Cart } from './page/Cart'
import { Checkout } from './page/Checkout'
import { Home } from './page/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
