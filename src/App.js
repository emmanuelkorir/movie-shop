import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <HomeScreen />
        <ProductScreen />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
