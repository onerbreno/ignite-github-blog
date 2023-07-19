import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
