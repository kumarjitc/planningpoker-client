import { PROJECT_SELECT } from "../actionTypes";
import ProjectStore from '../reducers/projects';

export const selectProject = (project) => {
    ProjectStore.dispatch({
        type: PROJECT_SELECT,
        payload: {
            ...project
        }
    });
};