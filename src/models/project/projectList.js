import Project, {
    DESCRIPTION,
    NAME,
    OWNER,
    ID,
    DESCRIPTION_HEADER,
    NAME_HEADER,
    OWNER_HEADER
} from "./project";

import GridColumn from "../gridData/gridColumn";
import GridData from "../gridData/gridData";

export default class ProjectList {
    list = [];

    constructor(data) {
        this.list = data.map(project => {
            return new Project(project).build();
        });
    }

    columns() {
        return [
            GridColumn.createNew().addField(ID).addIsHidden(true).build(),
            GridColumn.createNew().addField(NAME).addHeaderName(NAME_HEADER).build(),
            GridColumn.createNew().addField(DESCRIPTION).addHeaderName(DESCRIPTION_HEADER).build(),
            GridColumn.createNew().addField(OWNER).addHeaderName(OWNER_HEADER).build()
        ];
    }

    build() {
        return GridData.createNew().addColumns(this.columns()).addRows(this.list).build();
    }
}