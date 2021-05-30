import React from 'react';
//import './style.css';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Components/Header'
import Feed from './Components/Feed';
import NavBar from './Components/NavBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'collumn'
    },
    main: {
        height: '100vh',
        display: 'flex',
        width: '1280px',
        margin: '0 auto',
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
       
    }
});


function Home() {
    const classes = useStyles;
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
            </main>


        </div>
    );
}

export default Home;