import GridColumn from "../../grid/column";
import EntityFactory from "../EntityFactory";

const ENDPOINT = 'setup/project';

export const [
  DESCRIPTION,
  NAME,
  OWNER,
  ID,
  ISSELECTED,
  DESCRIPTION_HEADER,
  NAME_HEADER,
  OWNER_HEADER,
  CELL_WIDTH
] = [
    'desc',
    'name',
    'owner',
    'isSelected',
    '_id',
    'Description',
    'Name',
    'Project Owner',
    300
  ];

export default class Project extends EntityFactory {
  constructor(data) {
    super(data);
  }

  static getGridColumns() {
    return [
      GridColumn.createNew().addField(ID).addIsHidden(true).addIsEditable(true).build(),
      GridColumn.createNew().addField(NAME).addHeaderName(NAME_HEADER).build(),
      GridColumn.createNew().addField(DESCRIPTION).addHeaderName(DESCRIPTION_HEADER).build(),
      GridColumn.createNew().addField(OWNER).addHeaderName(OWNER_HEADER).build()
    ];
  }

  static getEndpoint() {
    return 'setup/project';
  }
}