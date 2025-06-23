import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import ProductForm from "./pages/ProductForm";
// import SupplierList from "./pages/SupplierList";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/add" element={<ProductForm />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
        {/* <Route path="suppliers" element={<SupplierList />} /> */}
        <Route path="users" element={<UserList />} />
      {/* </Route> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
