import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
//import '../../css/fancybox/jquery.fancybox.css'

import 'jquery'
import $ from 'jquery'
import jQuery from 'jquery'

import '../../Environment/css/bootstrap.min.css'
import '../../Environment/css/font-awesome.min.css'
import '../../Environment/css/themify-icons.css'
import '../../Environment/css/magnific-popup.css'
import '../../Environment/css/animate.css'
import '../../Environment/css/owl.carousel.css'
import '../../Environment/css/style.css'

// routes config
import GeneralRoutes from '../../Routes/GeneralRoutes';

// Pages
const Login = React.lazy(() => import('../../views/Pages/Login'));
const Register = React.lazy(() => import('../../views/Pages/Register'));
const Page400 = React.lazy(() => import('../../views/Pages/Page400'));
const Page404 = React.lazy(() => import('../../views/Pages/Page404'));
const Page419 = React.lazy(() => import('../../views/Pages/Page419'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500'));

//partial components
const HomeNav = React.lazy(() => import('./HomeNav'));
const HomeFooter = React.lazy(() => import('./HomeFooter'));

const HomeLayout = (props) => {
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  return (
    <div id="wrapper" className="home-page">
     
      <HomeNav />
      <Switch>
        <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
        <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
        <Route exact path="/400" name="Page 400" render={props => <Page400 {...props} />} />
        <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
        <Route exact path="/419" name="Page 404" render={props => <Page419 {...props} />} />
        <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
        {GeneralRoutes.map((route, idx) => {
          return route.component ? (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={props => (
                <route.component {...props} />
              )} />
          ) : (null);
        })}
        <Redirect from="/" to="/index" />
      </Switch>
      <HomeFooter />
    </div>
  )
}
export default HomeLayout;