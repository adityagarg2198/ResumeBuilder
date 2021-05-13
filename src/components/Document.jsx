
import React from 'react'
import Top from './Top';
import Project from './Project';
import Education from './Education';
import html2PDF from 'jspdf-html2canvas';
import {Grid,makeStyles,Button} from '@material-ui/core';
import Skills from './Skills';
import Certificate from './Certificate';
import Content from './Content';

const useStyles=makeStyles({
    document:{
        fontFamily: "'Open Sans', sans-serif",
    },
    btn:{
        color:'deepskyblue',
        marginLeft:'45%',
    }
})
const Document = () => {
    const classes=useStyles();
    var page = document.getElementById('document');
    const download=async()=>{
        const pdf = await html2PDF(page, {
             jsPDF: {
               format: 'a4',
               unit: 'px',
             },
             html2canvas: {
                scrollX: 0,
                scrollY: -window.scrollY,
                scale: 5,
              },
             output: './Resume.pdf'
           });
       }
    return (
        <>
        <div id="document" className={classes.documentcls}>
            <Top/>
            <Grid container >
                <Grid item xs={6}>
                    <Project/>
                </Grid>
                 <Grid item xs={6}>
                     <Grid item xs={12}>
                            <Skills/>
                     </Grid>
                     <Grid item xs={12}>
                            <Certificate/>
                     </Grid>    
                 </Grid>
                 <Grid item xs={6}>
                     <Education/>
                 </Grid>
                 <Grid item xs={6}>
                 <Content/>
                 </Grid>
            </Grid>
            
        </div>
        <Button className={classes.btn} onClick={download}>Download</Button>
        </>
    )
}

export default Document;
