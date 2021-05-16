import { COLUMNS, ROWS } from "./constants";

export default class GridData {
    rows = [];
    columns = [];

    addRows(rows) {
        this.rows = rows;

        return this;
    }

    addColumns(columns) {
        this.columns = columns;

        return this;
    }

    build() {
        return {
            [ROWS]: this.rows,
            [COLUMNS]: this.columns
        };
    }

    static createNew() {
        return new GridData();
    }
}