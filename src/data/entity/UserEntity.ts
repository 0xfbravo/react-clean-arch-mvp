import { Entity } from "../core/clean-arch/Entity";

class UserEntity extends Entity {
    constructor(
        public id: string,
        public name: string,
        public photoURL: string) {
            super();
        }
}

export default UserEntity;
