import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { AppSwitch } from '@coreui/react'
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Label,
  Input,
  Collapse,
  InputGroup,
  InputGroupAddon,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import FormGroup from 'reactstrap/lib/FormGroup';
import API from '../../Environment/Environment';


const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  
  updateSettingUrl = "settings/updatePartial"
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this)
    this.createUser = this.createUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.calculate = this.calculate.bind(this)

    this.updateSchName = this.updateSchName.bind(this)
    this.updateSchAddr = this.updateSchAddr.bind(this)
    this.updateSchLogo = this.updateSchLogo.bind(this)
    this.updateCurrTerm = this.updateCurrTerm.bind(this)
    this.updateCurrSess = this.updateCurrSess.bind(this)
    this.updateCombTest = this.updateCombTest.bind(this)
    this.updateMaxTest = this.updateMaxTest.bind(this)
    this.updateExam = this.updateExam.bind(this)
   
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
  

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      creatingUser: false,
      terms: [],
      sessions: [],
      userData: {
        Username: "",
        Password: "",
        Email: "",
        Role: ""
      },
      "School-Name": "",
      upSchAddr: false,
      upSchName: false,
      upSchLogo: false,
      upPrinName: false,
      upCurTerm: false,
      upCurSess: false,
      upCombTest: false,
      upSingTest: false,
      upExam: false,
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
  handleUserChange(event) {
  const {name, value} = event.target
    this.setState({userData:{
      ...this.state.userData,
      [name]: value
    }})
  }
  async createUser() {
    this.setState({creatingUser: true})
   let usrUrl = "authentication/registerPartial"
    let sttResponse = await API.post(usrUrl, this.state.userData)
    .catch(error=>{
      this.setState({creatingUser: false})
      alert("Error creating user. Please try again!")
    })
    this.setState({creatingUser: false})
  }
 
  handleChange(event){
    const { name, value } = event.target;
    this.setState({ [name]: value })
}
handleChecked(event){
  const { name, checked } = event.target;
  this.setState({ [name]: checked })
}
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }
async updateSchName(){
  this.setState({upSchName: true})
  let setting = {
    Name: "School Name",
    Value: this.state.SchoolName
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(error=>{
    this.setState({upSchName: false})
    alert("Error updating school name. Please try again!")
  })
  this.setState({upSchName: false})
}
async updateSchAddr(){
  this.setState({upSchAddr: true})
  let setting = {
    Name: "School Address",
    Value: this.state.SchoolAddress
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(error=>{
    this.setState({upSchAddr: false})
    alert("Error updating school address. Please try again!")
  })
  this.setState({upSchAddr: false})
}
async updateSchLogo(){
  this.setState({upSchLogo: true})
  let setting = {
    Name: "School Logo",
    Value: this.state.SchoolLogo
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(error=>{
    this.setState({upSchLogo: false})
    alert("Error updating school logo. Please try again!")
  })
  this.setState({upSchLogo: false})
}
async updateCurrTerm(){
  this.setState({upCurTerm: true})
  let setting = {
    Name: "Current Term",
    Value: this.state.CurrentTerm
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(error=>{
    this.setState({upCurTerm: false})
    alert("Error updating current term. Please try again!")
  })
  this.setState({upCurTerm: false})
}
async updateCurrSess(){
  this.setState({upCurSess: true})
  let setting = {
    Name: "Current Session",
    Value: this.state.CurrentSession
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(error=>{
    this.setState({upCurSess: false})
    alert("Error updating current session. Please try again!")
  })
  this.setState({upCurSess: false})
}
async updateCombTest(){
  this.setState({upCombTest: true})
  let setting = {
    Name: "Max Value Test",
    Value: this.state.TestCombinedMax
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(error=>{
    this.setState({upCombTest: false})
    alert("Error updating maximum value for combined test scores. Please try again!")
  })
  this.setState({upCombTest: false})
}
async updateMaxTest(){
  this.setState({upSingTest: true})
  let setting = {
    Name: "Max Test Single",
    Value: this.state.SchoolAddress
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(error=>{
    this.setState({upSingTest: false})
    alert("Error updating maximum value for single test. Please try again!")
  })
  this.setState({upSingTest: false})
}
async updateExam(){
  this.setState({upExam: true})
  let setting = {
    Name: "Exam Max",
    Value: this.state.ExamMax
  }
  let sttResponse = await API.post(this.updateSettingUrl, setting)
  .catch(error=>{
    this.setState({upExam: false})
    alert("Error updating maximum value for exam. Please try again!")
  })
  this.setState({upExam: false})
}
calculate(){
this.props.history.push("/dashboard/settings/calculateresult")
}
  async componentDidMount(){
    let trmUrl = "terms/getterms/"
    let sshUrl = "sessions/getsessions/"
   
    //retrieve terms
      let trmResponse =  await API.get(trmUrl)
      .catch(error =>{
        console.log("error retrieving terms") 
      })
      if(trmResponse && (trmResponse.status >= 200 && trmResponse.status <= 299)){
        this.setState({terms: trmResponse.data})
      }

      //retrieve sessions
      let sshResponse =  await API.get(sshUrl)
      .catch(error =>{
        console.log("error retrieving sessions") 
      })
      if(sshResponse && (sshResponse.status >= 200 && sshResponse.status <= 299)){
        this.setState({sessions: sshResponse.data})
      }
    
      //get school name
      let nnUrl = "settings/getsetting/?query=School Name"
      let schNameResp =  await API.get(nnUrl)
      .catch(error =>{
        console.log("error retrieving school name") 
      }
      )
      if(schNameResp && (schNameResp.status >= 200 && schNameResp.status <= 299)){
        this.setState({School_Name: schNameResp.data.Value})
      }

      //Get school address
      let adUrl = "settings/getsetting/?query=School Address"
      let schAdResp =  await API.get(adUrl)
      .catch(error =>{
        console.log("error retrieving school address") 
      })
      if(schAdResp && (schAdResp.status >= 200 && schAdResp.status <= 299)){
        this.setState({School_Address: schAdResp.data.Value})
      }

      //Get current term
      let cTUrl = "settings/getsetting/?query=Current Term"
      let cTResp =  await API.get(cTUrl)
      .catch(error =>{
        console.log("error retrieving current term") 
      })
      if(cTResp && (cTResp.status >= 200 && cTResp.status <= 299)){
        let trmVal = cTResp.data.Value
        let trmRl = `terms/getterm/?query=${trmVal}`
        let secResp =  await API.get(trmRl)
        .catch(error =>{
        console.log("error retrieving current term") 
      })
      if(secResp && (secResp.status >= 200 && secResp.status <= 299)){
        this.setState({Current_Term: secResp.data.Id})
      }
      }

      //Get current session
      let cSUrl = "settings/getsetting/?query=Current Session"
      let cSResp =  await API.get(cSUrl)
      .catch(error =>{
        console.log("error retrieving current session") 
      })
      if(cSResp && (cSResp.status >= 200 && cSResp.status <= 299)){
        let trmVal = cSResp.data.Value
        let trmRl = `sessions/getsession/?query=${trmVal}`
        let secResp =  await API.get(trmRl)
        .catch(error =>{
        console.log("error retrieving current session") 
      })
      if(secResp && (secResp.status >= 200 && secResp.status <= 299)){
        this.setState({Current_Session: secResp.data.Id})
      }
      }

      //Get max test value
      let maxTUrl = "settings/getsetting/?query=Max Test Value"
      let maxTResp =  await API.get(maxTUrl)
      .catch(error =>{
        console.log("error retrieving maximum test value") 
      })
      if(maxTResp && (maxTResp.status >= 200 && maxTResp.status <= 299)){
        this.setState({Max_Test_Value: maxTResp.data.Value})
      }

       //Get max exam value
       let maxEUrl = "settings/getsetting/?query=Max Exam Value"
       let maxEResp =  await API.get(maxEUrl)
       .catch(error =>{
         console.log("error retrieving maximum exam value") 
       })
       if(maxEResp && (maxEResp.status >= 200 && maxEResp.status <= 299)){
         this.setState({Max_Exam_Value: maxEResp.data.Value})
       }

        //Retrieve release status
        let relUrl = "settings/getsetting/?query=Result Released"
        let relResp =  await API.get(relUrl)
        .catch(error =>{
          console.log("error retrieving release status") 
        })
        if(relResp && (relResp.status >= 200 && relResp.status <= 299)){
          this.setState({Released: relResp.data.Value})
        }
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Visits</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Unique</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Pageviews</div>
                    <strong>78.706 Views (60%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">New Users</div>
                    <strong>22.123 Users (80%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Bounce Rate</div>
                    <strong>Average Rate (40.15%)</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="40" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="6" xs="12">
            <Card>
              <CardHeader>
                <strong>Last logins'</strong>
              </CardHeader>
              <CardBody>

                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">User</th>
                      <th className="text-center">Date/Time</th>
                      <th className="text-center">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">#</td>
                      <td className="text-center">Yiorgos Avraamu </td>
                      <td className="text-center">64/04/2020</td>
                      <td className="text-center"><Badge className="txt-red">Admin</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" xs="12">
            <Card>
              <CardHeader>
                <strong>Messages for Administrator</strong>
              </CardHeader>
              <CardBody>

                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">Sender</th>
                      <th className="text-center">Message</th>
                      <th className="text-center">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">#</td>
                      <td className="text-center"> Yiorgos Avraamu</td>
                      <td className="text-center">Hurry up to the cinema....</td>
                      <td className="text-center">30/03/2020</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col sm="6" xs="12">
            <Card>
              <CardHeader>
                <strong>Create user</strong>
              </CardHeader>
              <CardBody>
                <h2 className="text-danger">{this.state.userError}</h2>
                <FormGroup row>
                  <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Username</Label>
                    <Input type="text" required id="" value="" name="Username" onChange={this.handleUserChange} />
                  </Col>
                  <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Email</Label>
                    <Input type="text" required id="" value="" name="Email" onChange={this.handleUserChange} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Password</Label>
                    <Input type="text" id="" value="" name="Password" onChange={this.handleUserChange} />
                  </Col>
                  <Col xs="12" md="6">
                    <Label htmlFor="hf-ClassName">Role</Label>
                    <Input type="select" name="Role" value="" onChange={this.handleUserChange}>
                      <option value="0">Student</option>
                      <option value="1">Teacher</option>
                      <option value="2">Admin</option>
                    </Input>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="button" size="sm" color="success" onClick={()=>this.createUser()}><i className="fa fa-dot-circle-o"></i> Create</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                {this.state.creatingUser ? <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading.." /> : <></>}
              </CardFooter>
            </Card>
          </Col>
          <Col sm="6" xs="12">
            <Card>
              <CardHeader>
                <strong>Messages for Administrator</strong>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col xl="12">
            <Card>
              <CardHeader onClick={this.toggle}>
                <i className="fa fa-align-justify"></i><strong>Advanced controls</strong>

              </CardHeader>
              <Collapse isOpen={this.state.collapse} >
                <CardBody>
                  <Row>
                    <Col sm="6" xs="12">
                      <Card>
                        <CardHeader>
                          <strong>Personal</strong>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col sm="6" xs="12">

                            </Col>
                            <Col sm="6" xs="12"></Col>
                          </Row>
                          <Row>
                            <Col sm="6" xs="12">
                              <Label>School Name</Label>
                              <InputGroup>
                                <Input type="text" name="School_Name" placeholder="School name" value={this.state.School_Name} onChange={this.handleChange} />
                                <InputGroupAddon addonType="append">
                                  <Button type="button" color="primary" onClick={this.updateSchName}><i className="fa fa-save"></i></Button>
                                </InputGroupAddon>
                                {this.state.upSchName ? <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="updating.." /> : <></>}
                              </InputGroup>
                            </Col>
                            <Col sm="6" xs="12">
                              <Label>School Address</Label>
                              <InputGroup>
                                <Input type="text" name="School_Address" placeholder="School Address" value={this.state.School_Address} onChange={this.handleChange} />
                                <InputGroupAddon addonType="append">
                                  <Button type="button" color="primary" onClick={this.updateSchAddr}><i className="fa fa-save"></i></Button>
                                </InputGroupAddon>
                                {this.state.upSchAddr ? <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="updating.." /> : <></>}
                              </InputGroup>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" xs="12">
                      <Card>
                        <CardHeader>
                          <strong>Relational</strong>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col sm="6" xs="12">
                              <Label>Current Term</Label>
                              <InputGroup>
                              <Input type="select" name="Current_Term" value={this.state.Current_Term} onChange={this.handleChange}>
                              {this.state.terms.map((value) =>{
                                  return <option key={value.Id} value={value.Id}>{value.Name}</option>
                              })}
                             </Input>
                                <InputGroupAddon addonType="append">
                                  <Button type="button" color="primary" onClick={this.updateCurrTerm}><i className="fa fa-save"></i></Button>
                                </InputGroupAddon>
                              </InputGroup>
                              {this.state.upCurTerm ? <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading.." /> : <></>}
              
                            </Col>
                            <Col sm="6" xs="12">
                              <Label>Current Session</Label>
                              <InputGroup>
                              <Input type="select" name="Current_Session" value={this.state.Current_Session} onChange={this.handleChange}>
                              {this.state.sessions.map((value) =>{
                                  return <option key={value.Id} value={value.Id}>{value.Name}</option>
                              })}
                             </Input>
                                <InputGroupAddon addonType="append">
                                  <Button type="button" color="primary" onClick={this.updateCurrSess}><i className="fa fa-save"></i></Button>
                                </InputGroupAddon>
                              </InputGroup>
                              {this.state.upCurSess ? <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading.." /> : <></>}
                              </Col>
                          </Row>
                          <Row>
                            <Col sm="6" xs="12">
                              <Label>Maximum test score</Label>
                              <InputGroup>
                                <Input type="text" name="Max_Test_Value" placeholder="Test maximum" value={this.state.Max_Test_Value} onChange={this.handleChange} />
                                <InputGroupAddon addonType="append">
                                  <Button type="button" color="primary" onClick={this.updateMaxTest}><i className="fa fa-save"></i></Button>
                                </InputGroupAddon>
                              </InputGroup>
                              {this.state.upSingTest ? <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading.." /> : <></>}
                              </Col>
                            <Col sm="6" xs="12">
                              <Label>Maximum exam score</Label>
                              <InputGroup>
                                <Input type="text" name="Max_Exam_Value" placeholder="Exam maximun" value={this.state.Max_Exam_Value} onChange={this.handleChange} />
                                <InputGroupAddon addonType="append">
                                  <Button type="button" color="primary" onClick={this.updateExam}><i className="fa fa-save"></i></Button>
                                </InputGroupAddon>
                              </InputGroup>
                              {this.state.upExam ? <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading.." /> : <></>}
                              </Col>
                          </Row>
                          <br />
                        <CardHeader>
                          <strong>Release/Withold results</strong>
                        </CardHeader>
                        <p>The implication of releasing results is that they are ready and can be viewed by 
                        users. If you flip the switch off, users can no longer view the result for the 
                        current term.</p>
                        <AppSwitch className={'mx-1'} variant={'pill'} color={'success'} label checked={this.state.Released} onChange={this.handleChecked} />
                        <br />
                        <CardHeader>
                          <strong>Calculate Results</strong>
                        </CardHeader>
                        <p>Results are not calculated automatically as you may assume. Calculating results is 
                        a batch work, hence needs to be done in order.</p>
                        <Button type="button" size="sm" color="success" name="calculate" onClick={()=>this.calculate()}><i className="fa fa-dot-circle-o"></i> Calculate</Button>
                        <Button type="button" size="sm" color="danger" name="recalculate" onClick={()=>this.calculate()}><i className="fa fa-ban"></i> Re-calculate</Button>
                
                          </CardBody>
                      </Card>
                    </Col>

                  </Row>

                </CardBody>
              </Collapse>
              <CardFooter>
                <hr />
                <p>Current state: {this.state.status}</p>
              </CardFooter>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Dashboard;
