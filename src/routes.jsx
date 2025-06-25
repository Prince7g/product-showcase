import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import MagentoDemo from './components/MagentoDemo'; // Bonus route

const routes = [
  { path: '/', element: <Home /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '/cart', element: <Cart /> },
  { path: '/magento-demo', element: <MagentoDemo /> }, // optional demo
];

export default routes;
