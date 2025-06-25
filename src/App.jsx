import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import MagentoDemo from './components/MagentoDemo'; // Bonus demo route (not linked)

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* Hidden Magento demo route (for bonus only) */}
        <Route path="/magento-demo" element={<MagentoDemo />} />
      </Routes>
    </div>
  );
}
