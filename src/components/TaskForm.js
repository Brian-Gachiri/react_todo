import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../store/todoSlice";
import {ALERT, PRIORITY} from "../utils/constants"

export default function TaskForm(props){

    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        text: "",
        description: "",
        priority: ""
    })

    const priority_inputs = Object.entries(PRIORITY).map((priority) => {

        let input = <div className="form-check form-check-inline" key={priority[1]}>
                        <input className="form-check-input"
                         type="radio"
                         name="priority"
                         onChange={handleChange}
                         checked={formData.priority === priority[1]}
                         id={`inline_${priority[0]}`}
                         value={priority[1]} />
                        <label className="form-check-label text-capitalize" htmlFor={`inline_${priority[0]}`}>{priority[0]}</label>
                    </div>

        return input;
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // const text = inputRef.current.value
        if (formData.text === ""){
            props.displayAlert(
                ALERT.danger,
                "Please enter a valid Task"
            )
        }else{
            const currentDate = new Date().toLocaleDateString()
            dispatch(addTask(
                {
                    text: formData.text,
                    date: currentDate,
                    description: formData.description,
                    priority: formData.priority
                }
            ))
            //Using props and useState
            // props.updateList({
            //     id:props.totalTodos + 1,
            //     text: text,
            //     date: currentDate
            // })
            inputRef.current.value = ""

            props.displayAlert(
                ALERT.success,
                "Task Created Successfully"
            )
        }
    }

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <form className={'mt-4'} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Task Title</label>
                <input type="text" className="form-control" value={formData.text} placeholder="To do title" onChange={handleChange}
                       aria-label="Task title" name='text' aria-describedby="button-addon2" ref={inputRef}></input>
            </div>
            <div className="mb-3">
                <label>Task Descriptiom</label>
                <textarea className="form-control" placeholder="Task Description" onChange={handleChange}
                       aria-label="Task Description" name='description' aria-describedby="button-addon2">{formData.description}</textarea>
            </div>
            <div className='mb-3'>
                <label className='mb-2'>Task Priority</label> <br/>
                {priority_inputs}
            </div>
            <div className='d-flex flex-row mt-2'>
                <button className="btn btn-outline-danger" type="submit" id="button-addon2" >Add Todo</button>
            </div>
        </form>
    )
}