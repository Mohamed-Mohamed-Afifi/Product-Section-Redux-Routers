// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Products from './components/Products';
import Shard from './components/Shard';
import SingleProduct from './components/SingleProduct';
// import Products from './Products';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Shard />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
