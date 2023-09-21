import Alert from "../components/Alert";
import TaskForm from "../components/TaskForm";
import { ALERT } from "../utils/constants";
import { useState } from "react";

function CreateTodo() {

    const [alert, setAlert] = useState({
        type: ALERT.info,
        isVisible: false,
        message: '',
        hasAction: false,
        alertAction: null,
        actionMessage: ''
    });
    

    function displayAlert(type, message) {
        console.log(type)
        if(type === ALERT.success){
            setAlert({
                type: ALERT.success,
                isVisible: true,
                message: message,
                hasAction: true,
                alertAction:'/',
                actionMessage: 'View Current Tasks'
            })
        }else{
            setAlert({
                type: ALERT.danger,
                isVisible: true,
                message: message,
                hasAction: false,
                alertAction: null,
                actionMessage: ''
            })
        }

    }



    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="fw-bold">New Task</h4>
                            { alert.isVisible && <Alert 
                            type={alert.type} 
                            hasAction={alert.hasAction} 
                            message={alert.message} 
                            alertAction={alert.alertAction} 
                            actionMessage={alert.actionMessage} />
                            } 
                            <hr/>
                            <TaskForm displayAlert={displayAlert}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo;