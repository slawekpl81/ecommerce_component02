import React from 'react';
import CartItem from "./CartItem";

function Cart({plates, setPlates}) {
    const amount = plates.map(plate => {
        if (plate.count > 0) return plate.count * plate.data.price;
        return 0;
    }).reduce((prevVal, currVal) => prevVal + currVal);

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cartContent">
                {plates.filter(plate => plate.count > 0).map((plate, ind) => (
                    <CartItem
                        key={ind}
                        plate={plate}
                        setPlates={setPlates}
                    />
                ))}
            </div>
            <div>
                <p>Amount: ${amount.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Cart;