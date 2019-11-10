import { TweetActions, TweetState } from "./types";
import { TweetActionsTypes } from "./action-types";

const initialState: TweetState = { currentTweet: undefined };

export const tweetReducer = (state = initialState, action: TweetActions): TweetState => {
    switch (action.type) {
        case TweetActionsTypes.LOAD_NEW_TWEET:
            return {
                currentTweet: action.newTweet,
            };
        default:
            return state;
    }
}
