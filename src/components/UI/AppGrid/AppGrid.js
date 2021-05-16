import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DataGrid, GridToolbarContainer, GridFilterToolbarButton } from '@material-ui/data-grid';

const loadStyles = makeStyles((theme) => ({
    container: {
        height: 500,
        width: '90%',
        margin: 'auto'
    },
    root: {
        '& .MuiDataGrid-columnsContainer': {
            color: 'rgba(255,255,255,0.85)',
            backgroundColor: '#487fd8',
            '& .MuiDataGrid-colCellTitle': {
                fontSize: 18,
                fontWeight: '700'
            },
            '& .MuiIconButton-label': {
                color: 'rgba(255,255,255,0.85)'
            }
        },
    }
}));

const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <GridFilterToolbarButton />
        </GridToolbarContainer>
    );
}

/**
 * @todo - Pass ProjectList to this component
 */
export default function AppGrid(props) {
    const classes = loadStyles();

    const handleEditCellChangeCommitted = React.useCallback(
        ({ id, field, props }) => {
            console.log('DATA', props.value);
        },
        [],
    );

    const grid = Object.keys(props).length ? (<DataGrid
        rows={props.rows}
        columns={props.columns}
        className={classes.root}
        components={{
            Toolbar: CustomToolbar,
        }}
        onEditCellChangeCommitted={handleEditCellChangeCommitted}
    />) : null;

    return (
        <div className="project-list">
            <div className={classes.container}>
                {grid}
            </div>
        </div>
    );
}