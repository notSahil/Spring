import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
import ProductPage from './customer/Components/Product/ProductPage/ProductPage';
// import Routers from './Routers/Routers';

function App() {
  const isAdmin=true;
  return (
    <div className="">
      
      <Routes>
  <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        <Route path="/products/*" element={<ProductPage />} /> {/* New route for product page */}
        <Route path="*" element={<NotFound />} /> {/* Route for 404 Not Found */}
      </Routes>
    </div>
  );
}

export default App;