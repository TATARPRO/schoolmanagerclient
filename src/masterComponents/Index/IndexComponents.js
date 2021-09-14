import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../../Environment/loader.css'
import './pagination.css'
// Pagination from "./Pagination";
import {
  Input, InputGroup, InputGroupAddon, InputGroupText, Button, Card, CardBody, CardHeader, Col, Row, Table,
  PaginationItem, PaginationLink, Pagination
} from 'reactstrap';


export default (props) => {
  const [currentItems, setCurrentItems] = useState([])
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState([])
  const [ItemCount, setCount] = useState(0)
  // state = {
  //   allCountries: [],
  //   currentCountries: [],
  //   currentPage: null,
  //   totalPages: null
  // };

  // useEffect(() => {
  //   setCount(props.ItemCount)
  // })
  const onPageChanged = data => {
    const { allItems } = props;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentItems = allItems.slice(offset, offset + pageLimit);

    setCurrentItems(currentItems)
    setCurrentPage(currentPage)
    setTotalPages(totalPages)
    //this.setState({ currentPage, currentItems, totalPages });
  };

  const ListSearch = (props) => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
      const { value } = event.target
      setSearch(value);
      //props.search(value)
    }

    return (
      <div className="row p-a">
        <div className="col-sm-3">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={props.Link} className="nav-link">
                <i className="fa fa-fw fa-plus text-muted"></i>
                <span>Add New {props.Name}</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <ul className="nav navbar-nav mr-auto">
            {props.Upload ? (
              <li className="nav-item">
                <Link to={props.Upload.Link} className="nav-link">
                  <i className="fa fa-upload text-muted"></i>
                  <span>Upload {props.Upload.Name}</span>
                </Link>
              </li>
            ) : (<></>)}
          </ul>
        </div>
        <div className="col-sm-3">
          <ul className="nav navbar-nav mr-auto">
            {props.Download ? (
              <li className="nav-item">
                <Link to={props.Download.Link} className="nav-link">
                  <i className="fa fa-download text-muted"></i>
                  <span>Download {props.Download.Name}</span>
                </Link>
              </li>
            ) : (<></>)}
          </ul>
        </div>
        <div className="col-sm-3">
          <InputGroup>
            <Input type="text" id="input1-group1" value={search} name="SearchString" onChange={handleChange} placeholder="Search" />
            <InputGroupAddon addonType="prepend">
              <InputGroupText onClick={() => props.search(search)}>
                <i className="fa fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );

  }
  const Title = (props) => {
    return (
      <>
        <h2>{props.Name}</h2>
        <small>{props.Description}</small>
      </>
    );
  }
  const printTable = () => {
    // let body = props.TableBody;
    //document.querySelector('table').print()

    //document.querySelector('.action-col').className = "no-print-area"
    //window.print()
    //document.querySelector('.no-print-area').className = "action-col"
    // let n = fff.remo
    // body.props.children.forEach(element => {
    //   element.props.children[element.props.children.length - 1] = null
    // });
    // return (<Table bordered responsive striped media="print">
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       {props.Headers.map((value, index) => {
    //         return <th>{value}</th>
    //       })}
    //     </tr>
    //   </thead>
    //   {body}
    // </Table>)
  }
  const PageItems = (props) => {
    if (props.Count < 1) {
      return (<PaginationItem ><PaginationLink tag="button">1</PaginationLink></PaginationItem>)
    } else {
      for (let x = 0; x < props.Count; x++) {
        return (<PaginationItem onClick={() => props.PageChanged(x + 1)}><PaginationLink tag="button">{(x + 1)}</PaginationLink></PaginationItem>)
      }
    }
  }
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
              <Title {...props.Title} />
              <div>
                <ListSearch Name={props.Name} Upload={props.Upload} Download={props.Download} Link={props.NewLink} search={props.Search} onChange={props.searchChanged} />
              </div>
            </CardHeader>
            <CardBody>
              <Table bordered responsive striped media="print">
                <thead>
                  <tr>
                    <th>#</th>
                    {props.Headers.map((value, index) => {
                      return <th>{value}</th>
                    })}
                    <th id="action-col" className="action-col">Action</th>
                  </tr>
                </thead>
                {props.TableBody}
              </Table>
              <Pagination>
                <PageItems Count={props.ItemCount} PageChanged={props.PageChanged} />
                <Button className="btn-twitter btn-brand" onClick={() => printTable()}><i className="fa fa-print"></i><span>Print</span></Button>

              </Pagination>

            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  )
}
const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const { value } = event.target
    setSearch(value);
  }

  return (
    <div className="row p-a">
      <div className="col-sm-3">
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={props.Link} className="nav-link">
              <i className="fa fa-fw fa-plus text-muted"></i>
              <span>Add New {props.Name}</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-sm-3">
        <ul className="nav navbar-nav mr-auto">
          {props.Upload ? (
            <li className="nav-item">
              <Link to={props.Upload.Link} className="nav-link">
                <i className="fa fa-upload text-muted"></i>
                <span>Upload {props.Upload.Name}</span>
              </Link>
            </li>
          ) : (<></>)}
        </ul>
      </div>
      <div className="col-sm-3">
        <ul className="nav navbar-nav mr-auto">
          {props.Download ? (
            <li className="nav-item">
              <Link to={props.Download.Link} className="nav-link">
                <i className="fa fa-download text-muted"></i>
                <span>Download {props.Download.Name}</span>
              </Link>
            </li>
          ) : (<></>)}
        </ul>
      </div>
      <div className="col-sm-3 float-right">
        <InputGroup>
          <Input type="text" id="input1-group1" value={search} name="SearchString" onChange={handleChange} placeholder="Search" />
          <InputGroupAddon addonType="prepend">
            <InputGroupText onClick={() => props.search(search)}>
              <i className="fa fa-search"></i>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );

}
const ListSearch = (props) => {
  const [searchString, setSearch ] = useState("")
  const handleSearchChanged = (event) => {
    const { value } = event.target
    setSearch(value)
    props.handleSearch(value)
  }
  return (
    <div className="col-sm-3 float-right">
      <InputGroup>
        <Input type="text" id="input1-group1" value={searchString} name="SearchString" onChange={handleSearchChanged} placeholder="Search" />
        <InputGroupAddon addonType="prepend">
          <InputGroupText onClick={() => props.handleSearch(searchString)}>
            <i className="fa fa-search"></i>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
const ListTitle = (props) => {
  return (
    <>
      <h2>{props.pageName}</h2>
      <small>{props.pageDescription}</small>
    </>
  );
}
const ListNew = (props) => {
  return (
    <div className="col-sm-3 float-left">
      <ul className="nav navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={props.newLink} className="nav-link">
            <i className="fa fa-fw fa-plus text-muted"></i>
            <span>Add New {props.Name}</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
const ListUpload = (props) => {
  return (
    <div className="col-sm-3">
      <ul className="nav navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={props.uploadLink} className="nav-link">
            <i className="fa fa-upload text-muted"></i>
            <span>Upload {props.uploadName}</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
const ListDownload = (props) => {
  return (
    <div className="col-sm-3">
      <ul className="nav navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={props.downloadLink} className="nav-link">
            <i className="fa fa-download text-muted"></i>
            <span>Download {props.downloadName}</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        <th>#</th>
        {props.Headers.map((value, index) => {
          return <th>{value}</th>
        })}
        <th id="action-col" className="action-col">Action</th>
      </tr>
    </thead>
  )
}
const TableBody =(props)=>{

}
export {ListSearch, ListTitle, ListNew, ListUpload, ListDownload, TableHeader };

