import { Component } from "react";
import OperationManager from "../../../models/data/OperationManager";
import Project from "../../../models/data/project/project";

import CardGrid from "../../UI/CardGrid/CardGrid";

export default class Projects extends Component {
    state = {};

    constructor() {
        super();
        this.entityFactory = new OperationManager(Project);
    }

    async componentDidMount() {
        let data = await this.entityFactory.getAll();

        this.setState(data);
    }

    render() {
        return (
            <div className="container">
                <h2>Projects</h2>
                <div className="project-list">
                    <CardGrid {...this.state} />
                </div>
            </div>
        );
    }
}