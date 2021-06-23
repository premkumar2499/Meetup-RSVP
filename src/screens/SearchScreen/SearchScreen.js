import './SearchScreen.scss';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import axios from 'axios';
import userData from '../../Users.json'
const SearchScreen = () =>{
    const [data,setData] = useState(userData);
    const [filteredData,setFilteredData] = useState(userData);
    const [isFetched,setIsFetched] = useState(false);
    useEffect(()=>{
        if(!isFetched){
            axios.get("https://my.api.mockaroo.com/user.json?key=4c25aff0")
            .then((res)=>{
                console.log(res.data);
                setData(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
            setIsFetched(true);
        }
    },[data,setData,isFetched]);

    const handleClick = (item)=>{

    }

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
            <div className="info">
                {filteredData && filteredData.length>0 && filteredData.map((item,index)=>{
                    return(
                        <div className="grid" key={index} onClick={handleClick(item)}>
                            <h4>{item.Name}</h4>
                            <div className="item"> 
                                <p>{item.locality}</p>
                                <FontAwesomeIcon icon={faUserCircle} size="lg"  />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchScreen;