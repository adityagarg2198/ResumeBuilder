import React ,{useContext}from 'react'
import {SendSkill} from './Resume';
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


const Skills= () => {
    const skills=useContext(SendSkill);
    const classes=useStyles();

    return (
        <>
            <Box className={classes.box}>
                    <Typography variant="h6" className={classes.heading}>
                            Skills
                    </Typography>
            {
                skills.map(skillname=>{
                    return  <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h6" className={classes.title}>
                                        {skillname.sname}
                                    </Typography>
                                </Grid>         
                         </Grid> 
                })
            }
            </Box>
        </>
    )
}
export default Skills;
