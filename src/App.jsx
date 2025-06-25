import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}
