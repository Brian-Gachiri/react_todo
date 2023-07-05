import React, {useRef, useState} from 'react';

export default function AddTodo(props){

    // const [text, setText] = useState("")
    const inputRef = useRef(null)
    const handleClick = () => {
        const text = inputRef.current.value
        if (text === ""){
            alert("Please enter a valid todo")
        }else{
            const currentDate = new Date().toLocaleDateString()
            props.updateList({
                id:props.totalTodos + 1,
                text: text,
                date: currentDate
            })
            inputRef.current.value = ""
        }
    }

    return (
        <div className={'container mt-4'}>
            <div className="input-group mb-3 input-group-lg">
                <input type="text" className="form-control" placeholder="To do title"
                       aria-label="To do title" aria-describedby="button-addon2" ref={inputRef}></input>
                <button className="btn btn-outline-danger" type="button" id="button-addon2" onClick={handleClick}>Add Todo</button>
            </div>
        </div>
    )
}