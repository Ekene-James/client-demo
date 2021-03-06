import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'100vh',
    position:'relative',
 
    



  },
  content: {
    position:'absolute',
    top:'10%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily: 'Cormorant Infant,-apple-system',
    color:'white',
    flexDirection:'column',
    width:'100%'
  },
  name: {
    fontFamily: 'Cormorant Infant,-apple-system',

  },
  img: {
    transition : 'transform 1s ease-in, opacity .7s ease-in-out',
    
'&:hover': {
    opacity:0.5,
    transform:'scale(1.1)'
}
  },
  vid: {
    width: '100%',
    height:'100%',
    objectFit: 'cover',
  },
}));

 function Hero() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <video autoPlay muted id="heroVideo" src='video-home-kv.mp4' className={classes.vid} loop  />
    
      
        <div className={classes.content}>
          <Typography variant="h3" color="white" component="p">
                 Welcome!!
          </Typography>
          <Typography className={classes.name} gutterBottom variant="h1" component="h2"  style={{margin:'0',padding:0}}>
             Swap & Go
          </Typography>
          <Typography className={classes.name} gutterBottom variant="h1" component="h2" style={{margin:'1px'}}>
            in seconds
          </Typography>
          <Typography className={classes.name} gutterBottom variant="h4" component="h2"style={{margin:'1px'}}>
             Or do Something else
          </Typography>
         
        </div>
      
    </div>
  );
}
export default Hero