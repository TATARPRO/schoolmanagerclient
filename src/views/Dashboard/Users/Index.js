import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import API, { resolveCode, Loader } from '../../../Environment/Environment'
import '../../../Environment/loader.css'
import {
    Input, InputGroup, InputGroupAddon, InputGroupText, Button,
    Card, CardBody, CardHeader, Col, Row, Table, PaginationItem,
    PaginationLink, Pagination
} from 'reactstrap';
import IndexComponent, { ListTitle, ListSearch, ListNew, ListDownload, ListUpload, TableHeader } from '../../../masterComponents/Index/IndexComponents';

//import Pagination from "../../../masterComponents/Index/Pagination";

const Index = (props) => {
    const [users, setUsers] = useState([[]]);
    const [tableSource, setSource] = useState([])
    const [loading, setLoading] = useState(true);
    const headers = ["Username", "Email", "Password", "Class", "Date Created", "Last Updated"]
    // Code is invoked after the component is mounted/inserted into the DOM tree.
    useEffect(() => {
        let getUrl = "userpasswords/getuserpasswords/";
        const retrieveUsers = async () => {
            const response = await API.get(getUrl)
                .catch(error => {
                    if (error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                        props.history.push(resolveCode(error.response.status));
                    }
                    if (error.response && (error.response.status >= 400 && error.response.status <= 499)) {
                        props.history.push(resolveCode(error.response.status))
                    }
                })
            if (response && (response.status >= 200 && response.status <= 299)) {
                setLoading(false);
                setUsers(response.data);
                setSource(response.data)
                let tPages = Math.ceil(response.data.length / 10)
                onPageChanged({
                    currentPage: 1,
                    totalPage: tPages,
                    pageLimit: 10,
                    usersx: response.data
                })
            }
        }
        retrieveUsers();
    }, [])


    const onPageChanged = data => {
        //const { allCountries } = this.state;
        const { currentPage, totalPages, pageLimit, usersx } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentUsers = usersx.slice(offset, offset + pageLimit);
        setSource(currentUsers)
        //this.setState({ currentPage, currentUsers, totalPages });
    };
    const searchChanged = async (query) => {
        let lowerQuery = query.toString().toLowerCase()
        let sorted = users.filter(function (item) {
            return (item.TenancyUser.UserName.toLowerCase().includes(lowerQuery) ||
                item.Email.toLowerCase().includes(lowerQuery) ||
                item.DateCreated.toString().toLowerCase().includes(lowerQuery) ||
                item.LastUpdated.toLowerCase().includes(lowerQuery))
            //item.Class ==null?"":item.Class.Name.toLowerCase().includes(lowerQuery))
        })
        setSource(sorted)
    }
    const handleDelete = (id) => {
        props.history.push(`/dashboard/users/delete/${id}`)
    }
    const BuildBody = () => {
        return (
            <tbody>
                {tableSource.length < 1 ? <tr key={0}><td colSpan={8}>......No data to display</td></tr> : (
                    tableSource.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="edit-link"><Link to={`/dashboard/users/Edit/${value.TenancyUser.Id}`}>{value.TenancyUser.UserName}</Link></td>
                                <td>{value.Email}</td>
                                <td>{value.Password}</td>
                                <td>{value.Class == null ? "" : value.Class.Name}</td>
                                <td>{value.DateCreated}</td>
                                <td>{value.LastUpdated}</td>
                                <td className="action-col"><input type="button" className="btn btn-sm btn-danger" value="Delete" onClick={() => handleDelete(value.TenancyUser.Id)} /></td>
                            </tr>
                        )
                    })
                )}
            </tbody>
        )
    }

    const printTable = () => {
       let normalPage = document.body.innerHTML
       let toBePrinted = document.querySelector(".printable")
       document.querySelector('body').innerHTML = toBePrinted.innerHTML
        document.querySelector('.action-col').className = "no-print-area"
        document.querySelector('.edit-link').className = "black-text"
       window.print()
       document.body.innerHTML = normalPage
        // var prtContent = document.querySelector(".printable");
        // var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        // WinPrint.document.write(prtContent.innerHTML);
        // WinPrint.document.close();
        // WinPrint.focus();
        // WinPrint.print();
        // WinPrint.close();
        //document.querySelector('.black-text').className = "edit-link"
        //document.querySelector('.no-print-area').className = "action-col"
    }
    return (loading ? <Loader /> : <div className="animated fadeIn">
        <Row>
            <Col xs="12" lg="12">
                <Card>
                    <CardHeader>
                        <ListTitle pageName="Uploads" pageDescription="A virtual list of users currently in the backing store." />
                        <div>
                            <div className="row p-a">
                                <ListNew newLink="/dashboard/users/new" Name="User" />
                                <ListDownload downloadLink="/dashboard/users/download" downloadName="Users" />
                                <ListUpload uploadLink="/dashboard/users/upload" uploadName="Users" />
                                <ListSearch handleSearch={searchChanged} />
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="printable">
                        <Table bordered responsive striped>
                            <TableHeader Headers={headers} />
                            <BuildBody />
                        </Table>
                        {/*<Pagination
                        totalRecords={users.length}
                        pageLimit={18}
                        pageNeighbours={1}
                        onPageChanged={()=>onPageChanged}
                    />*/}
                        <Pagination className="action-col" size="sm" aria-label="Page navigation example">
                            <PaginationItem>
                            {()=>{
                                for (let index = 1; index < users.length + 1; index++) {
                                    return(<PaginationLink>{index}</PaginationLink>)
                                    
                                }
                            }}
                                
                            </PaginationItem>
                        </Pagination>
                        <Button className="btn-twitter btn-brand" onClick={() => printTable()}><i className="fa fa-print"></i><span>Print</span></Button>

                    </CardBody>
                </Card>
            </Col>
        </Row>

    </div>);

}

export default Index;