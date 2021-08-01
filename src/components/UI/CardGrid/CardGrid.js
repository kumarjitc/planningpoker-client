import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import SelectedIcon from '@material-ui/icons/BookTwoTone'
import EditIcon from '@material-ui/icons/EditTwoTone'

const useStyles = makeStyles({
    root: {
        display: 'inline-flex',
        flexWrap: 'wrap',
        flex: 1,
        gap: '12px',
        maxHeight: '325px',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            width: '5px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#F0D4D3',
            boxShadow: 'inset 1px 1px 5px #E08281',
            borderRadius: '5px'
        }
    },
    card: {
        width: '47%',
        backgroundColor: '#DBFDF2',
        boxShadow: '1px 1px 3px #195ae4',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#92E2C9'
        },
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
        },
        '& .selected': {
            color: 'green',
            fontSize: '40px'
        },
        '& .actionArea': {
            border: 'none',
            fontSize: '15px',
            lineHeight: '20px',
            fontWeight: 700,
            textTransform: 'uppercase',
            padding: '5px',
            backgroundColor: '#BBEFDE',
            color: '#2B73E4',
            padding: '10px!important'
        }
    }
});

const Card = (props) => {
    const classes = useStyles();
    const isSelected = props.isSelected ? (<SelectedIcon className="selected" />) : null;

    return (
        <MaterialCard className={classes.card} variant="outlined">
            <CardActions className="actionArea">
                {isSelected}
                <Typography variant="h5" component="h2" color="textSecondary">
                    {props.name}
                </Typography>
                <Tooltip title="Edit">
                    <Fab size="small" onClick={() => { props.onEditClick(props._id); }}>
                        <EditIcon />
                    </Fab>
                </Tooltip>
            </CardActions>
            <CardContent>
                <Typography variant="h5" component="h3" color="textSecondary">{props.owner}</Typography>
                <Typography variant="caption" component="p" color="textSecondary">{props.desc}</Typography>
            </CardContent>
        </MaterialCard>
    );
}

const CardGrid = (props) => {
    const classes = useStyles();

    const grid = props && props.rows ? props.rows.map((item, index) => {
        return <Card {...item} onEditClick={props.onEditClick} key={index} />;
    }) : null;

    return (
        <div className={classes.root}>
            {grid}
        </div>
    );
};

export default CardGrid;