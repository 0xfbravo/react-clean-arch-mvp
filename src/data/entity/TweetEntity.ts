import { Entity } from "../core/clean-arch/Entity";
import TagEntity from "./TagEntity";
import UserEntity from "./UserEntity";

class TweetEntity extends Entity {
    constructor(
        public id: string,
        public msg: string,
        public date: Date,
        public user: UserEntity,
        public tags: Array<TagEntity>) {
            super();
        }
}

export default TweetEntity;
