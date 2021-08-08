import { Component } from "react";

import SprintList from '../../../models/data/sprint/sprintList';
import AppGrid from "../../UI/AppGrid/AppGrid";
import CardGrid from "../../UI/CardGrid/CardGrid";

import ProjectStore from '../../../store/reducers/projects';

export default class Projects extends Component {
    state = {};

    componentDidMount() {
        ProjectStore.subscribe(() => {
            this.populateSprints(ProjectStore.getState().project)
        });
    }

    populateSprints(project) {
        this.setState({
            ...this.state,
            project: project
        });
    }

    render() {
        const header = (this.state && this.state.project && this.state.project.name)
            ? `Sprints - ${this.state.project.name}`
            : 'Sprints';

        return (
            <div className="container">
                <h2>{header}</h2>
                <div className="sprint-list">
                    <CardGrid {...this.state} />
                </div>
            </div>
        );
    }
}