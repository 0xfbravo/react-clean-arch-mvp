import UserModel from "./UserModel";
import TagModel from "./TagModel";

class TweetModel {
    constructor(
        public id: string,
        public msg: string,
        public date: Date,
        public user: UserModel,
        public tags: Array<TagModel>) {

        }
}

export default TweetModel;