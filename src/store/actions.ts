export function changeFoodMenu(payload: string) {
  return {
    type: 'FOOD_CHANGE_SECTION',
    payload,
  };
}
