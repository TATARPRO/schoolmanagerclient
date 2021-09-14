import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import IndexComponent from '../../../masterComponents/Index/IndexComponents';

const Index=(props)=>{
    const [data, setData] = useState([]);
    const [tableSource, setSource] = useState([])
    const [loading, setLoading] = useState(true);
    const headers = ["Student Id","Subject","Test","Exam","Class","Term","Session","Last Updated", "Updater"]
     // Code is invoked after the component is mounted/inserted into the DOM tree.
     useEffect(() => {
        let getUrl = "gazzettes/getgazzettes/";
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
            {props.length < 1? <tr key={0}><td colSpan={11}>......No data to display</td></tr>:(
                props.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Link to={`/dashboard/gazzettes/Edit/${value.Id}`}>{value.Student.Id}</Link></td>
                            <td>{value.Subject.Name}</td>
                            <td>{value.Test}</td>
                            <td>{value.Exam}</td>
                            <td>{value.Class.Name}</td>
                            <td>{value.Term.Name}</td>
                            <td>{value.Session.Name}</td>
                            <td>{value.LastUpdated}</td>
                            <td>{value.Updater.UserName}</td>
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
        let sorted = data.filter(function(item){
            return (item.Student.Id.toString().includes(lowerQuery) ||
             item.Subject.Name.toLowerCase().includes(lowerQuery) || 
             item.Term.Name.toLowerCase().includes(lowerQuery) || 
             item.Session.Name.toLowerCase().includes(lowerQuery) ||
             item.Updater.UserName.toLowerCase().includes(lowerQuery) ||  
            item.Class.Name.toLowerCase().includes(lowerQuery))
        })
        setSource(sorted)
    }
    const handleDelete=(id)=>{
        props.history.push(`/dashboard/gazzettes/delete/${id}`)
    }
    
    const xtics ={
        Title: {Name: "Gazzettes", Description: "List of data enrolled in the institution."},
        Headers: headers,
        TableBody: BuildBody(tableSource),
        ItemCount: data.length,
        Name: "Gazzettes",
        NewLink: "/dashboard/gazzettes/New",
        Search: search,
        Upload: {
            Link: "/dashboard/gazzettes/upload",
            Name: "scoresheet"
        },
        Download: {
            Link: "/dashboard/gazzettes/download",
            Name: "gazzettes"
        }
    }
    return (loading ? <Loader />: <IndexComponent {...xtics}/>)
}
export default Index;