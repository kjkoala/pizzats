import React, { FC } from 'react';
import { typeFoodItem as PropTypes } from '../types';


export const FoodItem: FC<PropTypes> = ({ title, description, sale, image }: PropTypes) => {
  return (
    <div className="card _show-btn"><a href="#"><img className="card__img" src={image} alt={title} /></a>
      <div className="card__content">
        <h3 className="card__title _icon _icon-veg _icon-hot _icon-meat"><span>{title}</span> <span></span> <span></span> <span></span>
        </h3>
        <div className="card__text">
          <p>{description}</p>
        </div>
        <div className="card__separator">Pick Size</div>
        <div className="card__choice">
          {sale.map((saleItem) => (
            <div className="card__choice-item">
              <div className="size">
                {saleItem.params?.size}
              <span>{saleItem.params?.metrics}</span>
              </div>
              <div className="price">
                $
                {saleItem.cost}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card__btn">
        <div className="btn _icon _icon-basket">Add to Cart</div>
      </div>
    </div>
  );
};
