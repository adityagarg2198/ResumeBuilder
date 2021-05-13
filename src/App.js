import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import Home from "./components/Home";
import Resume from './components/Resume';
import Document from './components/Document';
import { Switch ,Route} from 'react-router-dom';
import Footer from './components/Footer';


const theme=createMuiTheme();

theme.typography.h3 = {
  fontSize: '4rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '2rem',
  }
};
function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/resume" component={Resume}/>
              <Route  path="/document" component={Document}/>
            </Switch>
            <Footer/>
      </ThemeProvider>
      
     
    </>
  );
}

export default App;
