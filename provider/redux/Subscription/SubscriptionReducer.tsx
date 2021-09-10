import { HIDE_SUBSCRIPTION_POPUP, SHOW_SUBSCRIPTION_POPUP } from './Constant';
import { SubscriptionTypes } from './SubscriptionTypes';

export interface ISubscriptionState {
  isShow: boolean;
}

const SubscriptionReducerDefaultState: ISubscriptionState = {
  isShow: false,
};

export const SubscriptionReducer = (
  state = SubscriptionReducerDefaultState,
  action: SubscriptionTypes
): ISubscriptionState => {
  switch (action.type) {
    case SHOW_SUBSCRIPTION_POPUP: {
      return {
        ...state,
        isShow: true,
      };
    }
    case HIDE_SUBSCRIPTION_POPUP: {
      return {
        ...state,
        isShow: false,
      };
    }
    default:
      return state;
  }
};
