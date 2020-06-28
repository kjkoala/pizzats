import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFoodMenu } from '../actions';

export const useChangeFoodMenu = () => {
  const dispatch = useDispatch();

  const any = useSelector((state) => state);

  console.log('ANY',any);

  // useEffect(() => {

  // }, [dispatch]);

  return dispatch;
};
