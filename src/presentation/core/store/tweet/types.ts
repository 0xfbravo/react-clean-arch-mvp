import TweetModel from "../../../model/TweetModel";
import { TweetActionsTypes } from "./action-types";

export interface TweetState {
    currentTweet: TweetModel | undefined;
}

/**
 * Action to recognize that a new
 * tweet should be show.
 */
interface LoadNewTweetAction {
    type: TweetActionsTypes.LOAD_NEW_TWEET;
    newTweet: TweetModel;
}
  
export type TweetActions = LoadNewTweetAction;
