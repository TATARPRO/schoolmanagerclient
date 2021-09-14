import React from 'react'

const validatEditResponse =(status)=>{
switch (status) {
    case 400:
        
        break;
    case 404:
        
        break;
    case 409:
        
        break;
    default:
        break;
}
}

const validateDeleteResponse =(status)=>{
    switch (status) {
        case 404:
            
            break;
        default:
            break;
    }
}

const validateNewResponse =(status)=>{
    switch (status) {
        case 400:
            
            break;
        case 406:
            
            break;
        default:
            break;
    }
}