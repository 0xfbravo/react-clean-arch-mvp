import { TweetView } from "./TweetView";

export class TweetPresenter {
    private view: TweetView

    constructor(view: TweetView) {
        this.view = view
    }
}
