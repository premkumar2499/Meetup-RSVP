import './AlertBox.scss';

const AlertBox = ({error,handleOpen}) =>{
    return(
        <div className="alert-container">
            <div className="alert-box">
                <p>{error}</p>
                <div className="alert-items">
                    <button className="btn1" onClick={handleOpen}>OK</button>
                    {/* <button className="btn2">No</button> */}
                </div>
            </div>
        </div>
    )
}

export default AlertBox;