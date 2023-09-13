import TaskForm from "../components/TaskForm";

function CreateTodo() {

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="fw-bold">New Task</h4>
                            <hr/>
                            <TaskForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo;