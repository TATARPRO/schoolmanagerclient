import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import {createBrowserHistory} from 'history'
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
import staffNav from '../../Navigation/StaffNav';
import studentNav from '../../Navigation/StudentNav';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  requiredNav;
  isAdmin = false;
  loading = () => {
      return <div className="animated fadeIn pt-1 text-center">Loading...</div>
  }
  validateCredentials = () => {
    //return <div clas sName="animated fadeIn pt-1 text-center">Loading...</div>
    const loginData = localStorage.getItem(window.location.host);
    const userCredentials = JSON.parse(loginData);
    if(userCredentials == null|| Date.now() > userCredentials.Expires){
      this.props.history.push("/login")
    }
    else{
      for(var x = 0; x < userCredentials.Roles.length; x++){
        switch (userCredentials.Roles[x]){
        case "SuperAdmin*":
          this.isAdmin = true
          this.requiredNav = navigation
        case "SuperAdmin":
          this.isAdmin = true;
          this.requiredNav = navigation;
        break;
        case "Admin":
          this.isAdmin = true;
          this.requiredNav = navigation;
        break;
        case "Teacher":
          this.requiredNav = staffNav;
        break;
        case "Student":
          this.requiredNav = studentNav
        break;
        default:
          this.props.history.push("/")
          break;
        }
      }
    }
  }
  signOut(e) {
    e.preventDefault()
    localStorage.removeItem(window.location.host);
    this.props.history.push("/")
  }

  render() {
    this.validateCredentials()
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={this.signOut} isAdmin={this.isAdmin}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={this.requiredNav} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
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
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside isAdmin={this.isAdmin} />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
