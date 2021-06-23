import React from 'react'; 
import {Link} from 'react-router-dom'
import './Menu.scss'
// import UserContext from '../../context/userContext';
// import { useDispatch, useSelector } from 'react-redux'
// import {logout} from '../../actions/userActions'


const Menu = ({handleMenu}) =>{
    // const dispatch = useDispatch();
    // const userInfo = useSelector((state) => state.userInfo)
    // const {userData,userStatus} = userInfo;
    return(
        <div className="side-nav">
            <div className="title">
                {/* {userStatus ? (<div className="fs-1">Hello {userData.name}</div>) : (<div>Prem Todos</div>)} */}
                MeetUp RSVP
                <div className="close">
                    <button className="close-btn" onClick={handleMenu}>X</button> 
                </div>
            </div>
            <div className="links">
                <li className="nav-item">
                    <Link className="nav-link" onClick={handleMenu} to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={handleMenu} to="/search-users">Search Users</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" onClick={handleMenu} aria-current="page" to="/view-reports">View Reports</Link>
                </li>                        
            </div>
        </div>
    )
}

export default Menu;
