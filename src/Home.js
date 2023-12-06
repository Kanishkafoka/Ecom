import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import ProductList from './component/ProductList';
import CartList from './component/CartList';


function Home({itemList, setItemList}) {
  const [isShow,setIsshow]=useState(false)
  
  const [filteredProducts, setFilteredProducts] = useState([]);

  const product= [
    {
      id:1,
      url: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      name: 'chicken-burger',
      category: 'Burger',
      seller: 'Burger King',
      price: 358 ,
      quantity: 1
    },

    {
      id:2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUQdnfHJOicLJyrWCCDY5X4ofxB7XruAx0A&usqp=CAU',
      name: 'Cheessy-pizza',
      category: 'Pizza',
      seller: 'Dominos',
      price: 299,
      quantity: 1 
    },


    {
      id:3,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3TTnxaKLxJlNdP-sBU10pjYRQJG_8OLHjA&usqp=CAU',
      name: 'Italian Pasta',
      category: 'Pasta',
      seller: 'Akhri-Pasta',
      price: 500,
      quantity: 1
    },

    {
      id:4,
      url: 'https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg',
      name: 'Tandoori chicken',
      category: 'Chicken',
      seller: 'Yum-yumm',
      price: 450,
      quantity: 1
    },

    {
      id:5,
      url: 'https://img-global.cpcdn.com/recipes/991bc444a26af47e/400x400cq70/photo.jpg',
      name: 'Chicken Biryani',
      category: 'Biryani',
      seller: 'Shahii',
      price: 2400,
      quantity: 1
    },

    {
      id:6,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHPHuC3KA_Imex4UrsoBNbyI0irURYaBWGw&usqp=CAU',
      name: 'Grilled Fish',
      category: 'fish',
      seller: 'FISHY PISHY',
      price: 1000,
      quantity: 1
    },

    {
      id:7,
      url: 'https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg',
      name: ' Dumplings',
      category: 'Dumplings',
      seller: ' Momoss',
      price: 1000,
      quantity: 1
    },
  ]

  const product1 = [
    {
      id:101,
      url: 'https://vegecravings.com/wp-content/uploads/2023/08/Healthy-Pav-Bhaji-Recipe-Step-By-Step-Instructions-scaled.jpg',
      name: 'Pav-Bhaji',
      category: 'Veg',
      seller: 'VEGGie',
      price: 358 ,
      quantity: 1
    },

    {
      id:102,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAh2aAZh3sccd_TkWKgIBYjZFwuBiAwx5E1N4dBuoBknPA4EtzAy7QS6h8aXNjOVW-q5M&usqp=CAU',
      name: 'Cheessy-pizza',
      category: 'Pizza',
      seller: 'Dominos',
      price: 299,
      quantity: 1
    },

    {
      id:103,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_EryY8ODjR1DNs2WZvO0cSs8YGTUtmCe2Q&usqp=CAU',
      name: 'Chole-Bature',
      category: 'chole',
      seller: 'VEGGie',
      price: 500,
      quantity: 1
    },

    {
      id:104,
      url: 'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg',
      name: 'Tandoor paneer',
      category: 'paneer',
      seller: 'Yum-yumm',
      price: 450,
      quantity: 1
    },


    {
      id:105,
      url: 'https://healthynibblesandbits.com/wp-content/uploads/2019/07/Paneer-Tikka-Masala-FF3.jpg',
      name: 'Tikka Masala',
      category: 'Veg Masala',
      seller: 'Shahii',
      price: 2400,
      quantity: 1
    },

    {
      id:106,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCwZMLuE-dG5xnx0vDI9Zdjph5uU30nVbBw&usqp=CAU',
      name: 'Aloo paratha',
      category: 'paratha',
      seller: 'tum tum',
      price: 1000,
      quantity: 1
    },

    {
      id:107,
      url: 'https://curlytales.com/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-16-at-13.45.11-e1539677763479.jpeg',
      name: 'Veg Thali ',
      category: 'VEGGi',
      seller: 'Maharaja Thali',
      price: 1000,
      quantity: 1
    },
  ]

  const product2 =[
    {
      id:201,
      url: 'https://skydecklounge.in/wp-content/uploads/2022/01/Cafe-Latte-Coffee.jpg',
      name: ' latte Coffee',
      category: 'Coffee',
      seller: 'C&C',
      price: 358 ,
      quantity: 1
    },

    {
      id:202,
      url: 'https://hips.hearstapps.com/hmg-prod/images/hearst-truvia-c121887-edit-1633468112.jpg?crop=1xw:0.8441720860430215xh;center,top&resize=1200:*',
      name: 'Apple Cider Coffee',
      category: 'coffee',
      seller: 'C&C',
      price: 299,
      quantity: 1
    },

    {
      id:203,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRuY3sigKHBAcezvjcjx42WxX4rQI9FlALw&usqp=CAU',
      name: ' Biscof Coffee',
      category: 'Coffee',
      seller: 'C & Day',
      price: 500,
      quantity: 1
    },

    {
      id:204,
      url: 'https://thedairyfreemenu.com/wp-content/uploads/2022/11/rose-latte-featured-image.jpg',
      name: ' Pink Latte',
      category: 'Coffee',
      seller: 'Cafee',
      price: 450,
      quantity: 1
    },

    {
      id:205,
      url: 'https://www.keepingthepeas.com/wp-content/uploads/2021/04/almond-milk-latte-11.jpg',
      name: 'Black Coffee',
      category: 'coffee',
      seller: 'Tim Hortons',
      price: 2400,
      quantity: 1
    },

    {
      id:206,
      url: 'https://homemadeheather.com/wp-content/uploads/2021/06/1-8.jpg',
      name: 'BLUE CURACAO MOJITO',
      category: 'Mojito',
      seller: ' Drinks',
      price: 1000,
      quantity: 1
    },

    {
      id:207,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_Je8KoOFxaBgwIUU_YvAV19MjBGPOmoqPA&usqp=CAU',
      name: 'Bubble Tea',
      category: 'BOBA',
      seller: 'BOBA BOBA',
      price: 1000,
      quantity: 1
    },
  ];

  const addToCart=(productItem)=>{  
    console.log(productItem);

    setItemList([...itemList,productItem])
    setTimeout(()=>{
    },3000)
  }
  const addToCart1=(productItem1)=>{  
    console.log(productItem1);
    setItemList([...itemList,productItem1])
    setTimeout(()=>{
      
    },3000)
  }
  const addToCart2=(productItem2)=>{ 
    console.log(productItem2); 
    setItemList([...itemList,productItem2])
    setTimeout(()=>{
      
    },3000)    
  }
  const cartClick=()=>{
    setIsshow(!isShow)
  }

  
  return (
    
    <div>
     
      <Header count={itemList.length}  cartClick={cartClick}
       
       setFilteredProducts={setFilteredProducts}
       products={[...product, ...product1, ...product2]}
     
></Header>


      {isShow?
      <>  <div className='order'>
        <h1 >Shopping Cart</h1>
        <br/>


        <div className='ordeitem'>
          <h3> My Order</h3> 
           <br/> 
      <CartList itemList={itemList}     setItemList={setItemList}  /> 
      </div>
      

      </div>
       </>:""
       
    }
<div className='back'>
        <h1> <a name='nonveg'> Non-veg </a> </h1>
      
        
          <ProductList 
           product={filteredProducts.length > 0 ? filteredProducts : product}
           addToCart={addToCart} 
           addToCart1={addToCart1}
            addToCart2={addToCart2} ></ProductList>
      

      <h1><a name='veg'> Veg</a></h1>
       
          <ProductList product={filteredProducts.length > 0 ? filteredProducts : product1} addToCart={addToCart} ></ProductList>
     

<h1> <a name='drinks'> Drinks and more</a></h1>
       
          <ProductList product={filteredProducts.length > 0 ? filteredProducts : product2}addToCart={addToCart} ></ProductList>
    

          </div>
    </div>
    
  );
}


export default Home;
