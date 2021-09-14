import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import API from '../../Environment/Environment'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor (props) {
    super(props);
    this.Logout = this.Logout.bind(this)

    this.state={
      UserPic: "",
      SchoolLogo: "",
      MessageCount: 0,
      TaskCount: 0,
      UpdateCount: 0
    }
  }
  Logout(e){
    e.preventDefault()
    localStorage.removeItem(window.location.host);
    window.history.State("/")
  }
  
  async componentDidMount(){
    let logoUrl = "settings/getsetting/?query=Logo"
    let usrUrl = "/account/getInfo/?query=ProfilePicture"
    let msgUrl = "/account/getInfo/?query=Messages"
    let tskUrl = "/account/getInfo/?query=Tasks"
    let updUrl = "/account/getInfo/query=Updates"
    const getLogo = async () => {
      let logoResponse = await API.get(logoUrl)
        .catch(
          console.log("unable to retrieve logo")
        )
      if (logoResponse && (logoResponse.status >= 200 && logoResponse.status <= 299)) {
        this.setState({SchoolLogo: logoResponse.data})
      }
    }
    const getPic = async () => {
      let usrResponse = await API.get(usrUrl)
        .catch(
          console.log("unable to retrieve profile picture")
        )
      if (usrResponse && (usrResponse.status >= 200 && usrResponse.status <= 299)) {
        this.setState({UserPic: usrResponse.data})
      }
    }
    const getMsg = async () => {
      let msgResponse = await API.get(msgUrl)
        .catch(
          console.log("unable to retrieve user messages")
        )
      if (msgResponse && (msgResponse.status >= 200 && msgResponse.status <= 299)) {
        this.setState({MessageCount: msgResponse.data})
      }
    }
    const getTask = async () => {
      let tskResponse = await API.get(tskUrl)
        .catch(
          console.log("unable to retrieve user tasks")
        )
      if (tskResponse && (tskResponse.status >= 200 && tskResponse.status <= 299)) {
        this.setState({TaskCount: tskResponse.data})
      }
    }
    const getUpd = async () => {
      let updResponse = await API.get(updUrl)
        .catch(
          console.log("unable to retrieve user dates")
        )
      if (updResponse && (updResponse.status >= 200 && updResponse.status <= 299)) {
        this.setState({UpdateCount: updResponse.data})
      }
    }
    getLogo()
    getPic()
    getMsg()
    getTask()
    getUpd()
  }
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: this.state.SchoolLogo, width: 89, height: 25, alt: 'Logo' }}
          minimized={{ src: this.state.SchoolLogo, width: 30, height: 30, alt: 'Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        {this.props.isAdmin ? (
          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/dashboard/users/index" className="nav-link">Users</Link>
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="/dashboard/settings/index" className="nav-link">Settings</NavLink>
            </NavItem>
          </Nav>
        ) : {}
        }
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="/account/tasks" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">{this.state.TaskCount == 0?"": this.state.TaskCount}</Badge></NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={this.state.UserLogo} className="img-avatar" alt="user pic" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><Link to="/development/updates"><i className="fa fa-bell-o"></i><i className="nav-link">Updates</i><Badge color="info">{this.state.UpdateCount }</Badge></Link></DropdownItem>
              <DropdownItem><Link to="/account/messages"><i className="fa fa-envelope-o"></i><i className="nav-link">Messages</i><Badge color="success">{this.state.MessageCount == 0?"": this.state.MessageCount}</Badge></Link></DropdownItem>
              <DropdownItem><Link to="/account/tasks"><i className="fa fa-tasks"></i><i className="nav-link">Tasks</i><Badge color="danger">{this.state.TaskCount == 0?"": this.state.TaskCount}</Badge></Link></DropdownItem>
              <DropdownItem><Link to="/account/profile"><i className="fa fa-user"></i><i className="nav-link">Profile</i></Link></DropdownItem>
              <DropdownItem><Link to="/account/profile/settings"><i className="fa fa-wrench"></i><i className="nav-link">Settings</i></Link></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><Link to="/locked"><i className="fa fa-shield"></i> Lock Account</Link></DropdownItem>
              <DropdownItem onClick={this.Logout}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
