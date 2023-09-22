import React from 'react';

export default function Todo(props) {
    const todo = props.todo
    return (
        <tr>
            <td>
            <div className="d-flex flex-row align-content-center align-items-center">
            <input className="form-check-input mt-0 me-2" type="checkbox" value=""
                   aria-label="Checkbox for following text input"></input>
                
            </div>
            </td>
            <td>
                {todo.text}
            </td>
            <td>{todo.description}</td>
            <td><span className='badge bg-warning'>{todo.priority}</span></td>
            <td>{todo.status ? 'Complete' : 'Pending'}</td>
            <td><button className='btn btn-sm btn-secondary'>{todo.status ? "Reopen" : "Close" }</button>
            </td>

        </tr>
        // <div className="d-flex flex-row border rounded m-2 p-2 align-content-center align-items-center">
        //     <input className="form-check-input mt-0" type="checkbox" value=""
        //            aria-label="Checkbox for following text input"></input>
        //     <p className={'mb-0 ms-2'}>{props.text}</p>
        //     <small className={'mb-0 ms-2 text-end ms-auto text-body-tertiary'}>{props.date}</small>
        // </div>
    )
}