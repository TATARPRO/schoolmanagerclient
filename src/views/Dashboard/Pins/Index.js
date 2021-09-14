import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { SelectCheck } from '../../../Environment/DisplayBadge'
import API, {resolveCode, Loader} from '../../../Environment/Environment'
import IndexComponent from '../../../masterComponents/Index/IndexComponents';

const Index=(props)=>{
    const [pins, setPins] = useState([]);
    const [tableSource, setSource] = useState([])
    const [loading, setLoading] = useState(true);
    const headers = ["Pin","Times Used","User","Session","Term","Valid","Validity","Last Updated","Updater"]
     // Code is invoked after the component is mounted/inserted into the DOM tree.
     useEffect(() => {
        let getUrl = "pins/getpins/"
        const retrievePins=async()=>{
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
                setPins(response.data);
                setSource(response.data)
            }
        }
        retrievePins();
    }, [])
    const BuildBody = (props) => {
        return (
            <tbody>
            {props.length < 1? <tr key={0}><td colSpan={11}>......No data to display</td></tr>:(
                props.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Link to={`/dashboard/pins/Edit/${value.Id}`}>{value.Value}</Link></td>
                            <td>{value.UsageCount}</td>
                            <td>{value.Student == null? "": value.Student.StudentName}</td>
                            <td>{value.Session == null? "": value.Session.Name}</td>
                            <td>{value.Term == null? "": value.Term.Name}</td>
                            <td><SelectCheck value={!(value.Expired)}/></td>
                            <td>{value.Validity}</td>
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
        let sorted = pins.filter(function(item){
            return (item.Value.toString().toLowerCase().includes(lowerQuery) ||
            item.StudentName.toLowerCase().includes(lowerQuery) ||
            item.Session.Name.toLowerCase().includes(lowerQuery) ||
            item.Term.Name.toLowerCase().includes(lowerQuery) ||
             item.Validity.toString().toLowerCase().includes(lowerQuery) || 
            item.Updater.UserName.toLowerCase().includes(lowerQuery))
        })
        setSource(sorted)
    }
    const handleDelete=(id)=>{
        props.history.push(`/dashboard/pins/delete/${id}`)
    }
    const xtics ={
        Title: {Name: "Pins", Description: "List of pins enrolled in the institution."},
        Headers: headers,
        TableBody: BuildBody(tableSource),
        ItemCount: pins.length,
        Name: "Pin",
        NewLink: "/dashboard/pins/New",
        Search: search,
        Upload: {
            Link: "/dashboard/pins/download",
            Name: "pins"
        }
    }
    return (loading ? <Loader />: <IndexComponent {...xtics}/>)
}
export default Index;