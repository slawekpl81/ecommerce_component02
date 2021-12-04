import React from 'react';

function CartItem({plate, setPlates}) {
    const handleAddToCart = (value) => {
        setPlates(prevState => {
            let temp = [...prevState]
            return temp.map(item => {
                if (item.data.id === plate.data.id) item.count += value;
                return item
            })
        })
    }
    return (
        <div className="cartPlate">
            <div className="cartItemData">
                <p>{plate.data.name}</p>
                <p>${plate.data.price}</p>
                <p>{plate.count}</p>
                <p>{(plate.data.price * plate.count).toFixed(2)}</p>
                <button className="" onClick={() => handleAddToCart(1)}>
                    +
                </button>
                <button onClick={() => handleAddToCart(-1)}>
                    -
                </button>
            </div>
        </div>
    );
}

export default CartItem;