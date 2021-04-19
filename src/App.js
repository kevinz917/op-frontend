import { Router, Route, Switch, withRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewItem from './pages/NewItem/NewItem';

import './common/styles/colors.scss';
import './common/styles/typography.scss';
import './common/styles/overall.scss';
import history from './common/components/Router/history';

const App = () => {
  return (
    <div className="overall-page-container">
      <div className="home-container">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={NewItem} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
