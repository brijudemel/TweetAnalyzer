/* eslint-disable import/no-anonymous-default-export */
import { analyzer } from "../../lib/analyzer"

export default async (req,res)=>{
    console.log(req.body.tweet);
    const result =await analyzer(req.body.tweet)
    //console.log(result);

    return res.status(200).json({"result":result})
}