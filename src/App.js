import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProfileScreen from './pages/ProfileScreen';
import ShippingScreen from './pages/ShippingScreen';
import PaymentScreen from './pages/PaymentScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen';
import OrderScreen from './pages/OrderScreen';
import UserListScreen from './pages/UserListScreen';
import UserEditScreen from './pages/UserEditScreen';
import ProductListScreen from './pages/ProductListScreen';
import ProductEditScreen from './pages/ProductEditScreen';
import OrderListScreen from './pages/OrderListScreen';
import Footer from './components/Footer';
import TopRatedCarousel from './components/TopRatedCarousel';

function App() {
  return (
    <Router>
      <Header />
      <TopRatedCarousel />
      <div className="App">
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/signIn" element={<LoginScreen />}></Route>
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route
                path="/admin/users"
                element={<UserListScreen />}
              />
              <Route
                path="/admin/orders"
                element={<OrderListScreen />}
              />
              <Route
                path="/admin/products"
                element={<ProductListScreen />}
                exact
              />
              <Route
                path="/admin/products/:pageNumber"
                element={<ProductListScreen />}
                exact
              />
              <Route
                path="/placeorder"
                element={<PlaceOrderScreen />}
              />
              <Route
                path="/product/:id"
                element={<ProductScreen />}
              />
              <Route
                path="/search/:keyword"
                element={<HomeScreen />}
                exact
              />
              <Route
                path="/page/:pageNumber"
                element={<HomeScreen />}
              />
              <Route
                path="/search/:keyword/page/:pageNumber"
                element={<HomeScreen />}
              />
              <Route
                path="/user/:id/edit"
                element={<UserEditScreen />}
              />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
              <Route path="cart">
                <Route index element={<CartScreen />} />
                <Route path=":id" element={<CartScreen />} />
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
