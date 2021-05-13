import React ,{useContext}from 'react'
import {SendCertificate} from './Resume';
import {Typography,Box, Grid,makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    box:{
        padding:"5% 15%",
    },
    heading:{
        color:'deepskyblue',
        fontSize:"3rem",
    },
    title:{
        color:'black',
        fontSize:"2rem",
    },
})


const Certificate= () => {
    const certificates=useContext(SendCertificate);
    const classes=useStyles();

    return (
        <>
            <Box className={classes.box}>
                    <Typography variant="h6" className={classes.heading}>
                            Certificates
                    </Typography>
            {
                certificates.map(certname=>{
                    return  <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h6" className={classes.title}>
                                        {certname.cname}
                                    </Typography>
                                </Grid>         
                         </Grid> 
                })
            }
            </Box>
        </>
    )
}
export default Certificate;
