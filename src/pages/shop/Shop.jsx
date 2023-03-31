
import { Product } from "./product";
import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
   
  const { PRODUCTS } = useContext(ShopContext);
  
  return (
    <div className="shop">
      <div className="shopTitle">
       <h2>ECOMMERCE</h2>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
       
      </div>
    </div>
    
  );
};

