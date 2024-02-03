import React from "react";
import { Icons } from "../assets/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__row__column">
            <Link to="/">
              <Icons.LogoIcon />
            </Link>
            <p className="footer__row__num">+7 (499) 719-99-94</p>
            <p className="footer__row__email">info@5kvt.ru</p>
            <p className="footer__row__daily">Ежедневно 9:30 - 20:00 (МСК)</p>
            <p className="footer__row__text">
              117218, г. Москва, пр-кт Нахимовский .,дом 30/43, кв. 81
            </p>
          </div>
          <div className="footer__row__column gap">
            <p className="footer__row__num">Информация</p>
            <p className="footer__row__text">Доставка</p>
            <p className="footer__row__text">Оплата</p>
            <p className="footer__row__text">Производители</p>
            <p className="footer__row__text">Подарочные сертификаты</p>
            <p className="footer__row__text">Партнерская программа</p>
            <p className="footer__row__text">Акции</p>
            <p className="footer__row__text">Все товары</p>
          </div>
          <div className="footer__row__column gap">
            <p className="footer__row__num">Служба поддержки</p>
            <p className="footer__row__text">Возврат товара</p>
            <p className="footer__row__num">Личный кабинет</p>
            <p className="footer__row__text">Личный кабинет</p>
            <p className="footer__row__text">История заказов</p>
            <p className="footer__row__text">Избранное</p>
            <p className="footer__row__text">Рассылка</p>
          </div>
          <div className="footer__row__column">
            <div className="footer__row__connect">
              <Icons.WhatsappIcon />
              <Icons.ViberIcon />
              <input type="text" className="footer__row__input" placeholder="Напишите нам" />
            </div>
            <button className="footer__row__btn"> <Icons.UserIcon/> Служба поддержки</button>
            <p className="footer__row__num">Принимаем к оплате</p>
            <div className="footer__row__connect">
              <Icons.MasterCardIcon />
              <Icons.MeastroIcon />
              <Icons.VisaIcon />
              <Icons.CardIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
