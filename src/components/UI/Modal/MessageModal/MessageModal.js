import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars(props) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(true);

    const onCloseClick = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };

    let message = props.status === 200 ? 'Operation Completed Successfully!' : 'Error Occurred During Processing';
    message = props.message || message;

    return (
        <div className={classes.root}>
            <Snackbar open={isOpen} autoHideDuration={10000} onClose={onCloseClick}>
                <Alert onClose={onCloseClick} severity={props.status === 200 ? SUCCESS : ERROR}>
                    {props.status === 200 ? message.message : message.errorMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export const [
    SUCCESS,
    ERROR
] = [
        'success',
        'error'
    ];
