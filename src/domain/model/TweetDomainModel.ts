import UserDomainModel from "./UserDomainModel";
import TagDomainModel from "./TagDomainModel";

class TweetDomainModel {
    constructor(
        public id: string,
        public msg: string,
        public date: Date,
        public user: UserDomainModel,
        public tags: Array<TagDomainModel>) {

        }
}

export default TweetDomainModel;