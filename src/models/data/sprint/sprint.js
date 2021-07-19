export const [
    DESCRIPTION,
    NAME,
    PROJECT,
    ID,
    DESCRIPTION_HEADER,
    NAME_HEADER,
    PROJECT_HEADER,
    CELL_WIDTH
] = [
        'description',
        'name',
        'project',
        'id',
        'Description',
        'Name',
        'Project Name',
        300
    ];

export default class Sprint {
    name = '';
    description = '';
    project = '';
    id = '';

    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.project = data.project;
        this.id = data.id;
    }

    build() {
        return {
            [NAME]: this.name,
            [PROJECT]: this.project,
            [DESCRIPTION]: this.description,
            [ID]: this.id || ''
        };
    }
}