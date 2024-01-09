
import './App.css'
import Card from './components/card/card'
import { Routes, Route } from "react-router-dom";
import Detail from './page/detail';
import Home from './page/home';
import MainLayout from './layout/MainLayout';
import Add from './page/add';
import Basket from './page/basket';
import Wishlist from './page/wishlist';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/add" element={<Add />} />
          <Route path={`/detail/:id`} element={<Detail />} />
          <Route path={`/basket`} element={<Basket />} />
          <Route path={`/wishlist`} element={<Wishlist />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
