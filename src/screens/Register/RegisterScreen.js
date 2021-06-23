import { useState } from 'react';
import './RegisterScreen.scss';
import AlertBox from '../../components/AlertBox/AlertBox'
const RegisterScreen = () =>{

    const [isOPen,setIsOpen] = useState(false);

    const handleAlert = (e) =>{
        e.preventDefault();
        setIsOpen(!isOPen);
    }
    return(
        <>
        { isOPen ? (
            <AlertBox/>
        ) : (
            <div className="container">
            <div className="register-box">
                <div className="box-header">
                    <h3>Register for RSVP</h3>
                </div>
                <div className="box-main">
                    <form className="register-form" onSubmit={handleAlert}>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="input-field" placeholder="Enter your name" id="name"/>
                        <label htmlFor="name">Age</label>
                        <input type="number" className="input-field" placeholder="Enter your Age"/>
                        <label htmlFor="name">Date of Birth</label>
                        <input type="date" className="input-field" name="birthday" placeholder="select dob"/>
                        <label htmlFor="name">Profession</label>
                        <select id="cars" className="input-field" name="profession">
                            <option defaultValue="">Select a profession</option>
                            <option value="employee">Employee</option>
                            <option value="student">Student</option>
                        </select>
                        <label htmlFor="name">Number of Guests</label>
                        <select id="cars" className="input-field" name="guests">
                            <option defaultValue={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </select>
                        <label htmlFor="name">locality</label>
                        <input type="text" className="input-field" placeholder="Enter you locality"/>
                        <label htmlFor="name">Address</label>
                        <textarea className="input-field textarea" name="address" rows="5" cols="10" maxLength = "50" placeholder="Enter Address"></textarea>
                        <div className="box-footer">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        )}
        
    </>
    )
}

export default RegisterScreen