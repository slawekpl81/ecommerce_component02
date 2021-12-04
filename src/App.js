import './App.css';
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import {useState} from "react";
import menu from './data/menu_data';

function App() {
    const defaultPlates = () => {
        const temp = [];
        for (let x of menu) temp.push({data: x, count: 0})
        return temp;
    }
    const [plates, setPlates] = useState(defaultPlates());
    return (
        <div className="App">
            <div className="bg bg1"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <Menu plates={plates}
                  setPlates={setPlates}
            />
            <Cart plates={plates}
                  setPlates={setPlates}
            />
        </div>
    );
}

export default App;
