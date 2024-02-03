import React from "react";
import { Icons } from "@/assets/icons";
import { Link } from "react-router-dom";


const HeaderTop = () => {
  return (
    <div className="header">
      <div className="header__top container">
        <div className="header__top__left">
          <Link to="/payment" className="header__top__text">
            Доставка и оплата
          </Link>
          <Link to="/contact" className="header__top__text">
            Контакты
          </Link>
        </div>
        <div className="header__top__center">
          <p  className="header__top__construction ">
            Построй и обустрой
          </p>
         <Icons.CircleIcon/>
          <p className="header__top__text">
            Всё для дома, дачи и стройки!
          </p>
        </div>
        <div className="header__top__right">
          <Icons.LineIcon />
          <Icons.LikeIcon />
          <Icons.CartIcon />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
