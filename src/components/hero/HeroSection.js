import React from "react";
import "./heroSection.css";
import heroImage from "../../assets/slide.jpg";

const HeroSection = () => {
  return (
    <div className="hero__wrapper">
      <section className="hero">
        <p className="hero__top-text">بشقاب مهربانی</p>
        <h1 className="hero__header">
          {" "}
          خوراک تازه گیاهی
          <br />
          <span>هر روز با مواد اولیه سالم</span>
        </h1>
        <p className="hero__desc">
          خوراکهای ایرانی و بین المللی گیاهی، خام گیاهی و وگن با مواد اولیه
          <br />
          سالم و ارگانیک هر روز درب منزل شما. اکنون در شیراز
        </p>
        <button className="hero__button">اکنون خرید کنید</button>
      </section>
    </div>
  );
};

export default HeroSection;
