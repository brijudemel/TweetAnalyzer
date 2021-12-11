/* eslint-disable import/no-anonymous-default-export */
import { getTweets } from "../../../lib/twitter"

export default async (req,res)=>{
    const tweets =await getTweets(req.query.uname)
    return res.status(200).json(tweets)
}