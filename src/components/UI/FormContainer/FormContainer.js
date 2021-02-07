import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ColorCodes from '../../../utils/AppColorCodes'

import './FormContainer.css';

const useStyles = makeStyles((theme) => ({
    header: {
        borderBottom: '5px solid ' + ColorCodes.BASE_COLOR,
        width: '50%',
        marginBottom: 30
    }
}));

export default function FormContianer(props) {
    const classes = useStyles();

    return (
        <div className={'FormContainer'}>
            <Typography variant="h5" align="left" color="primary" className={classes.header}>
                {props.header}
            </Typography>
            {props.children}
        </div>
    );
}
