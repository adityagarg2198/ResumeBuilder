import React from 'react'
import {BottomNavigation,BottomNavigationAction, Typography}from '@material-ui/core';
import {makeStyles,Link} from '@material-ui/core';
import {MdCopyright} from 'react-icons/md';
 const useStyles=makeStyles({
     root:{
         backgroundColor:'RoyalBlue',
     },
     text:{
        color:'white',
        
     },
     link:{
        textDecoration:'none',
        color:'white',
        marginLeft:'5px',
     }
 })

const Footer = () => {
    const classes=useStyles();
    return (
        <>
            <BottomNavigation className={classes.root}>
                <Typography
                className={classes.text}
                variant="h6">Made By
                        <Link
                        target="_blank"
                        className={classes.link}
                        href="https://adityagarg2198.github.io/PortfolioWebsite/index.html">
                        Aditya Garg
                    </Link>
            </Typography>
            
            </BottomNavigation>
        </>
    )
}

export default Footer;
