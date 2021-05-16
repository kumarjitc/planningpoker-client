import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import JoinRoomIcon from '@material-ui/icons/GroupAddTwoTone';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoomTwoTone';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoardTwoTone';
import StartNewgame from '../StartNewGame/StartNewGame';
import { ColorCodes } from '../../utils';
import GameBoard from '../GamePlay/GameBoard/GameBoard';
import Projects from '../Setup/Projects/Projects';
import Sprints from '../Setup/Sprints/Sprints';

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
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
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
            <Tooltip title="Start New Game">
              <Fab className={classes.fab} size="small">
                <DeveloperBoardIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="Create Room">
              <Fab className={classes.fab} size="small">
                <MeetingRoomIcon />
              </Fab>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <Sprints />
      {/* <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/history" exact component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout> */}
    </div>
  );
}
