import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import JoinRoomIcon from '@material-ui/icons/GroupAddTwoTone';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoardTwoTone';
import HomeIcon from '@material-ui/icons/HomeTwoTone';
import DashBoardIcon from '@material-ui/icons/AccountTreeTwoTone';

import { ColorCodes } from '../../utils';

import StartNewgame from '../StartNewGame/StartNewGame';
import Sprints from '../Setup/Sprints/Sprints';

import Routes from '../../utils/RouteConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ColorCodes.BASE_COLOR
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  fab: {
    margin: theme.spacing(2),
  },
}));

export default function AppShell() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Router>
        <AppBar position="sticky" className={classes.root}>
          <Toolbar>
            <Tooltip title="Join Room">
              <Link to={Routes.HOME}>
                <Fab className={classes.fab} size="small">
                  <HomeIcon />
                </Fab>
              </Link>
            </Tooltip>
            <Typography className={classes.title} variant="h6" noWrap>
              Planning Poker - Your SCRUM Buddy
            </Typography>
            <div className={classes.grow} />
            <div>
              <Tooltip title="Join Room">
                <Fab className={classes.fab} size="small">
                  <JoinRoomIcon />
                </Fab>
              </Tooltip>
              <Tooltip title="Projects And Sprints">
                <Link to={Routes.SPRINTS}>
                  <Fab className={classes.fab} size="small">
                    <DashBoardIcon />
                  </Fab>
                </Link>
              </Tooltip>
              <Tooltip title="Start New Game">
                <Link to={Routes.GAME_START}>
                  <Fab className={classes.fab} size="small">
                    <DeveloperBoardIcon />
                  </Fab>
                </Link>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path={Routes.HOME} exact component={null} />
          <Route path={Routes.SPRINTS} exact component={Sprints} />
          <Route path={Routes.GAME_START} exact component={StartNewgame} />
        </Switch>
      </Router>
    </div>
  );
}
