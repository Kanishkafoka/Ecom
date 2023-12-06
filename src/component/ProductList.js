import React from 'react'; 

function ProductList({  product ,product1 ,product2,addToCart,addToCart1,addToCart2 }) {
  return (
    <div className='flex'>
      {Array.isArray(product) &&
        product.map((productItem, productIndex) => {
          return (
            <div key={productIndex} style={{ width: '33%' }}>
              <div className='product-item'>
                <img src={productItem.url} alt={productItem.name} width="100%" />
                <p>{productItem.name} | {productItem.category} </p>
                <p> {productItem.seller} </p>
                <p> Rs. {productItem.price} /-</p>
                <button style={{backgroundColor:"red"}} onClick={() => addToCart(productItem)}>Add To Cart</button>
              </div>
            </div>
          );
        })}


{Array.isArray(product1) &&
        product1.map((productItem1, productIndex1) => {
          return (
            <div key={productIndex1} style={{ width: '33%' }}>
              <div className='product-item'>
                <img src={productItem1.url} alt={productItem1.name} width="100%" />
                <p>{productItem1.name} | {productItem1.category} </p>
                <p> {productItem1.seller} </p>
                <p> Rs. {productItem1.price} /-</p>
                <button onClick={() => addToCart1(productItem1)}>Add To Cart</button>
              </div>
            </div>
          );
        })}


{Array.isArray(product2) &&
        product2.map((productItem2, productIndex2) => {
          return (
            <div key={productIndex2} style={{ width: '33%' }}>
              <div className='product-item'>
                <img src={productItem2.url} alt={productItem2.name} width="100%" />
                <p>{productItem2.name} | {productItem2.category} </p>
                <p> {productItem2.seller} </p>
                <p> Rs. {productItem2.price} /-</p>
                <button onClick={() => addToCart2(productItem2)}>Add To Cart</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductList;