import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Projects from './Projects/Projects';
import Sprints from './Sprints/Sprints';

const useStyles = makeStyles((theme) => ({
    pods: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-around'
    },
    pod: {
        flexBasis: '600px',
        border: '1px solid #F1D0D0',
        boxShadow: '5px 5px 7px #795252',
        marginBottom: '15px'
    }
}));

const Dashboard = (props) => {
    const classes = useStyles();

    return (
        <div className="container">
            <h2>Dashboard</h2>
            <div className={classes.pods}>
                <div className={classes.pod}>
                    <Projects />
                </div>
                <div className={classes.pod}>
                    <Sprints />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;