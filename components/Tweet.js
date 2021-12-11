import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { fontSize } from '@mui/system';
function Tweet({tweet,name,pic,created}) {
  const [answer,setAnswer]=React.useState(null)
  const handleClick=async()=>{
    const response=await fetch(`/api/analyzer`,{
      method:"POST",
      body:JSON.stringify({tweet:tweet}),
      headers:{
        "Content-Type":'application/json'
      }
    })
    const jsonres=await response.json()
    console.log(jsonres.result.hemot);
    setAnswer(jsonres.result.hemot);
  }
    return (
    <Card sx={{ minWidth: 275, maxWidth:"50%" }}>
      <CardContent>
        <Stack direction="row" spacing={2} style={{marginBottom:"2%"}}>
        <Avatar alt={name} src={pic} />
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
        
          {name}
        </Typography>
        </Stack>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {created.slice(0,20)+created.slice(26,31)}
        </Typography>
        <Typography variant="body2">
          {tweet}
        </Typography>
      </CardContent>
      <CardActions sx={{position:"relative"}}>
        <Button size="small" onClick={handleClick}>Analyze</Button>
        {
          answer?
            <Typography color={((answer==="Angry")||(answer==="Sad")||(answer==="Fear"))?"#DA0404":"#19CC02"} sx={{position:'absolute',fontSize:14, right:"5%"}}>{answer}</Typography>
          :null
        }
        
      </CardActions>
    </Card>
  );
}

export default Tweet
