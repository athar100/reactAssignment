import React from 'react';
import './product.css';
import Popup from './Popup';
import { useState } from 'react';

export default function Product(props) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
  setIsOpen(!isOpen);
  }
  const { product, onAdd} = props;

  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>₹{product.price}</div>
      <div>
        <button onClick={togglePopup} > Preview </button>

                          {isOpen && <Popup
                            content={<>
                              <b>{product.description}</b>

                              <button onClick={() => onAdd(product)} >Add To Cart</button>
                            </>}
                            handleClose={togglePopup}
                          />}
      </div>
      <div>
        <button onClick={() => onAdd(product)} >Add To Cart</button>
      </div>


    </div>
  );
}
