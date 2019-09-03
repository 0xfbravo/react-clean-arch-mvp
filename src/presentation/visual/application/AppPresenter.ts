import { AppView } from "./AppView";

export class AppPresenter {
    private view: AppView;

    constructor(view: AppView) {
        this.view = view;
    }
}