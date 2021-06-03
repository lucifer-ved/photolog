import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from'@material-ui/core';
import memories from './images/memories.png'
import Posts from './components/posts/posts';
import Form from './components/form/from';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
typography: {
    fontFamily: [
    'Alegreya',
    'serif',
    ].join(','),
},});


const App = () => {
    const[currentId,setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(getPosts());
    },[])

    return (
        <ThemeProvider theme={theme}>
        <Container maxwidth="lg"> 
            <Typography className={classes.heading} variant="h2" align="center">PhotoLog</Typography>
            <Grow in>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Posts setCurrentId={setCurrentId} />
                            {/* <Form currentId={currentId} setCurrentId={setCurrentId}  /> */}
                        </Grid>
                        {/* <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}  />
                        </Grid> */}
                    </Grid> 
                    {/* FAB */}
                    <Fab color="primary" aria-label="add" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Container> 
            </Grow>
        </Container>
    </ThemeProvider>
    )
}

export default App;
