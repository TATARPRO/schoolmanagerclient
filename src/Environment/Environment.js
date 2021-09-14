import axios from 'axios';
import React from 'react'
import { Input } from 'reactstrap';
//import { Redirect } from 'react-router-dom'
import './loader.css';
import History from './History'

const BaseUrl = "https://localhost:44322/api/"
export default axios.create({
    baseURL: BaseUrl,
    responseType: "application/json",
    headers: {Authorization: `${localStorage.getItem(window.location.host) == null? "" : JSON.parse(localStorage.getItem(window.location.host)).Token}`}
}) 

const resolveCode = code => {
    switch (code) {
        case 400:
            return "/400"
        case 401:
            return "/login" 
        case 404:
            return "/404"
        case 419:
            return "/419"
        case 500:
            return "/500"
        default:
            return ""
    }
}
const LoaderOverlay =()=> {
    return (
        <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
const Loader =()=>{
    return(
        <div className="loadingio-spinner-spinner-wzdxj9pa0hs">
        <div className="ldio-q3lgchk9gb9">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div></div>
    )
}
const Processing =()=>{
    return "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==";
}
const Select =(props)=>{
    return(
        <Input type="select" name={props.Name} id={props.Name} value={props.value} onChange={props.handleChange}>
        {props.data.map((value, index) => {
            return (
                <option value={value.Id}>{value.Name}</option>
            )
        })}
        </Input>
    )
}
export { resolveCode,LoaderOverlay, Loader, Processing, Select }