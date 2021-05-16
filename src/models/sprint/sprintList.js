import Sprint, {
    DESCRIPTION,
    NAME,
    PROJECT,
    ID,
    DESCRIPTION_HEADER,
    NAME_HEADER,
    PROJECT_HEADER
} from "./sprint";

import GridColumn from "../gridData/gridColumn";
import GridData from "../gridData/gridData";

export default class SprintList {
    list = [];

    constructor(data) {
        this.list = data.map(sprint => {
            return new Sprint(sprint).build();
        });
    }

    columns() {
        return [
            GridColumn.createNew().addField(ID).addIsHidden(true).addIsReadonly(true).build(),
            GridColumn.createNew().addField(NAME).addHeaderName(NAME_HEADER).build(),
            GridColumn.createNew().addField(DESCRIPTION).addHeaderName(DESCRIPTION_HEADER).build(),
            GridColumn.createNew().addField(PROJECT).addHeaderName(PROJECT_HEADER).build()
        ];
    }

    build() {
        return GridData.createNew().addColumns(this.columns()).addRows(this.list).build();
    }
}