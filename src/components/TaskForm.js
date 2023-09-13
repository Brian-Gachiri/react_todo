import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../store/todoSlice";
import {PRIORITY} from "../utils/constants"

export default function TaskForm(props){


    const priority_inputs = Object.entries(PRIORITY).map((priority) => {

        let input = <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priority" id={`inline_${priority[0]}`} value={priority[1]} />
                        <label className="form-check-label text-capitalize" for={`inline_${priority[0]}`}>{priority[0]}</label>
                    </div>

        return input;
    })
    // const [text, setText] = useState("")
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const text = inputRef.current.value
        if (text === ""){
            alert("Please enter a valid todo")
        }else{
            const currentDate = new Date().toLocaleDateString()
            dispatch(addTask(
                {
                    text: text,
                    date: currentDate
                }
            ))
            //Using props and useState
            // props.updateList({
            //     id:props.totalTodos + 1,
            //     text: text,
            //     date: currentDate
            // })
            inputRef.current.value = ""
        }
    }

    return (
        <form className={'mt-4'} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Task Title</label>
                <input type="text" className="form-control" placeholder="To do title"
                       aria-label="Task title" name='title' aria-describedby="button-addon2" ref={inputRef}></input>
            </div>
            <div className="mb-3">
                <label>Task Descriptiom</label>
                <textarea className="form-control" placeholder="Task Description"
                       aria-label="Task Description" name='description' aria-describedby="button-addon2"></textarea>
            </div>
            <div className='mb-3'>
                <label className='mb-2'>Task Priority</label> <br/>
                {priority_inputs}
            </div>
            <div className='d-flex flex-row mt-2'>
                <button className="btn btn-outline-danger" type="button" id="button-addon2" >Add Todo</button>
            </div>
        </form>
    )
}