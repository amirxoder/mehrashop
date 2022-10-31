import React from "react";
import "./Header.css";
import logo from "../../assets/mehrashop-logo.svg";

//icons
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header__wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="search__box">
        <div className="drop__down">
          <p>همه دسته بندی ها</p>
          <IoIosArrowDown />
        </div>

        <div className="search__input">
          <input type={"text"} placeholder="کالای مورد نظر راجستجو کنید" />
          <AiOutlineSearch className="search__icon" />
        </div>
      </div>

      <div className="user__shop">
        <div className="user__info">
          <FiUser />
        </div>
        <div className="user__favorites">
          <AiOutlineHeart />
          <span className="counter">0</span>
        </div>
        <div className="user__basket">
          <AiOutlineShoppingCart />
          <span className="counter">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
