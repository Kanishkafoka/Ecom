import React from 'react';

const CartList = ({itemList, setItemList}) => {

    const removeFromCart = (productId) => {
        const updatedCart = itemList.filter(item => item.id !== productId);
        setItemList(updatedCart)
    }

    const addToCart = (productId1) => {
        const updatedCart = itemList.map(item => {
            if (item.id === productId1) {
                
                return { ...item, quantity: item.quantity + 1 };
            }
            return itemList;
        });
        setItemList(updatedCart);

    }

    
   return (
        <div>
            <div>
            <ul>
                {itemList.map(item => (
                    <li key={item.id}>
                         
                        {item.name} -{<img src={item.url} alt={item.name} style={{ width: '50px', height: '50px' }} />} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        <button onClick={() => addToCart(item.id)}>Add</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default CartList;