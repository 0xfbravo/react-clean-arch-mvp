import TweetModel from "../../model/TweetModel";

export interface ClassificationView {
    updateTweetInformations(newTweet: TweetModel): void
}
