import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { FormInput } from '../..';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    item: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

export default function FormGroup(props) {
    const classes = useStyles();
    let state = props;

    return (
        <form className={classes.root} noValidate autoComplete="off" align="left">
            <Grid container spacing={3} className={classes.item}>
                {
                    Object.keys(state).map(control => {
                        return (
                            <Grid item xs={12}>
                                <FormInput fullWidth={props.fullWidth} {...state[control]} name={control} key={control} onChange={props.onChange} onBlur={props.onBlur} />
                            </Grid>)
                    })
                }
            </Grid>
        </form>
    );
}
