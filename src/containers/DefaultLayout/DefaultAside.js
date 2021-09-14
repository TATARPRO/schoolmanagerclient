import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'
import API from '../../Environment/Environment'

{/*let AppSwitchx = React.lazy(()=>import('@coreui/react/lib/Switch'))*/}
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {
updateSettingUrl = "settings/updatePartial"
released = false
enableUpload = false
  constructor(props) {
    super(props);

    this.UploadState = this.UploadState.bind(this)
    this.ReleaseState = this.ReleaseState.bind(this)
    this.Calculate = this.Calculate.bind(this)
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      Released: false,
      EnableUpload: false
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
async UploadState(event){
  const {checked} = event.target
  this.setState({UploadState: checked})
  let setting = {
    Name: "Enable Uploads",
    Value: checked
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(
    alert("Error enabling scoresheet upload. Please try again!")
  )
  if(sttResponse && (sttResponse.status >= 200 && sttResponse.state <= 200)){
    this.setState({UploadState: checked})
  }
}
ReleaseState(event){
  // const dd = this.state
  // this.released =  true
  // this.checked = true

  // const {checked} = event.target
  // let setting = {
  //   Name: "Released",
  //   Value: checked
  // }
  // let sttResponse = await API.post(this.updateSettingUrl, setting)
  // .catch(error=>{
  //   this.setState({Released: this.state.Released})
  //   alert("Error enabling scoresheet upload. Please try again!")
  // })
  // if(sttResponse && (sttResponse.status >= 200 && sttResponse.state <= 200)){
  //   this.setState({Released: checked})
  // }
  //this.released = false
}
Calculate(){
this.props.history.push('/dashboard/calculate')
}
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                     onClick={() => {
                       this.toggle('2');
                     }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                     onClick={() => {
                       this.toggle('3');
                     }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        {this.props.isAdmin? <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <ListGroup className="list-group-accent" tag={'div'}>
            <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today</ListGroupItem>
            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
              <div className="avatar float-right">
                <img className="img-avatar" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
              </div>
              <div>Meeting with <strong>Aiesel Team</strong> </div>
              <small className="text-muted mr-3">
                <i className="icon-calendar"></i>&nbsp; 1 - 3pm
              </small>
              <small className="text-muted">
                <i className="icon-location-pin"></i> Gbk. Benue State
              </small>
            </ListGroupItem>
            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
              <div className="avatar float-right">
                <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com"></img>
              </div>
              <div>Skype with <strong>Admin</strong></div>
              <small className="text-muted mr-3">
                <i className="icon-calendar"></i>&nbsp; 4 - 5pm
              </small>
              <small className="text-muted">
                <i className="icon-social-skype"></i> On-line
              </small>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Tomorrow</ListGroupItem>
            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
              <div>New Update - <strong>deadline</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 10 - 11pm</small>
              <small className="text-muted"><i className="icon-home"></i>&nbsp; Basex HQ</small>
              <div className="avatars-stack mt-2">
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
              <div><strong>#10 Startups.Garden</strong> Meetup</div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>
              <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Park'n Gardens</small>
            </ListGroupItem>
            <ListGroupItem action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
              <div><strong>Team meeting</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 6pm</small>
              <small className="text-muted"><i className="icon-home"></i>&nbsp; GreatWoods</small>
              <div className="avatars-stack mt-2">
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={'assets/img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </TabPane>
        <TabPane tabId="2" className="p-3">
          <div className="message">
            <div className="py-3 pb-5 mr-3 float-left">
              <div className="avatar">
                <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Ako Taveshima</small>
              <small className="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">Team meeting</div>
            <small className="text-muted">....Retrieving content</small>
          </div>
          <hr />
          <div className="message">
            <div className="py-3 pb-5 mr-3 float-left">
              <div className="avatar">
                <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Okwori Emmanuel</small>
              <small className="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">Update UI</div>
            <small className="text-muted">...Retrieving content</small>
          </div>
          <hr />
          <div className="message">
            <div className="py-3 pb-5 mr-3 float-left">
              <div className="avatar">
                <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Ikerebo Ikenna</small>
              <small className="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">Batch Update</div>
            <small className="text-muted">...Retrieving content</small>
          </div>
          <hr />
          <div className="message">
            <div className="py-3 pb-5 mr-3 float-left">
              <div className="avatar">
                <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Admin</small>
              <small className="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">Analytics Update</div>
            <small className="text-muted">...Retrieving content</small>
          </div>
        </TabPane>
        <TabPane tabId="3" className="p-3">
          <h6>Settings</h6>
                   <hr />
          <div className="aside-options">
            <div className="clearfix mt-4">
              <small><b>Enable Uploads</b></small>
              <AppSwitch className={'float-right'} variant={'pill'} onChange={()=>this.UploadState()} label color={'success'} checked={this.enableUpload} size={'sm'}/>
            </div>
            <div>
              <small className="text-muted">...Teachers can upload scoresheets</small>
            </div>
          </div>

          <div className="aside-options">
            <div className="clearfix mt-3">
              <small><b>Release results</b></small>
              <AppSwitch className={'float-right'} variant={'pill'} onChange={()=>this.ReleaseState()} label checked={this.released} color={'success'} size={'sm'}/>
            </div>
            <div>
              <small className="text-muted">...Results will be available for checking</small>
            </div>
          </div>
          <div className="aside-options">
          <div className="clearfix mt-3">
            <small><b>Calculate results</b></small>
            <Button type="button" size="sm"className={'float-right'} onClick={this.Calculate} color="danger"><i className="fa fa-ban"></i></Button>
           
          </div>
          <div>
            <small className="text-muted">...Calculate results for the term</small>
          </div>
        </div>
          <hr />
          <h6>System Utilization</h6>

          <div className="text-uppercase mb-1 mt-4">
            <small><b>CPU Usage</b></small>
          </div>
          <Progress className="progress-xs" color="info" value="25" />
          <small className="text-muted">348 Processes. 1/4 Cores.</small>

          <div className="text-uppercase mb-1 mt-2">
            <small><b>Memory Usage</b></small>
          </div>
          <Progress className="progress-xs" color="warning" value="70" />
          <small className="text-muted">11444GB/16384MB</small>

          <div className="text-uppercase mb-1 mt-2">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <Progress className="progress-xs" color="danger" value="95" />
          <small className="text-muted">243GB/256GB</small>

          <div className="text-uppercase mb-1 mt-2">
            <small><b>SSD 2 Usage</b></small>
          </div>
          <Progress className="progress-xs" color="success" value="10" />
          <small className="text-muted">25GB/256GB</small>
        </TabPane>
      </TabContent>
    : null}
        
        </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
