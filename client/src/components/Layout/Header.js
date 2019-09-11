import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchForm from '../Search/SearchForm';

const styles = {
    root: {
        flexgrow: 1,
    },
    logo: {
        color: '#fff',
        fontSize: 30,
        textTransform: 'uppercase'
    },
    space:{
        justifyContent: 'space-between'
    }
};

class Header extends Component {
    state = {
        anchorEl: null
    }

    handleMenu = e => {
        this.setState({anchorEl: e.currentTarget});
    }
    
    handleClose = () => {
        this.setState({anchorEl: null});
    }

    render(){

    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const guestLinks = (
        <div>
            <IconButton 
                aria-owns={open ? 'menu-appbar': undefined}
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleMenu}
            >
                <MoreVert />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
            >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>Login</MenuItem>
            </Menu>
        </div>        
    );

    return (
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor: '#4B0082'}} >
                    <ToolBar className={classes.space}>
                        <h1 className={classes.logo}>TODO</h1>       
                        <SearchForm />
                        {guestLinks}    
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header);