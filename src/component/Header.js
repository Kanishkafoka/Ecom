import React ,{useState}from 'react';
import './Signup'
// import Quiz from '../quiz';
import '../App.css';
import logo from './assets/foodx-online-food-ordering-system-logo-145CB16578-seeklogo.com.png';
import car from './assets/cart-icon.png';
import {useNavigate} from 'react-router-dom';
import ProductList from './ProductList';
import {  Link } from 'react-router-dom';
// import MovieCard from './component/net';


function Header(props) {
    const [searchTerm, setSearchTerm] = useState('');
 
    const Navigate= useNavigate( )
    const handleclick=()=>{
        Navigate("/signup")
        
        // Navigate("/product")
        // Navigate("/net")
        
    }

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        const filteredProducts = filterProducts(searchTerm);
        props.setFilteredProducts(filteredProducts);
      };
    const handleShow=()=>{
        console.log("cart");
    }
    // const handleMovieClick = () => {
    //     // Navigate to the "/movie" route when the movie button is clicked
    //     Navigate('/movie');
    //   };


    const filterProducts = (term) => {     
        return props.products.filter(product =>
          product.name.toLowerCase().includes(term.toLowerCase())
        );
      };
    return (

        <>
        <div className='button1'>
           <div className='flex shopping-card'>
           <div onClick={() => props.handleShow(false)} > 
                <img src={logo} alt="#" className="logo" />
              FOOdies App
            </div>
          
           
            <div onClick={handleShow}>  
            <img src={car} alt="./CartList.js" className="car" onClick={props.cartClick} />
            
                <sup> {props.count} </sup>
            </div>

            <div className='search-bar'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>


            <div> 
            <button className='revbtn'>
                <a href='#nonveg'>Non-Veg</a>
                </button>
      </div> 

        <div> 
            <button className='revbtn'>
                <a href='#veg'>Veg</a>
                </button>
      </div>   
        

            <div> 
            <button className='revbtn'> <a href='#drinks'>Drinks & More</a> </button>
      </div> 

      <div>
        <button className='revbtn'>
            <Link to={"/ecom"}> Back</Link>

        </button>
      </div>
       </div>
        <div><ProductList/></div>
       </div>


      
        </>
     
    );
}

export default Header