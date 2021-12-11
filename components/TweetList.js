import React,{useContext} from 'react'
import Tweet from './Tweet'
import {DataContext} from "./DataProvider";
function TweetList() {
    const{tweets,setTweets} =useContext(DataContext);
    return (
        <div style={{alignItems:'center', padding:"5%"}}>
            {
                tweets?(
                    tweets.filter((tweet)=>tweet.lang==="en").map((tweet)=>{
                        return (<>
                        <Tweet key={tweet.id} name={tweet.user.name} tweet={tweet.text} pic={tweet.user.profile_image_url} created={tweet.created_at} />
                        <br/>
                        </>)
                    })
                )
                :null
            }
        </div>
    )
}

export default TweetList
