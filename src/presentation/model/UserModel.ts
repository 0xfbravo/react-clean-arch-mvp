import { PresentationModel } from "../core/clean-arch/PresentationModel";

class UserModel extends PresentationModel {
    constructor(
        public id: string,
        public name: string,
        public photoURL: string) {
            super();
        }
}

export default UserModel;