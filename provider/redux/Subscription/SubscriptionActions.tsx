import { Dispatch } from 'react';
import { HIDE_SUBSCRIPTION_POPUP, SHOW_SUBSCRIPTION_POPUP } from './Constant';
import { ISubscriptionState } from './SubscriptionReducer';
import { SubscriptionTypes } from './SubscriptionTypes';

export const actionShowSubscriptionPopup = () => {
  return async (
    dispatch: Dispatch<SubscriptionTypes>,
    getState: () => ISubscriptionState
  ) => {
    dispatch({
      type: SHOW_SUBSCRIPTION_POPUP,
    });
  };
};

export const actionHideSubscriptionPopup = () => {
  return async (
    dispatch: Dispatch<SubscriptionTypes>,
    getState: () => ISubscriptionState
  ) => {
    dispatch({ type: HIDE_SUBSCRIPTION_POPUP });
  };
};
