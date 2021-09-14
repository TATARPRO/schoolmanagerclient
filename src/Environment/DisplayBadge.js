import React from 'react'
import { Badge } from 'reactstrap'

const SelectBadge =(props)=>{
    switch (props.value) {
        case 0:
            return <Badge color="success">active</Badge>
        case 1:
            return <Badge color="danger">dismissed</Badge>
        case 2:
            return <Badge color="danger">expelled</Badge>
        case 3:
            return <Badge color="primary">graduated</Badge>
        case 4:
            return <Badge color="warning">suspended</Badge>
        case 5:
            return <Badge color="danger">withdrawn</Badge>
        default:
            return <Badge color="secondary">unknown</Badge>
    }
}
const SelectCategory =(props)=>{
    switch (props.value) {
        case 0:
            return <Badge color="secondary">junior</Badge>
        case 1:
            return <Badge color="primary">senior</Badge>
        default:
            return <Badge color="primary">unknown</Badge>
    }
}
const SelectCheck =(props)=>{
    switch (props.value) {
        case true:
            return <i className="fa fa-check text-success text-center"></i>
        case false:
            return <i className="fa fa-times text-danger text-center"></i>
        default:
            return <i className="fa fa-times text-danger text-center"></i>
    }
}
export { SelectBadge, SelectCategory, SelectCheck}