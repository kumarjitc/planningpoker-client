import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Badge,
    Tooltip,
    Fab
} from '@material-ui/core';
import ViewHand from '@material-ui/icons/GamesTwoTone';
import PollIcon from '@material-ui/icons/Poll';
import ViewStory from '@material-ui/icons/OpenInNewTwoTone';

import './StoryCard.css';

export default function StoryCard(props) {
    const isOnBoard = props.isOnBoard ? (<Typography variant="h5" component="h2" color="textSecondary" className="on-board-header">ON BOARD</Typography>) : null;
    const showResults = !props.isOnBoard ? (<Badge badgeContent={props.result} color="primary" className="story-result" title="Result">
        <PollIcon />
    </Badge>) : null;
    const linkToStory = props.link ? (<Tooltip title="View Story" onClick={() => window.open(props.link)}>
        <Fab size="small">
            <ViewStory />
        </Fab>
    </Tooltip>) : null;

    return (
        <Card className={`story-card ${props.isOnBoard ? 'on-board' : ''}`} variant="outlined">
            <CardContent className="story-summary">
                {isOnBoard}
                <Typography variant="body" component="p" color="textSecondary">{props.summary}</Typography>
            </CardContent>
            <CardActions className="story-actions">
                <Tooltip title="View Hand">
                    <Fab size="small">
                        <ViewHand />
                    </Fab>
                </Tooltip>
                {linkToStory}
                {showResults}
            </CardActions>
        </Card>
    )
};