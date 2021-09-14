import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import IndexComponent from '../../../masterComponents/Index/IndexComponents';

const Index=(props)=>{
    const [data, setData] = useState([]);
    const [tableSource, setSource] = useState([])
    const [loading, setLoading] = useState(true);
    const headers = ["Teacher Name","Subject","Class","Date Assigned", "Last Updated", "Updater"]
     // Code is invoked after the component is mounted/inserted into the DOM tree.
     useEffect(() => {
        let getUrl = "teachersubjects/getteachersubjects/";
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
                setData(response.data);
                setSource(response.data)
            }
        }
        retrieveClasses();
    }, [])
    const BuildBody = (props) => {
        return (
            <tbody>
            {props.length < 1? <tr key={0}><td colSpan={8}>......No data to display</td></tr>:(
                props.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Link to={`/dashboard/teachersubject/Edit/${value.Teacher.Id + ";" + value.Subject.Id + ";" + value.ClassId}`}>{value.Teacher.TeacherName}</Link></td>
                            <td>{value.Subject.Name}</td>
                            <td>{value.Class.Name}</td>
                            <td>{value.DateAssigned}</td>
                            <td>{value.LastUpdated}</td>
                            <td>{value.Updater.UserName}</td>
                            <td><input type="button" className="btn btn-sm btn-danger" value="Delete" onClick={() => handleDelete(value.Teacher.Id, value.Teacher.SubjectId, value.Teacher.ClassId)} /></td>
                        </tr>
                    )
                })
            )}
            </tbody>
        )
    }
    const search=async(query)=>{
        let lowerQuery = query.toString().toLowerCase()
        let sorted = data.filter(function(item){
            return (item.Teacher.TeacherName.toLowerCase().includes(lowerQuery) ||
            item.Subject.Name.toLowerCase().includes(lowerQuery) || 
            item.Class.Name.toLowerCase().includes(lowerQuery) || 
            item.DateAssigned.toString().toLowerCase().includes(lowerQuery) || 
             item.LastUpdated.toLowerCase().includes(lowerQuery) || 
            item.Updater.UserName.toLowerCase().includes(lowerQuery))
        })
        setSource(sorted)
    }
    const handleDelete=(id)=>{
        props.history.push(`/dashboard/teachersubject/delete/${id}`)
    }
    const xtics ={
        Title: {Name: "Subject Allocations", Description: "Subject appointments for designated teachers."},
        Headers: headers,
        TableBody: BuildBody(tableSource),
        ItemCount: tableSource.length,
        Name: "Subject Allocation",
        NewLink: "/dashboard/teachersubject/New",
        Search: search
    }
    return (loading ? <Loader />: <IndexComponent {...xtics}/>)
}
export default Index;