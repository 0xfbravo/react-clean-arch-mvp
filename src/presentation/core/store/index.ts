import { createStore, combineReducers, applyMiddleware } from "redux";
import { tweetReducer } from './tweet/reducers';

const rootReducer = combineReducers({
  tweet: tweetReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
    const store = createStore(
        rootReducer
    );
    return store;
}
