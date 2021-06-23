import './AlertBox.scss';

const AlertBox = () =>{
    return(
        <div className="alert-container">
            <div className="alert-box">
                <p>Do you want  to exit ?</p>
                <div className="alert-items">
                    <button className="btn1">Yes</button>
                    <button className="btn2">No</button>
                </div>
            </div>
        </div>
    )
}

export default AlertBox;