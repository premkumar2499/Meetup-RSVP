import { useEffect, useState, React } from 'react';
import { useParams } from 'react-router-dom';
import './ViewDetailsScreen.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';
import userData from '../../Users.json';

const ViewDetailsScreen = () =>{
     const {id} = useParams();
     const [data,setData] = useState();
     const [details,setDetails] = useState({});
     const [loading,setLoading] = useState(true);

     const [isFetched,setIsFetched] = useState(false);
    useEffect(()=>{
         const viewDetails = async() =>{
               if(!isFetched && data === undefined){
                    await axios.get("https://my.api.mockaroo.com/user.json?key=4c25aff0")
                    .then((res)=>{
                    if(res.statusText === "OK" && res.status === 200){
                         // console.log(res);
                         setData(res.data);
                    }
                    else{
                         setData(userData);
                    }
                    })
                    .catch((err)=>{
                    setData(userData);
                    });
                    setIsFetched(true);
                    setLoading(false);
               }
         }
     viewDetails();
    },[data,setData,isFetched,loading]);

     useEffect(() => {
          if(data !== undefined && data.length > 0){
               const searchById = data.filter(item => item.id == id);
               setDetails(searchById[0]);
          }
     },[id,setDetails,data]);

    return(
     <div className="viewcontainer"> 
         {loading ? (
              <h2>Loading...</h2>
         ) : (
               <div className="box">
                    <h2>User-Details</h2>
                    <table className="table">
                         <tr>
                              <td>Id</td>
                              <td>{details.id}</td>
                         </tr>
                         <tr>
                              <td>Name</td>
                              <td>{details.Name}</td>
                         </tr>
                         <tr>
                              <td>Age</td>
                              <td>{details.Age}</td>
                         </tr>
                         <tr>
                              <td>DOB</td>
                              <td>{details.DOB}</td>
                         </tr>
                         <tr>
                              <td>Profession</td>
                              <td>{details.Profession}</td>
                         </tr>
                         <tr>
                              <td>No_of_guests</td>
                              <td>{details.No_of_guests}</td>
                         </tr>
                         <tr>
                              <td>locality</td>
                              <td>{details.locality}</td>
                         </tr>
                         <tr>
                              <td>address</td>
                              <td>{details.address}</td>
                         </tr>
                    </table>
                    <Link className="link" to="/search-users">
                         <button className="btn">Go Back</button>
                    </Link>                    
               </div>
         )}
     </div>

    )
}

export default  ViewDetailsScreen;