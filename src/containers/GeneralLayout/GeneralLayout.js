import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

// routes config
import GeneralRoutes from '../../Routes/GeneralRoutes';

const DefaultLayout = React.lazy(() => import('../DefaultLayout/DefaultLayout'));
const HomeLayout = React.lazy(() => import('../HomeLayout/HomeLayout'));
//const HomeNav = React.lazy(() => import('./HomeNav'));
//const HomeFooter = React.lazy(() => import('./HomeFooter'));

const GeneralLayout = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" name="Admin Dashboard" render={props => <DefaultLayout {...props} />} />
        <Route path="/" name="Home" render={props => <HomeLayout {...props} />} />
      </Switch>
    </>
  )
}
export default GeneralLayout;