import { DEFAULT_COLUMN, EDITABLE, FIELD, HEADER_NAME, HIDE, WIDTH } from "./constants";

export default class GridColumn {
    constructor() {
        this.column = new Map(Object.entries(DEFAULT_COLUMN));
    }

    addField(field) {
        this.column.set(FIELD, field);
        this.column.set(HEADER_NAME, field);

        return this;
    }

    addWidth(width) {
        this.column.set(WIDTH, width);

        return this;
    }

    addHeaderName(headerName) {
        this.column.set(HEADER_NAME, headerName);

        return this;
    }

    addIsHidden(hide) {
        this.column.set(HIDE, hide);

        return this;
    }

    addIsEditable(editable) {
        this.column.set(EDITABLE, editable);

        return this;
    }

    build() {
        return { ...Object.fromEntries(this.column) };
    }

    static createNew() {
        return new GridColumn();
    }
}