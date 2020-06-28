// Core
import React, { FC, useState, useEffect } from 'react';
import { Provider } from 'react-redux';


// Other
import { store } from './init/store';
import { Layout } from './layout';
import { FoodItem } from './components/FoodItem';
import useFetch from './hooks/useFetch';
import { typeFoodItem } from './types';


export const App: FC = () => {
  
  const [foodItems, setFoodItems] = useState<typeFoodItem[]>([]);
  const fetch = useFetch<typeFoodItem>('/JSON/FoodItems.json');

  if (!fetch.isloading && Array.isArray(fetch.data) && foodItems.length === 0) {
    setFoodItems(fetch.data);
    console.log(fetch.data);
  }
  return (
    <Provider store={store}>
      <Layout>
        <section className="section">
          <div className="container">
            <div className="dashboard">
              <div className="dashboard__cards">
                {foodItems.map((item) => <FoodItem {...item} />)}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Provider>
  );
};
