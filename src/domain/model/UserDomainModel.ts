import { DomainModel } from "../core/clean-arch/DomainModel";

class UserDomainModel extends DomainModel {
    constructor(
        public id: string,
        public name: string,
        public photoURL: string) {
            super();
        }
}

export default UserDomainModel;
