export const [
    DESCRIPTION,
    NAME,
    OWNER,
    ISSELECTED,
    ID,
    DESCRIPTION_HEADER,
    NAME_HEADER,
    OWNER_HEADER,
    CELL_WIDTH
] = [
        'description',
        'name',
        'owner',
        'isSelected',
        'id',
        'Description',
        'Name',
        'Project Owner',
        300
    ];

export default class Project {
    name = '';
    description = '';
    owner = '';
    isSelected = '';
    id = '';

    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.owner = data.owner;
        this.isSelected = data.isSelected;
        this.id = data.id;
    }

    build() {
        return {
            [NAME]: this.name,
            [OWNER]: this.owner,
            [DESCRIPTION]: this.description,
            [ISSELECTED]: this.isSelected,
            [ID]: this.id || ''
        };
    }
}