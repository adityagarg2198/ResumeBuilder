import React ,{useContext}from 'react'
import {SendProject} from './Resume';
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
        // overflow-wrap: normal;
    },
    link:{
        color:'deepskyblue',
        fontSize:"1.5rem",
        marginBottom:'3%',
    },
})


const Project = () => {
    const projects=useContext(SendProject);
    const classes=useStyles();

    return (
        <>
            <Box className={classes.box}>
                    <Typography variant="h6" className={classes.heading}>
                            Projects
                    </Typography>
            {
                projects.map(project=>{
                    return  <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h6" className={classes.title}>
                                        {project.pname}
                                    </Typography>
                                    <Typography variant="h6" className={classes.detail}>
                                        {project.pdesc}
                                    </Typography>
                                    <Typography variant="h6" className={classes.detail} >
                                        {project.pduration}
                                    </Typography>
                                    <Typography variant="h6" className={classes.link}>
                                        {project.plink}
                                    </Typography>
                                </Grid>         
                         </Grid> 
                })
            }
            </Box>
        </>
    )
}
export default Project;
