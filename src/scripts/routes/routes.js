import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Contact from '../views/pages/contact';
import Product from '../views/pages/product';
import Dashboard from '../views/pages/dashboard';
import adminProduk from '../views/pages/admin-product';
import formProduk from '../views/pages/form-produk';
import editProduk from '../views/pages/edit-produk';
import About from '../views/pages/about';
import adminCheckout from '../views/pages/admin-checkout';

const routes = {
  '/': Home, // default page
  '/detail': Detail,
  '/login': Login,
  '/register': Register,
  '/contact': Contact,
  '/product': Product,
  '/dashboard': Dashboard,
  '/my-product': adminProduk,
  '/form-produk': formProduk,
  '/edit-produk/:id': editProduk,
  '/about': About,
  '/checkout': adminCheckout,
  '/detail': Detail,
};

export default routes;
