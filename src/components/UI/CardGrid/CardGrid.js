import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SelectedIcon from '@material-ui/icons/BookTwoTone'

const useStyles = makeStyles({
    root: {
        display: 'inline-flex',
        flexWrap: 'wrap',
        flex: 1,
        gap: '12px'
    },
    card: {
        width: '31%',
        backgroundColor: '#DBFDF2',
        boxShadow: '1px 1px 3px #195ae4',
        '& div': {
            padding: 0
        },
        '& h2': {
            border: 'none',
            fontSize: '15px',
            lineHeight: '20px',
            fontWeight: 700,
            textTransform: 'uppercase',
            padding: '5px',
            backgroundColor: '#BBEFDE',
            color: '#2B73E4'
        },
        '& h3': {
            border: 'none',
            fontSize: '15px',
            lineHeight: '20px',
            fontWeight: 700,
            textTransform: 'capitalize',
            textAlign: 'right',
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            padding: '5px',
            color: '#399DE6',
            fontStyle: 'italic'
        },
        '& p': {
            fontSize: '12px',
            lineHeight: '15px',
            padding: '5px',
            textAlign: 'left',
            color: '#2B73E4'
        }
    },
    selected: {
        color: 'green'
    }
});

const Card = (props) => {
    const classes = useStyles();

    return (
        <MaterialCard className={classes.card} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2" color="textSecondary">
                    {props.name}
                    <SelectedIcon className={classes.selected} />
                </Typography>
                <Typography variant="h5" component="h3" color="textSecondary">{props.owner}</Typography>
                <Typography variant="body" component="p" color="textSecondary">{props.description}</Typography>
            </CardContent>
        </MaterialCard>
    );
}

const CardGrid = (props) => {
    const classes = useStyles();

    const grid = props && props.rows ? props.rows.map(item => {
        return <Card {...item} />;
    }) : null;

    return (
        <div className={classes.root}>
            { grid}
        </div>
    );
};

export default CardGrid;