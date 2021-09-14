import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import {SelectCheck, SelectBadge, SelectCategory} from '../../../Environment/DisplayBadge'
import IndexComponent from '../../../masterComponents/Index/IndexComponents';

const Index=(props)=>{
    const [students, setStudents] = useState([]);
    const [tableSource, setSource] = useState([])
    const [loading, setLoading] = useState(true);
    const headers = ["Id","Student Name","Username","Current Class","DOB","Address","Name of Parent","Phone","Nationality",
    "State","L.G.A","Admin Year","Graduated","Exp Grad. year","Grad Year","Status","Category","Last Updated"]
     // Code is invoked after the component is mounted/inserted into the DOM tree.
     useEffect(() => {
        let getUrl = "students/getstudents/";
        const retrieveStudents=async()=>{
            const response = await API.get(getUrl)
            .catch(error=> {
                if(error.response && (error.response.status >= 500 && error.response.status <= 599)) {
                    props.history.push(resolveCode(error.response.status));
                } 
                if(error.response && (error.response.status >= 400 && error.response.status <= 499)){
                    props.history.push(resolveCode(error.response.status))
                }
            })
            if (response && (response.status >= 200 && response.status <= 299)) {
                setLoading(false);
                setStudents(response.data);
                setSource(response.data)
            }
        }
        retrieveStudents();
    }, [])
    const BuildBody = (props) => {
        return (
            <tbody>
            {props.length < 1 || props == null? <tr key={0}><td colSpan={19}>......No data to display</td></tr>:(
                props.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.Id}</td>
                            <td><Link to={`/dashboard/students/Edit/${value.Id}`}>{value.StudentName}</Link></td>
                            <td>{value.TenancyUser.UserName}</td>
                            <td>{value.Class.Name}</td>
                            <td>{value.DOB}</td>
                            <td>{value.ContactAddress}</td>
                            <td>{value.NameOfParent}</td>
                            <td>{value.ContactPhone}</td>
                            <td>{value.Nationality}</td>
                            <td>{value.State}</td>
                            <td>{value.LGA}</td>
                            <td>{value.AdminYear}</td>
                            <td><SelectCheck value={value.Graduated}/></td>
                            <td>{value.ExpectedGradYear}</td>
                            <td>{value.GradYear}</td>
                            <td><SelectBadge value={value.Status} /></td>
                            <td><SelectCategory value={value.Category}/></td>
                            <td>{value.LastUpdated}</td>
                            <td><input type="button" className="btn btn-sm btn-danger" value="Delete" onClick={() => handleDelete(value.Id)} /></td>
                        </tr>
                    )
                })
            )}
            </tbody>
        )
    }
    const search=async(query)=>{
        let lowerQuery = query.toString().toLowerCase()
        let sorted = students.filter(function(item){
            return (item.StudentName.toLowerCase().includes(lowerQuery) ||
            item.Id.toString().toLowerCase().includes(lowerQuery) || 
            item.TenancyUser.UserName.toLowerCase().includes(lowerQuery) || 
            item.Class.Name.toLowerCase().includes(lowerQuery) || 
            item.DOB.toString().toLowerCase().includes(lowerQuery) || 
            item.ContactAddress.toLowerCase().includes(lowerQuery) || 
            item.ContactPhone.toString().toLowerCase().includes(lowerQuery) ||
            item.Nationality.toLowerCase().includes(lowerQuery) || 
            item.NameOfParent.toLowerCase().includes(lowerQuery) || 
            item.State.toLowerCase().includes(lowerQuery) || 
            //item.LGA.toLowerCase().includes(lowerQuery) || 
            item.AdminYear.toString().toLowerCase().includes(lowerQuery) || 
            item.ExpectedGradYear.toString().toLowerCase().includes(lowerQuery) ||  
            item.GradYear.toString().toLowerCase().includes(lowerQuery) || 
             item.LastUpdated.toLowerCase().includes(lowerQuery) )
        })
        setSource(sorted)
    }
    const handleDelete=(id)=>{
        props.history.push(`/dashboard/students/delete/${id}`)
    }
    const xtics ={
        Title: {Name: "Students", Description: "List of students enrolled in the institution."},
        Headers: headers,
        TableBody: BuildBody(tableSource),
        ItemCount: tableSource.length,
        Name: "Student",
        NewLink: "/dashboard/students/New",
        Search: search,
        Upload: {
            Link: "/dashboard/students/Upload",
            Name: "students"
        },
        Download: {
            Link: "/dashboard/students/download",
            Name: "students"
        }
    }
    return (loading ? <Loader />: <IndexComponent {...xtics}/>)
}
export default Index;