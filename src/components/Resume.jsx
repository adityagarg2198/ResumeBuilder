import { Button, Grid, Paper,makeStyles, Typography} from '@material-ui/core';
import React,{createContext, useState} from 'react';
import Document from './Document';
import InputBox from './Box/InputBox';


const SendUser=createContext();
const SendProject=createContext();
const SendEducation=createContext();
const SendSkill=createContext();
const SendCertificate=createContext();
const SendContent=createContext();

const useStyles=makeStyles({
   paper:{
            width:'75%',
            padding:'5% 10%',
            minHeight:'60vh',
   },
   root:{
       padding:' 5% 10%',
   },
   btn:{
       color:'deepskyblue',
   }
})

const Resume = () => {
    const classes=useStyles();

    // user state
    const [user,setUser]= useState({
        name:"",
        about:"",
        email:"",
        address:""
    });
    const handleChange=(e) =>{
        const {name,value}=e.target;
        setUser(prev =>{
            return{
                ...prev,
                [name]:value
            };
        });
};
// project state
    const [project,setProject]=useState({
        pname:"",
        pdesc:"",
        pduration:"",
        plink:""

    });
    const [projectarray,setProjectarray]=useState([]);
    const handleProject=(e)=>{
        const {name,value}=e.target;
        setProject(prev =>{
            return{
                ...prev,
                [name]:value
            };
        });
    }
    const addProject=()=>{
            setProjectarray(prevProject =>{
                return [...prevProject,project];
            }); 
            window.alert("Success");
    }


    // education state
    const [education,setEducation]=useState({
        iname:"",
        iclass:"",
        iduration:"",
        iscore:""

    });
    const [educationarray,setEducationarray]=useState([]);
    const handleEducation=(e)=>{
        const {name,value}=e.target;
        setEducation(prev =>{
            return{
                ...prev,
                [name]:value
            };
        });
    }
    const addEducation=()=>{
            setEducationarray(prevEducation =>{
                return [...prevEducation,education];
            }); 
            window.alert("Success");
    }

    // skill  state
    const [skillname,setSkill]=useState({
        sname:"",
    });
    const [skillarray,setSkillarray]=useState([]);

    const handleSkill=(e)=>{
        const {name,value}=e.target;
        setSkill(prev =>{
            return{
                ...prev,
                [name]:value
            };
        });
    }
    const addSkill=()=>{
            setSkillarray(prevSkill =>{
                return [...prevSkill,skillname];
            }); 
            window.alert("Success");
    }


     // certificate state
     const [certname,setCertname]=useState({
        cname:"",
    });
    const [certarray,setCertarray]=useState([]);

    const handleCert=(e)=>{
        const {name,value}=e.target;
        setCertname(prev =>{
            return{
                ...prev,
                [name]:value
            };
        });
    }
    const addCert=()=>{
            setCertarray(prevCert =>{
                return [...prevCert,certname];
            }); 
            window.alert("Success");
    }


    // additional state
    const [title,setTitle]=useState({
        tname:"",
    });
    const handleTitle=(e)=>{
        const {name,value}=e.target;
        setTitle(prev =>{
            return{
                ...prev,
                [name]:value,
            };
        });
    }
    const [content,setContent]=useState({
        chead:"",
    });
    const handleContent=(e)=>{
        const {name,value}=e.target;
        setContent(prev =>{
            return{
                ...prev,
                [name]:value
            };
        });
    }
    const [contentarray,setContentarray]=useState([]);

    const addContent=()=>{
            setContentarray(prevContent =>{
                return [...prevContent,content];
            }); 
            window.alert("Success");
    }
    const btn=document.getElementById("document")

    return (
        <>
           
           <Grid container spacing={3}  className={classes.root}>
               {/* Details Box */}
               <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <InputBox name="name" value={user.name} func={handleChange} title="Your Name" req="true" />
                        <InputBox name="about"  value={user.about} func={handleChange} title="Description About You" req="true"/>
                        <InputBox name="email" value={user.email} func={handleChange}title="Your Email" req="true"/>
                        <InputBox name="address" value={user.address}  func={handleChange} title="Address" req="true"/> 
                    </Paper>
               </Grid>

                {/*  Project Box*/}
               <Grid item xs={6}>
                      <Paper className={classes.paper}>
                      <InputBox name="pname" value={project.pname} func={handleProject} title="Project Title" req="true"/>
                      <InputBox name="pdesc"  value={project.pdesc} func={handleProject} title="Description About Project" req="true"/>
                       <InputBox name="pduration" value={project.pduration} func={handleProject} title="Time Duration" req="true"/>
                      <InputBox name="plink" value={project.plink} func={handleProject} title="Link"/> 
                       <Button className={classes.btn}onClick={addProject}>Add Project</Button>
                      </Paper>
               </Grid>

                {/*  Education Box*/}
               <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <InputBox name="iname" value={education.iname} func={handleEducation} title="Institute Name" req="true"/>
                        <InputBox name="iclass"  value={education.iclass} func={handleEducation} title="Class/Degree Name" req="true"/>
                        <InputBox name="iduration" value={education.iduration} func={handleEducation} title="Pass Out" req="true"/>
                        <InputBox name="iscore" value={education.iscore} func={handleEducation} title="Score" req="true"/> 
                        <Button className={classes.btn}onClick={addEducation}>Add Education</Button>
                    </Paper>
               </Grid>
               <Grid item xs={6}>
                   <Paper className={classes.paper}>
                          {/*  Skills Box*/}
                        <Grid item xs={12}>
                                <InputBox name="sname"  value={skillname.sname} func={handleSkill} title="Enter Skill Name" req="true"/>
                                <Button className={classes.btn}onClick={addSkill}>Add Skill</Button>
                        </Grid>
                            {/*  Certificate Box*/}
                        <Grid item xs={12}>
                                <InputBox name="cname"  value={certname.cname} func={handleCert} title="Enter Certificate Name" req="true"/>
                                <Button className={classes.btn} onClick={addCert}>Add Certificate</Button>
                        </Grid>
                   </Paper>
               </Grid>
                  {/* addional section  */}
               <Grid item xs={6}>
                    <Paper className={classes.paper}>
                            <Typography variant="h5" >
                                Optional Section
                            </Typography>
                             <InputBox name="tname"  value={title.tname} func={handleTitle} title="Enter Title of section"/>
                            <InputBox name="chead"  value={content.chead} func={handleContent} title="Enter Content"/>
                             <Button className={classes.btn} onClick={addContent}>Add Content</Button>
                    </Paper>
               </Grid>
           </Grid>
            

            {/* Provider section  */}

            <SendUser.Provider value={[user.name,user.about,user.email,user.address]}>
                <SendProject.Provider value={projectarray}>
                <SendEducation.Provider value={educationarray}>
                    <SendSkill.Provider value={skillarray}>
                    <SendCertificate.Provider value={certarray}>
                        <SendContent.Provider value={[title.tname,contentarray]}>
                            <Document/>
                        </SendContent.Provider> 
                    </SendCertificate.Provider>
                    </SendSkill.Provider>
                </SendEducation.Provider>
                </SendProject.Provider>
            </SendUser.Provider>
        </>
    )
}
export default Resume;
export {SendUser,SendProject,SendEducation,SendSkill,SendCertificate,SendContent};