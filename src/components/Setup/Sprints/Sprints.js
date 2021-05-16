import { Component } from "react";

import SprintList from "../../../models/sprint/sprintList";
import AppGrid from "../../UI/AppGrid/AppGrid";

const DATA = [{
    id: 1,
    description: 'This is a story This is a story This is a story This is a story This is a story This is a story',
    name: 'test project 1',
    project: 'Sprint 10.2'
}, {
    id: 2,
    description: 'This is another story This is a story This is a story This is a story This is a story This is a story',
    name: 'test project 1',
    project: 'Sprint 10.3'
}, {
    id: 3,
    description: 'This is one another story This is a story This is a story This is a story This is a story This is a story',
    name: 'test project 1',
    project: 'Sprint 10.4'
}];

export default class Projects extends Component {
    state = {};

    componentDidMount() {
        this.setState(new SprintList(DATA).build());
    }

    render() {
        return (
            <div className="container">
                <h2>Sprints</h2>
                <div className="sprint-list">
                    <AppGrid {...this.state} />
                </div>
            </div>
        );
    }
}