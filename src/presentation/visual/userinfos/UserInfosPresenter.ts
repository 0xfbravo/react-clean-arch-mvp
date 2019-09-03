import { UserInfosView } from "./UserInfosView";

export class UserInfosPresenter {
    private view: UserInfosView;

    constructor(view: UserInfosView) {
        this.view = view;
    }
}
