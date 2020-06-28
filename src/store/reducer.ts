import { FoodMenuChangeSection } from './types';

const initialState = {
  basket: [],
  uuid: '',
  currentFoodSection: '',
  filtersFood: '',
};

export const AppReducer = (
  state = initialState,
  action: FoodMenuChangeSection,
) => {
  switch (action.type) {
    case 'FOOD_CHANGE_SECTION':
      return { ...state, currentFoodSection: action.payload };
    default:
      return state;
  }
};
