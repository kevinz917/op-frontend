import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewItem from './pages/NewItem/NewItem';
import PageLoadingBar from './common/components/PageLoadingBar/PageLoadingBar';

import './common/styles/colors.scss';
import './common/styles/typography.scss';
import './common/styles/overall.scss';
import history from './common/components/Router/history';

const App = () => {
  return (
    <div className="overall-page-container">
      <PageLoadingBar />
      <div className="home-container">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={NewItem} />
            <Route path="/edit/:id" component={NewItem} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
