import React ,{useContext}from 'react'
import {SendEducation} from './Resume';
import {Typography,Box, Grid,makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
    box:{
        padding:"5% 10%",
    },
    heading:{
        color:'deepskyblue',
        fontSize:"3rem",
    },
    title:{
        color:'black',
        fontSize:"2.5rem",
    },
    detail:{
        color:'DarkSlateGray',
        fontSize:"2rem",
        wordBreak:'break-all',
    },
    link:{
        color:'deepskyblue',
        fontSize:"1.5rem",
        marginBottom:'3%',
    },
})


const Education= () => {
    const educations=useContext(SendEducation);
    const classes=useStyles();

    return (
        <>
            <Box className={classes.box}>
                    <Typography variant="h6" className={classes.heading}>
                            Education
                    </Typography>
            {
                educations.map(education=>{
                    return  <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h6" className={classes.title}>
                                        {education.iname}
                                    </Typography>
                                    <Typography variant="h6" className={classes.detail}>
                                        {education.iclass}
                                    </Typography>
                                    <Typography variant="h6" className={classes.detail} >
                                        {education.iduration}
                                    </Typography>
                                    <Typography variant="h6" className={classes.link}>
                                        {education.iscore}
                                    </Typography>
                                </Grid>         
                         </Grid> 
                })
            }
            </Box>
        </>
    )
}
export default Education;
