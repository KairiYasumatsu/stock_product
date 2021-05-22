import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShowStock from '../components/Stock/Show';
import TopPage from '../components/TopPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={TopPage} exact={true} /> 
        <Route path="/stock/show/:id" component={ShowStock} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;