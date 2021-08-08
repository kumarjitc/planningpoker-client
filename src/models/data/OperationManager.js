import { HttpHelper } from "../../utils/HttpHelper";
import GridData from "../grid/data";

const DB_ID = '_id';
const URL_ID = 'id';

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

    async save(data) {
        let message;
        if (data[DB_ID]) {
            message = await this.update(data);
        } else {
            message = await this.insert(data);
        }

        return message;
    }

    async insert(data) {
        delete data._id;

        let message = await new HttpHelper().makePostRequest(this.entity.getEndpoint(), data);

        return message;
    }

    async update(data) {
        let path = {
            [URL_ID]: data[DB_ID]
        }
        delete data._id;

        let message = await new HttpHelper().makePutRequest(this.entity.getEndpoint(), path, data);

        return message;
    }

    async delete(data) {
        let path = {
            [URL_ID]: data[DB_ID]
        }

        let message = await new HttpHelper().makeDeleteRequest(this.entity.getEndpoint(), path);

        return message;
    }

    flattenData(item) {
        let instance = Reflect.construct(this.entity, [item]);

        return instance.flatten();
    }
}