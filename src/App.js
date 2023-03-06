import './App.css';
import LadingPage from './pages/LadingPage';
import BlankPage from './pages/BlankPage';
import CareesPage from './pages/CareerPage';
import DetailCareerPage from './pages/DetailCareerPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path='/' exact component={LadingPage} />
        <Route path='/blank' component={BlankPage} />
        <Route path='/career' component={CareesPage} />
        <Route path='/detail-career/:id' component={DetailCareerPage} />
      </Switch>
    </Router>
  );
}

export default App;
