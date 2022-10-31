import React, { useState } from "react";
import "./menu.css";

import { megaMenuItems } from "./../../data";

//icons
import { RiMenu3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";

const Menu = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownHandler = () => {
    setShowDropDown((prevState) => !prevState);
    console.log(showDropDown);
  };

  return (
    <div className="menu__bar">
      <div className="mega__menu">
        <div className="drop__menu-wrapper">
          <div className="drop__menu-header" onClick={dropDownHandler}>
            <div className="drop__menu-header_text">
              <RiMenu3Line className="drop__menu-icon" />
              <p>دسته بندی ها</p>
            </div>
            <IoIosArrowDown />
          </div>
          <ul className={showDropDown ? "drop__menu-items" : "none"}>
            {megaMenuItems.map((item, index) => (
              <li
                key={index}
                className="drop__menu-item"
                onClick={dropDownHandler}
              >
                <div className="drop__menu-item_text">
                  <img src={item.logo} />
                  {item.title}
                </div>
                {item.arrow && <item.arrow />}
              </li>
            ))}
          </ul>
        </div>

        {/* middle menu */}
        <ul className="middle__menu-items">
          <li className="middle__menu-item">ثبت نام فروشنده</li>
          <li className="middle__menu-item">محصولات استوک</li>
          <li className="middle__menu-item">تخفیف ها و پیشنهاد ها</li>
          <li className="middle__menu-item">بلاگ</li>
          <li className="middle__menu-item">پرسشهای رایج</li>
          <li className="middle__menu-item">درباره مهراشاپ</li>
          <li className="middle__menu-item">ارتباط با ما</li>
        </ul>
      </div>
      <div className="location">
        <TiLocationOutline />
        <p>انتخاب استان و شهر</p>
      </div>
    </div>
  );
};

export default Menu;
