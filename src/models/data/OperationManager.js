import { HttpHelper } from "../../utils/HttpHelper";
import GridData from "../grid/data";

export default class OperationManager {
    entity;

    constructor(entity) {
        this.entity = entity;
    }

    async getAll() {
        let entityMap = await new HttpHelper().makeGetRequest(this.entity.getEndpoint());

        let list = entityMap.map(item => this.flattenData(item));

        return GridData.createNew().addColumns(this.entity.getGridColumns()).addRows(list).build();
    }

    async update(path, data) {
        await new HttpHelper().makePutRequest(this.entity.getEndpoint(), path, data);

        return 'Working';
    }

    flattenData(item) {
        let instance = Reflect.construct(this.entity, [item]);

        return instance.flatten();
    }
}