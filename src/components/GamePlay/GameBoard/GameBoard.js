import { Component } from "react";
import {
    TableContainer,
    Table,
    Paper,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    Tooltip,
    Fab
} from '@material-ui/core';
import AddStory from '@material-ui/icons/AddBoxTwoTone';

import PlayingCard from '../../UI/PlayingCard/PlayingCard';
import StoryCard from "../../UI/StoryCard/StoryCard";

import './GameBoard.css';
import '../../../styles/styles.css';

export default class GameBoard extends Component {
    state = {
        board: [{
            value: 3,
            player: 'Kumarjit'
        }, {
            value: 4,
            player: 'Rahul'
        }, {
            value: 1,
            player: 'Alec'
        }, {
            value: 3,
            player: 'Kumarjit'
        }, {
            value: 4,
            player: 'Rahul'
        }, {
            value: 1,
            player: 'Alec'
        }, {
            value: 3,
            player: 'Kumarjit'
        }, {
            value: 4,
            player: 'Rahul'
        }, {
            value: 1,
            player: 'Alec'
        }],
        hand: ['?', '0', '1', '2', '3', '5', '8', '13'],
        played: null,
        storyBoard: [{
            summary: 'This is a story This is a story This is a story This is a story This is a story This is a story',
            link: 'https://google.com',
            result: 4
        }, {
            summary: 'This is another story This is a story This is a story This is a story This is a story This is a story',
            result: 5
        }, {
            summary: 'This is one another story This is a story This is a story This is a story This is a story This is a story',
            result: null,
            isOnBoard: true
        }]
    };

    componentDidMount = () => {
        this.setState({
            ...this.state
        });
    };

    onPlay = (value) => {
        this.setState({
            ...this.state,
            played: value
        });
    }

    render() {
        return (
            <div className="player-view">
                <div className="playing-hand">
                    <h2>Hand</h2>
                    <div className="my-hand">
                        {
                            this.state.hand.map(item => {
                                return (<PlayingCard value={item} isPlayed={this.state.played && this.state.played === item} onClick={this.onPlay} key={item} />);
                            })
                        }
                    </div>
                    <hr className="section-break" />
                    <h2>Board</h2>
                    <div className="board">
                        {
                            this.state.board.map(item => {
                                return (<PlayingCard {...item} isOnBoard={true} key={item.value + '-' + item.player} />);
                            })
                        }
                    </div>
                    <hr className="section-break" />
                    <h2>Turn Summary</h2>
                    <div className="turn-summary">
                        <TableContainer className="table" component={Paper}>
                            <Table aria-label="Results Table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="head-cell" align="right">Average</TableCell>
                                        <TableCell className="head-cell" align="right">Lowest</TableCell>
                                        <TableCell className="head-cell" align="right">Highest</TableCell>
                                        <TableCell className="head-cell" align="right">Won</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="right">3</TableCell>
                                        <TableCell align="right">5</TableCell>
                                        <TableCell align="right">2</TableCell>
                                        <TableCell align="right">4</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div className="story-board">
                    <h2>
                        Story Board
                        <Tooltip title="Add Story">
                            <Fab size="small">
                                <AddStory />
                            </Fab>
                        </Tooltip>
                    </h2>
                    <div className="story-list">
                        <div className="story">
                            {
                                this.state.storyBoard.map(story => {
                                    return <StoryCard {...story} />;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}