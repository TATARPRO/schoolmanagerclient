import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import IndexComponent from '../../../masterComponents/Index/IndexComponents';

const Index=(props)=>{
    const [sessions, setSessions] = useState([]);
    const [tableSource, setSource] = useState([])
    const [loading, setLoading] = useState(true);
    const headers = ["Name", "Last Updated", "Updater"]
     // Code is invoked after the component is mounted/inserted into the DOM tree.
     useEffect(() => {
        let getUrl = "sessions/getsessions/";
        const retrieveSessions=async()=>{
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
                setSessions(response.data);
                setSource(response.data)
            }
        }
        retrieveSessions();
    }, [])
    const BuildBody = (props) => {
        return (
            <tbody>
            {props.length < 1? <tr key={0}><td colSpan={5}>......No data to display</td></tr>:(
                props.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Link to={`/dashboard/Sessions/Edit/${value.Id}`}>{value.Name}</Link></td>
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
        let sorted = sessions.filter(function(item){
            return (item.Name.toLowerCase().includes(lowerQuery) ||
             item.LastUpdated.toLowerCase().includes(lowerQuery) || 
            item.Updater.UserName.toLowerCase().includes(lowerQuery))
        })
        setSource(sorted)
    }
    const handleDelete=(id)=>{
        props.history.push(`/dashboard/sessions/delete/${id}`)
    }
    const xtics ={
        Title: {Name: "Sessions", Description: "List of enrolled sessions which the school has embarked on."},
        Headers: headers,
        TableBody: BuildBody(tableSource),
        ItemCount: sessions.length,
        Name: "Sessions",
        NewLink: "/dashboard/Sessions/New",
        Search: search
    }
    return (loading ? <Loader />: <IndexComponent {...xtics}/>)
}
export default Index;