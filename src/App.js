import './App.css';
import { AppShell } from './components';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <AppShell></AppShell>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
