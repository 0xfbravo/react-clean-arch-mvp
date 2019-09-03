import { TweetListView } from "./TweetListView";

export class TweetListPresenter {
    private view: TweetListView;

    constructor(view: TweetListView) {
        this.view = view;
    }
}
