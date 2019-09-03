import UserModel from "./UserModel";
import TagModel from "./TagModel";
import { PresentationModel } from "../core/clean-arch/PresentationModel";

class TweetModel extends PresentationModel {
    constructor(
        public id: string,
        public msg: string,
        public date: Date,
        public user: UserModel,
        public tags: Array<TagModel>) {
            super();
        }
}

export default TweetModel;
