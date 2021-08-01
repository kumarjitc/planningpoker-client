import { Component } from "react";
import OperationManager from "../../../models/data/OperationManager";
import Project from "../../../models/data/project/project";

import CardGrid from "../../UI/CardGrid/CardGrid";
import FormModal from '../../UI/Modal/FormModal/FormModal';
import { PROJECT } from '../../../controls/controls'

export default class Projects extends Component {
    state = {
        openModal: false,
        controls: PROJECT
    };

    constructor() {
        super();
        this.entityFactory = new OperationManager(Project);
    }

    async componentDidMount() {
        let data = await this.entityFactory.getAll();

        this.setState({
            ...this.state,
            ...data
        });
    }

    onEditClick(id) {
        console.log(this.state);
        this.setState({
            ...this.state,
            openModal: true
        });
    }

    onModalClose() {
        this.setState({
            ...this.state,
            openModal: false
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <h2>Projects</h2>
                    <div className="project-list">
                        <CardGrid {...this.state} type="project" onEditClick={(id) => {
                            this.onEditClick(id);
                        }} />
                    </div>
                </div>
                <FormModal open={this.state.openModal} controls={this.state.controls} onCancel={() => {
                    this.onModalClose();
                }} />
            </>
        );
    }
}