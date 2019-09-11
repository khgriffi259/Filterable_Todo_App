import React from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';

const Main = ({ children }) => {
    return (
        <div>
            <Header />
            <Grid container justify="center">
                <Grid item xs={12} md={6} style={{marginTop: 30}}>
                    {children}
                </Grid>
            </Grid>
            <Footer />
        </div>
    )   
}

export default Main;