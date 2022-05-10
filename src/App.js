import data from './data'
import './App.css';
import {createContext} from 'react';
import {useState, useEffect, useRef} from 'react'
import Main from './components/Main'


export const ThemeContext = createContext()
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"))

function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);
  const buttonElement = useRef()
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  })

  

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    
    if (exist) {
      

      setCartItems(
        cartItems.map(x => x.id === product.id ? {...exist, count: exist.count + 1} : x)
        
      );
      
    } else {
      setCartItems([...cartItems, {...product, count: 1}]);
      
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.count === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, count: exist.count - 1 } : x
        )
      );
    }
  };

  return (
    <ThemeContext.Provider value={ [products, cartItems, onAdd, onRemove, buttonElement] }>
      
      <Main />
      
    </ThemeContext.Provider>
    
  );
}

export default App;
