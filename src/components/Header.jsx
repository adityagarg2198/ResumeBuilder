import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles,Grid} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles=makeStyles({
    appbar:{
        backgroundColor:"RoyalBlue",
        
    },
    link:{
       textDecoration:'none',
       color:'white',
    }
});


const Header = () => {

    const classes=useStyles();
    return (
        <>
            <AppBar position="sticky"
            className={classes.appbar}>
                <Toolbar variant="dense">
                    <Grid container spacing={1} >
                        <Grid item xs={10}>
                            <Typography 
                            variant="h5">
                                    Resume Builder
                            </Typography>
                    </Grid>
                        <Grid item  >
                            <NavLink
                            className={classes.link}
                            to="/"
                            ><Typography
                             variant="h5"
                            >Home</Typography>
                            </NavLink>
                        </Grid>
                        <Grid item  >
                        <NavLink
                          to="/resume"
                          className={classes.link}
                        ><Typography
                            variant="h5"                        
                        >
                            Build Now
                        </Typography>
                            </NavLink>
                        </Grid>

                    </Grid>
                    
                   
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Header
