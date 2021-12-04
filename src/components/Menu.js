import React from 'react';
import MenuItem from "./MenuItem";
import img1 from '../data/plate__bacon-eggs.png';
import img2 from '../data/plate__chicken-salad.png';
import img3 from '../data/plate__fish-sticks-fries.png';
import img4 from '../data/plate__french-fries.png';
import img5 from '../data/plate__ravioli.png';
import img6 from '../data/plate__salmon-vegetables.png';
import img7 from '../data/plate__spaghetti-meat-sauce.png';
import img8 from '../data/plate__tortellini.png';

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

function Menu({plates, setPlates}) {
    return (
        <div className="menu">
            <h1>Menu</h1>
            <div className="menuItems">
                {plates.map(plate => (
                    <MenuItem key={plate.data.id}
                              plate={plate}
                              imgs={imgs}
                              setPlates={setPlates}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;