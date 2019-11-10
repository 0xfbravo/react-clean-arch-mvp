import TweetModel from "../../../model/TweetModel";
import { TweetActionsTypes } from "../../store/tweet/action-types";

export const loadNewTweet = (tweet: TweetModel) => {
    return {
        newTweet: tweet,
        type: TweetActionsTypes.LOAD_NEW_TWEET
    };
}
