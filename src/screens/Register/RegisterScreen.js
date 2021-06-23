import { useState } from 'react';
import './RegisterScreen.scss';
import AlertBox from '../../components/AlertBox/AlertBox'
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const initialValues = {
    Name : "",
    Age : undefined,
    DOB : new Date(null),
    Profession : "",
    guests : undefined,
    locality : "",
    address : ""
}

const RegisterScreen = () =>{
    const [isOPen,setIsOpen] = useState(false);
    const history = useHistory();
    const [registerData,setRegisterData] = useState(initialValues);
    const [btnState,setBtnState] = useState(false);
    const [finishStatus, setfinishStatus] = useState(false);
    const [error,setError] = useState(undefined);

    const onBackButtonEvent = (e) => {
         e.preventDefault();
         if (!finishStatus) {
             if (window.confirm("Do you want to go back ?")) {
                 setfinishStatus(true)
                 history.push("/");
            }
            else {
                window.history.pushState(null, null, window.location.pathname);
                setfinishStatus(false)
            }
        }
    }

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);  
    };
    // eslint-disable-next-line
  },[history]);

    useEffect(()=>{
        if(registerData.Name.length > 0 && registerData.Age !== undefined && registerData.DOB !== new Date(null) &&
            registerData.Profession.length > 0 && registerData.guests !== undefined && registerData.locality.length > 0
            && registerData.address.length > 0){
                setBtnState(true);
            }
            else{
                setBtnState(false);
            }
    },[registerData,setBtnState])


    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post("https://register.free.beeceptor.com/register",registerData)
        .then((res)=>{
            if(res.data && res.data.success && res.data.statusText === "OK"){
                setIsOpen(true);
                setError("Registered successfully!!!")
            }
            else{
                setError("Something went wrong! try again!");
            }
        })
        .catch((err)=>{
            setError("Something went wrong! try again!");
        })
    }
    const handleOpen = () =>{
        setIsOpen(!isOPen);
    }

    return(
        <>
        { isOPen ? (
            <AlertBox error={error} handleOpen={handleOpen}/>
        ) : (
            <div className="container">
                <div className="register-box">
                    <div className="box-header">
                        <h3>Register for RSVP</h3>
                    </div>
                    <div className="box-main">
                        <form className="register-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="input-field" placeholder="Enter your name" name="Name" id="name"
                             onChange={(e) => {
                                 setRegisterData({
                                     ...registerData,
                                     Name : e.target.value
                                 })
                             }}/>

                            <label htmlFor="age">Age</label>
                            <input type="number" className="input-field" placeholder="Enter your Age" name="Age" id="age"
                             onChange={(e) => {
                                setRegisterData({
                                    ...registerData,
                                    Age : e.target.value
                                })
                            }}/>

                            <label htmlFor="name">Date of Birth</label>
                            <input type="date" className="input-field" name="DOB" placeholder="select dob" id="dob"
                            onChange={(e) => {
                                setRegisterData({
                                    ...registerData,
                                    DOB : new Date(e.target.value)
                                })
                            }}/>

                            <label htmlFor="name">Profession</label>
                            <select className="input-field" name="Profession" id="profession" 
                            onChange={(e) => {
                                setRegisterData({
                                    ...registerData,
                                    Profession : e.target.value
                                })
                            }}>
                                <option defaultValue="">Select a profession</option>
                                <option value="employee">Employee</option>
                                <option value="student">Student</option>
                            </select>

                            <label htmlFor="nog">Number of Guests</label>
                            <select id="nog" className="input-field" name="guests" 
                            onChange={(e) => {
                                setRegisterData({
                                    ...registerData,
                                    guests : e.target.value
                                })
                            }}>
                                <option defaultValue={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>

                            <label htmlFor="locality">locality</label>
                            <input type="text" className="input-field" placeholder="Enter you locality" name="locality" 
                            onChange={(e) => {
                                setRegisterData({
                                    ...registerData,
                                    locality : e.target.value
                                })
                            }}/>

                            <label htmlFor="address">Address</label>
                            <textarea className="input-field textarea" name="address" rows="5" cols="10" maxLength = "50" placeholder="Enter Address"
                            onChange={(e) => {
                                setRegisterData({
                                    ...registerData,
                                    address : e.target.value
                                })
                            }}></textarea>

                            <div className="box-footer">
                                {btnState ? (
                                    <button className="active" type="submit">Submit</button>
                                ) : (
                                    <button className="disabled" type="submit">Submit</button>
                                )}
                                
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        // {isOPen && <AlertBox/>}
        )}
        
    </>
    )
        }

export default RegisterScreen;