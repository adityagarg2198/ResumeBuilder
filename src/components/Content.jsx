import React ,{useContext}from 'react'
import {SendContent} from './Resume';
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


const Content= () => {
    const [title,content]=useContext(SendContent);
    const classes=useStyles();

    return (
        <>
            <Box className={classes.box}>
                    <Typography variant="h6" className={classes.heading}>
                            {title}
                    </Typography>
            {
                content.map(contentname=>{
                    return  <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h6" className={classes.title}>
                                        {contentname.chead}
                                    </Typography>
                                </Grid>         
                         </Grid> 
                })
            }
            </Box>
        </>
    )
}
export default Content;
