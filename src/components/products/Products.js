import React from "react";

import "./products.css";

//images
import kaktoos from "../../assets/kaktoos.jpg";
import headphone from "../../assets/headphone.jpg";
import heart from "../../assets/heart.jpg";

const Products = () => {
  return (
    <div className="products__wrapper">
      <div className="product white">
        <img src={headphone} className="product__image" alt="product-img" />
        <p className="product__top-title">از سراسر دنیا خرید کنید</p>
        <h2 className="product__title">
          کالا های دیجیتال اصل <br />
          در فروشگاه مهراشاپ
        </h2>
        <p className="product__button border__white">خرید کنید</p>
      </div>

      <div className="product">
        <img src={heart} className="product__image" alt="product-img" />
        <p className="product__top-title">انواع میوه های فصل</p>
        <h2 className="product__title">
          تا 50% تخفیف
          <br />
          <span style={{ color: "#E68588", fontWeight: "normal" }}>
            ارگانیک و تازه
          </span>
        </h2>
        <p className="product__button">خرید کنید</p>
      </div>

      <div className="product">
        <img src={kaktoos} className="product__image" alt="product-img" />
        
        <h2 className="product__title">
          کاکتوس های<br />
          ست شده و زیبا
        </h2>
        <p className="product__button">خرید کنید</p>
      </div>
    </div>
  );
};

export default Products;
