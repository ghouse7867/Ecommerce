import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Product = (props) => {
  const {id,title, price, image } = props.data;

  const { cartItems, addToCart } = useContext(ShopContext);
  

  const cartItemCount = cartItems[id];
 
  
  return (
    <div className="product">
    
      <img alt ="/" src={image} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p className="price"> <b>$</b>{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart{cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
