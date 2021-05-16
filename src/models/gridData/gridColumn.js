import { EDITABLE, FIELD, HEADER_NAME, HIDE, WIDTH } from "./constants";

export default class GridColumn {
    field = '';
    width = 300;
    headerName = this.field;
    hide = false;
    editable = true;

    addField(field) {
        this.field = field;

        return this;
    }

    addWidth(width) {
        this.width = width;

        return this;
    }

    addHeaderName(headerName) {
        this.headerName = headerName;

        return this;
    }

    addIsHidden(hide) {
        this.hide = hide;

        return this;
    }

    addIsReadonly(readonly) {
        this.editable = !readonly;

        return this;
    }

    build() {
        return {
            [FIELD]: this.field,
            [WIDTH]: this.width,
            [HEADER_NAME]: this.headerName,
            [HIDE]: this.hide,
            [EDITABLE]: this.editable
        }
    }

    static createNew() {
        return new GridColumn();
    }
}