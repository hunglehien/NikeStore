import {useContext} from 'react'
import {ThemeContext} from '../App'

export default function ShopItem() {
    const [products, ,onAdd, , buttonElement]  = useContext(ThemeContext)
    
  return (
    
      <div className="shop-item">
        {products.map(item => (
          <div 
          key={item.id}
          className="shop-item">
            
          <div
            className="shop-item-image"
            style={{
              backgroundColor: item.color
            }}
          >
            <img
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="shop-item-name">{item.name}</div>
          <div className="shop-item-description">
            {item.description}
          </div>
          <div className="shop-item-bottom">
            <div className="shop-item-price">${item.price}</div>
            <div 
            ref = {buttonElement}
            className="shop-item-button"
            onClick={() => onAdd(item)}
            data-item-id={item.id}><p>ADD TO CART</p></div>
          </div>
        </div>
        ))}
      </div>
    
  )
}
