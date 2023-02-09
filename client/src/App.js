import Header from "./Componentes/Header";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./Componentes/Footer";
import All from "./Componentes/All";
import Contacto from "./Componentes/Contacto";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import CartContext from "./Componentes/CartContext";
import Mer from "./Componentes/Mer"
import ItemListContainer from "./Componentes/ItemListContainer";
import CartContent from "./Componentes/CartContent";
import Checkout from "./Componentes/Checkout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <CartContext> 
      <BrowserRouter>
      <Header/>
          <Routes>
          <Route path="/" element={<All/>} />
              <Route path="/productos" element={<ItemListContainer/> } />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/:categoria/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/carrito" element={<CartContent/>} />
              <Route path="/checkout" element={<Checkout/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
