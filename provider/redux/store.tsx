import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  ISubscriptionState,
  SubscriptionReducer,
} from './Subscription/SubscriptionReducer';

export interface ICombinedState {
  subscription: ISubscriptionState;
}

const appReducer = combineReducers({
  subscription: SubscriptionReducer,
});

const middleware = [thunk];

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
