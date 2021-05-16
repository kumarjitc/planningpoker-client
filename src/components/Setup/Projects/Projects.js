import { Component } from "react";

import ProjectList from "../../../models/project/projectList";
import AppGrid from "../../UI/AppGrid/AppGrid";

const DATA = [{
    id: 1,
    description: 'This is a story This is a story This is a story This is a story This is a story This is a story',
    name: 'test project 1',
    owner: 'Test Owner 1'
}, {
    id: 2,
    description: 'This is another story This is a story This is a story This is a story This is a story This is a story',
    name: 'test project 1',
    owner: 'Test Owner 1'
}, {
    id: 3,
    description: 'This is one another story This is a story This is a story This is a story This is a story This is a story',
    name: 'test project 1',
    owner: 'Test Owner 1'
}];

export default class Projects extends Component {
    state = {};

    componentDidMount() {
        this.setState(new ProjectList(DATA).build());
    }

    render() {
        return (
            <div className="container">
                <h2>Projects</h2>
                <div className="project-list">
                    <AppGrid {...this.state} />
                </div>
            </div>
        );
    }
}