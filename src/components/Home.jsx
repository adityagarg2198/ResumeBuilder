import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import bg from '../images/bg.jpg';
import { makeStyles, Typography ,Box} from '@material-ui/core';


const useStyles = makeStyles({
       root:{
        backgroundImage:`url(${bg})`,
        minHeight:`100vh`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100%'
       },
        title:{
        color:'royalblue',
        textAlign:'center',
       },
  });

const Home = () => {
    const classes=useStyles();
    return (
        <>
           <Box className={classes.root}>
             <Grid item xs={12}>
                   <Typography 
                   className={classes.title}
                   variant="h3"
                   >
                    Build Your Resume <br/>with us
                   </Typography>
               </Grid> 
           </Box>
        </>
    )
}

export default Home;
