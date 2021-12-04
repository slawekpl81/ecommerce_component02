import React from 'react';

function MenuItem({plate, setPlates, imgs}) {
    const handleAddToCart = () => {
        setPlates(prevState => {
            let temp = [...prevState]
            return temp.map(item => {
                if (item.data.id === plate.data.id) item.count++;
                return item
            })
        })
    }
    return (
        <div className="plate">
            <img src={imgs[plate.data.id - 1]} alt="img"/>
            <div className="itemData">
                <p>{plate.data.name}</p>
                <p>${plate.data.price}</p>
                <button onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default MenuItem;