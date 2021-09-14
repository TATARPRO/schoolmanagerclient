import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {SelectCheck, SelectBadge, SelectCategory} from '../../../Environment/DisplayBadge'
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import IndexComponent from '../../../masterComponents/Index/IndexComponents';

const Index=(props)=>{
    const [teachers, setTeachers] = useState([]);
    const [tableSource, setSource] = useState([])
    const [loading, setLoading] = useState(true);
    const headers = ["Teacher's Name","UserName","Contact Address","Contact Phone",
    "Nationality","State","L.G.A","Status", "Last Updated"]
     // Code is invoked after the component is mounted/inserted into the DOM tree.
     useEffect(() => {
        let getUrl = "teachers/getteachers/";
        const retrieveClasses=async()=>{
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
                setTeachers(response.data);
                setSource(response.data)
            }
        }
        retrieveClasses();
    }, [])
    const BuildBody = (props) => {
        return (
            <tbody>
            {props.length < 1?<tr key={0}><td colSpan={11}>......No data to display</td></tr>:(
                props.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Link to={`/dashboard/teachers/Edit/${value.Id}`}>{value.TeacherName}</Link></td>
                            <td>{value.TenancyUser.UserName}</td>
                            <td>{value.ContactAddress}</td>
                            <td>{value.ContactPhone}</td>
                            <td>{value.Nationality}</td>
                            <td>{value.State}</td>
                            <td>{value.LGA}</td>
                            <td><SelectBadge value={value.Status} /></td>
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
        let sorted = teachers.filter(function(item){
            return (
            item.TeacherName.toLowerCase().includes(lowerQuery) ||
            item.TenancyUser.UserName.toLowerCase().includes(lowerQuery) ||
            item.ContactAddress.toLowerCase().includes(lowerQuery) ||
            item.ContactPhone.toString().toLowerCase().includes(lowerQuery) ||
            item.Nationality.toLowerCase().includes(lowerQuery) ||
            item.State.toLowerCase().includes(lowerQuery) ||
            item.LGA.toLowerCase().includes(lowerQuery) ||
             item.LastUpdated.toLowerCase().includes(lowerQuery) )
        })
        setSource(sorted)
    }
    const handleDelete=(id)=>{
        props.history.push(`/dashboard/teachers/delete/${id}`)
    }
    const xtics ={
        Title: {Name: "Teachers", Description: "List of teachers enrolled in the institution."},
        Headers: headers,
        TableBody: BuildBody(tableSource),
        ItemCount: tableSource.length,
        Name: "Teachers",
        NewLink: "/dashboard/teachers/New",
        Search: search,
        Upload: {
            Link: "/dashboard/teachers/upload",
            Name: "teachers"
        }
    }
    return (loading ? <Loader />: <IndexComponent {...xtics}/>)
}
export default Index;