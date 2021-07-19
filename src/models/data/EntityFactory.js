export default class EntityFactory {
    data;

    constructor(data) {
        this.data = new Map(Object.entries(data));
    }

    flatten() {
        return { ...Object.fromEntries(this.data) };
    }
}