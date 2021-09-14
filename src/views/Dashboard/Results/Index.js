import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import IndexComponent from '../../../masterComponents/Index/IndexComponents';

const Index=(props)=>{
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const headers = ["Name", "Last Updated", "Updater"]
     // Code is invoked after the component is mounted/inserted into the DOM tree.
     useEffect(() => {
        let getUrl = "classes/getclasses/";
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
                setClasses(response.data);
            }
        }
        retrieveClasses();
    }, [])
    const BuildBody = (props) => {
        return (
            <tbody>
            {props.length < 1? <tr key={0}><td colSpan={5}>......No data to display</td></tr>:(
                props.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Link to={`/dashboard/Classes/Edit/${value.Id}`}>{value.Name}</Link></td>
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
        setLoading(true);
        let getUrl = `classes/getclasses/?SearchString=${query}`;
        let response = await API.get(getUrl)
        .catch(error=> {
            props.history.push(resolveCode(error.response.status));
        })
            setLoading(false);
        if (response && (response.status >= 200 && response.status <= 299)) {
            setClasses(response.data);
        }
    }
    const handleDelete=(id)=>{
        props.history.push(`/dashboard/classes/delete/${id}`)
    }
    const xtics ={
        Title: {Name: "Classes", Description: "List of classes enrolled in the institution."},
        Headers: headers,
        TableBody: BuildBody(classes),
        ItemCount: classes.length,
        Name: "Class",
        NewLink: "/dashboard/Classes/New",
        Search: search
    }
    return (loading ? <Loader />: <IndexComponent {...xtics}/>)
}
export default Index;