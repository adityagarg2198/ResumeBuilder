import React ,{useContext}from 'react';
import {Typography,Box, Grid,makeStyles} from '@material-ui/core';
import {SendUser} from './Resume';

const useStyles=makeStyles({
    box:{
        backgroundColor:"deepskyblue",
        padding:"3% 5%",
    },
    heading:{
        color:'Azure',
        fontSize:"6rem",
    },
    subheading:{
        color:'Azure',
        fontSize:"2.5rem",
    },
    text:{
        color:'Azure',
        fontSize:"1.5rem",
    },

})


const Top = () => {
    const [name,about,email,address]=useContext(SendUser);
    const classes=useStyles();
    return (
        <>
            <Box className={classes.box}>
                <Grid container>
                <Grid item xs={7} >
                    <Typography variant="h2"
                    className={classes.heading}>
                        {name}
                    </Typography>
                    <Typography variant="h4" className={classes.subheading}>
                        {about}
                    </Typography>
                </Grid>
                <Grid item xs={5} >
                    <Typography variant="h6" className={classes.text}>
                        {email}
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                        {address}
                    </Typography>
                </Grid>
                </Grid>
         </Box>
            
        </>
    )
}
export default Top;
