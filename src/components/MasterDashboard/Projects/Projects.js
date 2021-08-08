import { PureComponent } from "react";
import OperationManager from "../../../models/data/OperationManager";
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Addicon from '@material-ui/icons/Add';
import Project from "../../../models/data/project/project";

import CardGrid from "../../UI/CardGrid/CardGrid";
import FormModal from '../../UI/Modal/FormModal/FormModal';
import MessageModal, { SUCCESS, ERROR } from '../../UI/Modal/MessageModal/MessageModal';
import { PROJECT } from '../../../controls/controls';
import { PRIMARY_GREEN, HOVER_GREEN } from "../../../utils/MaterialColorCodes";
import { withStyles } from "@material-ui/core";

import { selectProject } from "../../../store/actions/projects";

const styles = theme => ({
    fabGreen: {
        backgroundColor: PRIMARY_GREEN,
        '&:hover': {
            backgroundColor: HOVER_GREEN,
        }
    }
});

class Projects extends PureComponent {
    state = {
        openModal: false,
        controls: PROJECT,
        selected: null,
        isHttpComplete: false
    };

    constructor() {
        super();
        this.entityFactory = new OperationManager(Project);
    }

    async componentDidMount() {
        await this.getAll();
    }

    onAddClick() {
        this.setState({
            ...this.state,
            openModal: true,
            selected: null,
            isHttpComplete: false
        });
    }

    onEditClick(project) {
        this.setState({
            ...this.state,
            openModal: true,
            selected: project,
            isHttpComplete: false
        });
    }

    onModalClose() {
        this.setState({
            ...this.state,
            openModal: false,
            selected: null
        });
    }

    onClick(project) {
        let projectList = { ...this.state.data };

        projectList.rows.forEach((item, index) => {
            projectList.rows[index]['isSelected'] = item['isSelected'] ? false : (project['_id'] === item['_id']);
        });

        this.setState({
            ...this.state,
            data: projectList
        });

        selectProject(project['isSelected'] ? {} : project);
    }

    async getAll() {
        let data = await this.entityFactory.getAll();

        this.setState({
            ...this.state,
            data: data
        });
    }

    async save(data) {
        let response = await this.entityFactory.save(data);

        this.setState({
            ...this.state,
            response: response.data,
            isHttpComplete: true
        });
        if (response.status === 200) {
            this.onModalClose();
            await this.getAll();
        }
    }

    async delete(data) {
        let response = await this.entityFactory.delete(data);

        this.setState({
            ...this.state,
            response: response.data,
            isHttpComplete: true
        });

        this.onModalClose();
        await this.getAll();
    }

    render() {
        const { classes } = this.props;
        const message = this.state.isHttpComplete
            ? (<MessageModal {...this.state.response} />)
            : null;
        const formModal = this.state.openModal
            ? (
                <FormModal
                    open={this.state.openModal}
                    controls={this.state.controls}
                    data={this.state.selected}
                    type="Project"
                    onCancel={() => {
                        this.onModalClose();
                    }}
                    onSave={(data) => {
                        this.save(data);
                    }}
                    onDelete={(id) => {
                        this.delete(id);
                    }}
                />)
            : null;
        const projectList = this.state.data ? (<CardGrid {...this.state.data} type="project" onEditClick={(project) => {
            this.onEditClick(project);
        }} onClick={(project) => {
            this.onClick(project);
        }} />) : null;

        return (
            <>
                <div className="container">
                    <h2>
                        <div>
                            Projects
                        </div>
                        <div>
                            <Tooltip title="Add">
                                <Fab size="small" className={classes.fabGreen} onClick={() => {
                                    this.onAddClick()
                                }}>
                                    <Addicon />
                                </Fab>
                            </Tooltip>
                        </div>
                    </h2>
                    <div className="project-list">
                        {projectList}
                    </div>
                </div>
                {message}
                {formModal}
            </>
        );
    }
}

export default withStyles(styles)(Projects);