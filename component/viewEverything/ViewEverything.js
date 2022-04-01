import React from 'react'
import { makeStyles,Typography,Grid} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        margin:'50px 0',
        marginBottom:0
      
    },
    bg: {
        background: 'url(/images/hero/sc6.jpg) no-repeat center center/cover',
        width: '100%',
        height : '500px',
       backgroundAttachment : 'fixed',
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
      
    },
    
    
  }));
function ViewEverything({txt}) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
   
            <Typography style={{textAlign : 'center',marginBottom:'50px'}} variant="body2" gutterBottom>
                 {txt}
            </Typography>
        <div className={classes.bg}>
            <Typography style={{textAlign : 'center',color:'white'}} variant="h4" gutterBottom>
                
                 All these we can deliver
            </Typography>
        </div>
            
    </div>
    )
}

export default ViewEverything
