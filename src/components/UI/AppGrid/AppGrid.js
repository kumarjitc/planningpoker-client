import React from 'react';

import { DataGrid, GridToolbarContainer, GridFilterToolbarButton } from '@material-ui/data-grid';

const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <GridFilterToolbarButton />
        </GridToolbarContainer>
    );
}

export default function AppGrid(props) {
    const grid = Object.keys(props).length ? (<DataGrid rows={props.rows} columns={props.columns}
        components={{
            Toolbar: CustomToolbar,
        }}
    />) : null;

    return (
        <div className="project-list">
            <div style={{ height: 400, width: '100%' }}>
                {grid}
            </div>
        </div>
    );
}