import { DomainModel } from "../core/clean-arch/DomainModel";

export class TagDomainModel extends DomainModel {
    constructor(
        public id: number,
        public name: string,
        public type: number) {
            super();
        }
}

export default TagDomainModel;
