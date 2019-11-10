import { createStore, combineReducers, applyMiddleware } from "redux";
import { tweetReducer } from './tweet/reducers';

const rootReducer = combineReducers({ tweet: tweetReducer });

export const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
}

export type AppState = ReturnType<typeof rootReducer>
