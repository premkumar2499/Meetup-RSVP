import './SearchScreen.scss';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, React} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import userData from '../../Users.json';
// export const userDetailContext = createContext(null);
const SearchScreen = () =>{
    const [data,setData] = useState(userData);
    const [filteredData,setFilteredData] = useState({});
    const [isFetched,setIsFetched] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const Search = async() =>{
            if(!isFetched){
                await axios.get("https://my.api.mockaroo.com/user.json?key=4c25aff0")
                .then((res)=>{
                    if(res.statusText === "OK" && res.status === 200){
                        // console.log(res);
                        setFilteredData(res.data);
    
                    }
                    else{
                        setFilteredData(userData);
                    }
                })
                .catch((err)=>{
                    setFilteredData(userData);
                })
                setIsFetched(true);
                setLoading(false);
            }
        }
        Search();
    },[data,setData,isFetched,loading]);

    const handleSearch = (key) => {
        const dataAfterSearch = data.filter(item=> item.Name.toLowerCase().includes(key) || item.locality.toLowerCase().includes(key));
        setFilteredData(dataAfterSearch);
    }

    return(
            <div className="search-container">
                
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} size="lg"  />
                    <input type="text" placeholder="Search By Name,Location" 
                        onChange={(e) => {handleSearch(e.target.value)}}
                        />
                </div>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                        <div className="info">
                            {filteredData && filteredData.length>0 && filteredData.map((item,index)=>{
                                return(
                                    <Link className="link" to={`/view-details/${item.id}`} key={index}>
                                        <div className="grid">
                                            <h4>{item.Name}</h4>
                                            <div className="item"> 
                                                <p>{item.locality}</p>
                                                <FontAwesomeIcon icon={faUserCircle} size="lg"  />
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </>
                )}
            </div>
        
    )
}

export default SearchScreen;