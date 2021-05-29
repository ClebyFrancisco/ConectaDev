import React from 'react';
//import './style.css';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Components/Header'
import Feed from './Components/Feed';
import Navbar from './Components/NavBar';

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'collumn'
    },
    main: {
        height: '100vh',
        display: 'flex',
        width: '1200px',
        margin: '0 auto',
    },
    toolbar: {
        minHeight: 64,
    }
});


function Home(){
    const classes = useStyles;
    return (
    <div className={classes.root}>
        <Header />
        <div className ={classes.toolbar}></div>
        <main className={classes.main}>
            <Navbar />
            <Feed />
        </main>
        

    </div>
);
}

export default Home;