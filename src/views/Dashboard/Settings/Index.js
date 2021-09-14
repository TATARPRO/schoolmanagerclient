import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import IndexComponent from '../../../masterComponents/Index/IndexComponents';

const Index=(props)=>{
    const [settings, setSettings] = useState([]);
    const [tableSource, setSource] = useState([])
    const [loading, setLoading] = useState(true);
    const headers = ["Name", "Value"]
     // Code is invoked after the component is mounted/inserted into the DOM tree.
     useEffect(() => {
        let getUrl = "settings/getsettings/";
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
                setSettings(response.data);
                setSource(response.data)
            }
        }
        retrieveClasses();
    }, [])
    const BuildBody = (props) => {
        return (
            <tbody>
            {props.length < 1? <tr key={0}><td colSpan={4}>......No data to display</td></tr>:(
                props.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Link to={`/dashboard/Settings/Edit/${value.Id}`}>{value.Name}</Link></td>
                            <td>{value.Value}</td>
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
        let sorted = settings.filter(function(item){
            return (item.Name.toLowerCase().includes(lowerQuery) ||
             item.Value.toLowerCase().includes(lowerQuery) )
        })
        setSource(sorted)
    }
    const handleDelete=(id)=>{
        props.history.push(`/dashboard/settings/delete/${id}`)
    }
    const xtics ={
        Title: {Name: "Settings", Description: "Basic settings which most operations rely upon"},
        Headers: headers,
        TableBody: BuildBody(tableSource),
        ItemCount: settings.length,
        Name: "Setting",
        NewLink: "/dashboard/settings/New",
        Search: search
    }
    return (loading ? <Loader />: <IndexComponent {...xtics}/>)
}
export default Index;