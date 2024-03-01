import axios from 'axios';
const{apikey}=require("../utils/index");
const client = axios.create({
    headers:{
        "Authorization":"Bearer"+apikey,
        "content-Type":"application/json"
    }
})


const chatGptEndpoint = 'https://api.openai.com/v1/chat/completions';

const dalleEndpoint = 'https://api.openai.com/v1/images/generations';


export const apiCall=async(prompt,messages)=>{
    try{

        const res = await client.post(chatGptEndpoint,{
            model:'gpt-3.5-turbo',
            messages:[{
                role:'user',
                content:`Does this message want to generate an AI picture, image, art or anything similar? ${prompt}.simply answer with a yes or no.`
            }]
        })


        console.log('data:',res.data.choice[0].message);

    }catch(err){
        console.log('error:',err);
        return Promise.resolve({success:false,msg:err.message});
    }
}