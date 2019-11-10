import UserDomainModel from "./UserDomainModel";
import TagDomainModel from "./TagDomainModel";
import { DomainModel } from "../core/clean-arch/DomainModel";

class TweetDomainModel extends DomainModel {
    constructor(
        public id: string,
        public msg: string,
        public date: Date,
        public user: UserDomainModel,
        public tags: Array<TagDomainModel>) {
            super();
        }
}

export default TweetDomainModel;
