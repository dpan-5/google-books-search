import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search';
import Saved from './pages/Saved';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
