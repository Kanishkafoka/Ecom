import React from 'react';
import CartList from './component/CartList';

const CartPage = ({itemList, setItemList}) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <CartList itemList={itemList} setItemList={setItemList} />
      
    </div>
  );
};

export default CartPage;