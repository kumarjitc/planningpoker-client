import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Badge
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PollIcon from '@material-ui/icons/Poll';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './StoryCard.css';

export default function StoryCard(props) {
    const isOnBoard = props.isOnBoard ? (<Typography variant="h5" component="h2" color="textSecondary" className="on-board-header">ON BOARD</Typography>) : null;
    const showResults = !props.isOnBoard ? (<Badge badgeContent={props.result} color="primary" className="story-result" title="Result">
        <PollIcon />
    </Badge>) : null;
    const linkToStory = props.link ? (<Button
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<ExitToAppIcon />}
        className="action-view-story"
        onClick={() => window.open(props.link)}>Open Story</Button>) : null;

    return (
        <Card className={`story-card ${props.isOnBoard ? 'on-board' : ''}`} variant="outlined">
            <CardContent className="story-summary">
                {isOnBoard}
                <Typography variant="body" component="p" color="textSecondary">{props.summary}</Typography>
            </CardContent>
            <CardActions className="story-actions">
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<VisibilityIcon />}
                    className="action-view-story">View Hand</Button>
                {linkToStory}
                {showResults}
            </CardActions>
        </Card>
    )
};