import React from 'react';

const CartList = ({itemList, setItemList}) => {
    const removeFromCart = (productId) => {
        const updatedCart = itemList.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
        setItemList(updatedCart.filter((item) => item.quantity > 0));
      };
    const addToCart = (productId) => {
        const updatedCart = itemList.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setItemList(updatedCart);
      };
      const calculateItemTotal = (item) => {
        return (item.quantity || 0) * item.price;
      };
    
      const calculateOverallTotal = () => {
        return itemList.reduce((total, item) => total + calculateItemTotal(item), 0);
      };
   return (
        <div>
            <ul>
            {itemList.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            {item.name} - {item.weight} - RS-{item.price} <br/> - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>-1</button>
            <button onClick={() => addToCart(item.id)}>+1</button>
          </li>
        ))}
            </ul>

            <div>
        Overall Total: RS-{calculateOverallTotal()}
      </div>
    
        </div>
    );
}

export default CartList;