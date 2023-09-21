import { ALERT } from "../utils/constants";
import { useNavigate } from "react-router-dom";


const Alert = ({type, hasAction, alertAction, message, actionMessage}) => {

    const alertTypes = new Map([
        [ALERT.info, 'alert-info'],
        [ALERT.danger, 'alert-danger'],
        [ALERT.warning, 'alert-warning'],
        [ALERT.success, 'alert-success'],
    ]);

    const navigate = useNavigate();


    return (
        <div className={`alert ${alertTypes.get(type)} alert-dismissible`} role="alert">
            <div>{message}
            {hasAction && <button className="btn btn-light mx-2" onClick={() => navigate(alertAction)}>{actionMessage}</button>} 
            </div>

            <button type="button" className="btn-close btn-sm" 
            data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );


}

export default Alert;