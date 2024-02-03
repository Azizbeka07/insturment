import React, { useState } from "react";
import { Input, Space } from "antd";
import { Menu } from "antd";
import { Icons } from "@/assets/icons";
import { Link } from "react-router-dom";

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const items = [
  {
    label: "Каталог",
    key: "catalog",
  },
  {
    label: "Аккумуляторы",
    key: "battery",
  },
  {
    label: "Блоки контроля",
    key: "block",
  },
  {
    label: "Генераторы",
    key: "generator",
  },
  {
    label: "Климатическая техника",
    key: "climatic",
  },
  {
    label: "Отопление",
    key: "heat",
  },
  {
    label: "Перфораторы",
    key: "hammer",
  },
  {
    label: "Провода",
    key: "wire",
  },
  {
    label: "Люстры...",
    key: "chandelier",
  },
];

const Headers = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="header__wrapper">
      <div className="container">
        <div className="header__content">
          <Link to="/">
          <Icons.LogoIcon />
          </Link>
          <h2 className="header__content__num">+7 (499) 719-99-94</h2>
          <Space className="input" direction="vertical">
            <Search
              style={{ maxWidth: "292px" }}
              placeholder="Что ищем?.."
              allowClear
              enterButton="Поиск"
              size="large"
              onSearch={onSearch}
            />
          </Space>
          <div className="header__content__applications">
            <Icons.InstagramIcon />
            <Icons.VkontakteIcon />
            <Icons.FacebookIcon />
            <Icons.YoutubeIcon />
          </div>
          <button className="header__content__btn">Адреса магазинов</button>
          <button className="header__content__user">
            <Icons.UserIcon />
          </button>
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </div>
  );
};

export default Headers;
