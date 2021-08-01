import { Component } from "react";
import OperationManager from "../../../models/data/OperationManager";
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Addicon from '@material-ui/icons/Add';
import Project from "../../../models/data/project/project";

import CardGrid from "../../UI/CardGrid/CardGrid";
import FormModal from '../../UI/Modal/FormModal/FormModal';
import MessageModal, { SUCCESS, ERROR } from '../../UI/Modal/MessageModal/MessageModal';
import { PROJECT } from '../../../controls/controls'
import { PRIMARY_GREEN, HOVER_GREEN } from "../../../utils/MaterialColorCodes";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
    fabGreen: {
        backgroundColor: PRIMARY_GREEN,
        '&:hover': {
            backgroundColor: HOVER_GREEN,
        }
    }
});

class Projects extends Component {
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
            selected: null,
            isHttpComplete: true
        });
    }

    async getAll() {
        let data = await this.entityFactory.getAll();

        this.setState({
            ...this.state,
            data: data
        });
    }

    async save(data) {
        await this.entityFactory.save(data);

        this.onModalClose();
        await this.getAll();
    }

    async delete(data) {
        await this.entityFactory.delete(data);

        this.onModalClose();
        await this.getAll();
    }

    render() {
        const { classes } = this.props;
        const message = this.state.isHttpComplete ? (<MessageModal type={SUCCESS} />) : null;

        return (
            <>
                <div className="container">
                    <h2>
                        <div>
                            Projects
                        </div>
                        <div>
                            <Tooltip title="Add">
                                <Fab size="small" className={classes.fabGreen}>
                                    <Addicon />
                                </Fab>
                            </Tooltip>
                        </div>
                    </h2>
                    <div className="project-list">
                        <CardGrid {...this.state.data} type="project" onEditClick={(id) => {
                            this.onEditClick(id);
                        }} />
                    </div>
                </div>
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
                />
                {message}
            </>
        );
    }
}

export default withStyles(styles)(Projects);