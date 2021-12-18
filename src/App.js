import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import NavBar from './component/navbar';
import AllProducts from './Home/allProducts';
import ProductDetails from './Home/productDetail';
import './style/style.css'
function App() {
  return (
    <Router>

    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/shop" element={<AllProducts />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
