import React,{ useState } from 'react'
import { BrowserRouter  as  Router,  Routes,  Route  } from 'react-router-dom';
// import Front from './component/front';
import Header from './component/Header';
import Signup from './component/Signup';
import './App.css';
import ProductList from './component/ProductList';
// import CartList from './component/CartList';
import Home from './Home';
import MovieCard from './component/net';
import Review from './review';
// import FormComponent from './dev';
import CartPage from './card (1)';
import Ecom from './Ecom';
import Login from './component/main';
// import Quiz from './quiz';


const App = () => {
  const [itemList,setItemList]=useState([]);
  return (
    <div>
        
    <Router>
    <Routes>

    {/* <Route path="/" element={<Header handleShow={() => {}} count={0} />} /> */}
    < Route path="/Home" element={<Home itemList={itemList} setItemList={setItemList}/>} />
    < Route path="/ecom" element={<Ecom/>} />
    < Route path="/" element={<Login/>} />
    < Route path="/header" element={<Header  handleShow={() => {}} count={0}/>} />
    < Route path="/product" element={<ProductList/>} />
    < Route path="/cart" element={<CartPage itemList={itemList} setItemList={setItemList}/>} />
    < Route path="/signup" element={<Signup/>} />
    < Route path="/review" element={<Review/>} />
    < Route path="/movie" element={<MovieCard/>} />
    {/* < Route path="/quiz" element={<Quiz/>} /> */}

    </Routes>
    </Router>

    {/* <Front/> */}

    {/* <FormComponent /> */}
      
    </div>
  )
}

export default App