import { Entity } from "../core/clean-arch/Entity";

export class TagEntity extends Entity {
    constructor(
        public id: number,
        public name: string,
        public type: number) {
            super();
        }
}

export default TagEntity;
