import React from 'react';

import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// Import css
// import './index.css';
import css from './styles/style.css';

// Import Components
import App from './App';
// import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ PhotoGrid }></IndexRoute>
        <Route path="/view/:postId" component={ Single }></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
registerServiceWorker();
