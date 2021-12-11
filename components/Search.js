import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import Tweet from './Tweet';
import {DataContext} from "./DataProvider";
function Search() {
    const{tweets,setTweets} =useContext(DataContext);
    const [username,setUsername]=useState("");
    const handleSubmit=async(event)=>{
        event.preventDefault();
        const response=await fetch(`/api/twitter/${username}`)
        const jsonres=await response.json()
        setTweets(jsonres)
    }
    return (
        <div className="flex flex-row flex-1 justify-center pt-4 flex-grow space-x-7">
            <TextField id="outlined-search" value={username} onChange={(e)=>setUsername(e.target.value)} label="Username" type="search" style={{width:"40%",}} />
            <Button variant="contained" style={{color:'white'}} onClick={handleSubmit}>Search</Button>
        </div>
    )
}


export default Search;
