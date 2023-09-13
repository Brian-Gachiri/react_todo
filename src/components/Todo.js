import React from 'react';

export default function Todo(props) {

    return (
        <tr>
            <td>
            <div className="d-flex flex-row align-content-center align-items-center">
            <input className="form-check-input mt-0 me-2" type="checkbox" value=""
                   aria-label="Checkbox for following text input"></input>
                
            </div>
            </td>
            <td>
                {props.text}
            </td>
            <td>{props.text} Description</td>
            <td>Medium</td>
            <td>Boolean Status</td>
            <td>Boolean Status</td>

        </tr>
        // <div className="d-flex flex-row border rounded m-2 p-2 align-content-center align-items-center">
        //     <input className="form-check-input mt-0" type="checkbox" value=""
        //            aria-label="Checkbox for following text input"></input>
        //     <p className={'mb-0 ms-2'}>{props.text}</p>
        //     <small className={'mb-0 ms-2 text-end ms-auto text-body-tertiary'}>{props.date}</small>
        // </div>
    )
}