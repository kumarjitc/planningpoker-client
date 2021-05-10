import React from 'react';
import {
    Chip
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

import './Card.css';

export default function Card(props) {
    let showPlayerChip = props.isOnBoard ? (<Chip
        size="small"
        icon={<FaceIcon />}
        label={props.player}
    />) : null;

    return (
        <div>
            <div className={`Card ${props.isOnBoard ? 'played' : 'hand'} ${props.isPlayed ? 'active' : ''}`} onClick={() => {
                !props.isOnBoard && props.onClick(props.value);
            }}>
                {props.value || '?'}
            </div>
            {showPlayerChip}
        </div>
    );
}