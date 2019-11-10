import { PresentationModel } from "../core/clean-arch/PresentationModel";

export class TagModel extends PresentationModel {
    constructor(
        public id: number,
        public name: string,
        public type: number) {
        super();
    }
}

export default TagModel;
