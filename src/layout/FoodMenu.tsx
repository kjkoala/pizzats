import React, { FC, useEffect, useState } from 'react';

import cogoToast from 'cogo-toast';

import useFetch from '../hooks/useFetch';
import { useChangeFoodMenu } from '../store/hooks/changeFoodMenu';
import { changeFoodMenu } from '../store/actions';

type FoodMenu = {
  title: string;
  id: string;
  icon: string;
  filters: number[];
}

type userMenu = {
  title: string;
  id: string;
  icon: string;
}

enum FoodAbility {
  Viggie = 0,
  HotSpicy,
  Meat
}


export const FoodMenu: FC = () => {
  const dispatch = useChangeFoodMenu();
  const [menuItems, setMenuItems] = useState<FoodMenu[]>([]);
  const [currentMenuItem, setCurrentMenuItem] = useState('');
  // const myFetch = useFetch<userMenu>('/JSON/FoodMenu.json');
  // console.log(myFetch);
  useEffect(() => {
    fetch('/JSON/FoodMenu.json')
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setMenuItems(res.data);
          setCurrentMenuItem(res.data[0].id);
          cogoToast.success('Success!');
        }
      });
  }, []);
  const handleFetchItems = (id: string): void => {
    setCurrentMenuItem(id);
    dispatch(changeFoodMenu('123'));
  };
  return (
    <>
      <section className="section _bg-red">
        <div className="container">
          <div className="menu">
            <div className="menu__items">
              {menuItems.map(({ title, id, icon }) => (<div className={`menu__item ${id === currentMenuItem ? '  _active' : ''}`} key={id} onClick={() => handleFetchItems(id)}>
                <div className="menu__item-icon"><img src={icon} /></div>
                <div className="menu__item-name">{title}</div>
              </div>))}
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="dashboard__filters">
          <div className="filter _active">Show All</div>
          {menuItems.filter(({ id }) => id === currentMenuItem)
            .map(({ filters }) => filters.map((index) => {
              switch (index) {
                case FoodAbility.Viggie:
                  return <div className="filter _icon _icon-veg">veggie</div>;
                case FoodAbility.HotSpicy:
                  return <div className="filter _icon _icon-hot">hot & spicy</div>;
                case FoodAbility.Meat:
                  return <div className="filter _icon _icon-meat">meat</div>;
                default:
                  return null;
              }
            }))}
        </div>
      </div>
    </>
  )
} 