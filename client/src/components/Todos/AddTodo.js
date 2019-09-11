import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';

const styles = {
    paper: {
        padding: 10,
        marginBottom: 20
    },
      textField: {
          width: '100%',
          marginBottom: 5
    }
}

class AddTodo extends Component {
    state = {
        text: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({text: ''});
    }
    
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value});
    }
    
    render(){
        const { classes } = this.props;
        return(
            <Paper className={classes.paper}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="text"
                        label="Add todo ..."
                        placeholder="Placeholder"
                        fullWidth
                        margin="normal"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </form>
            </Paper>
        )
    }
}

export default connect(null, { addTodo })(withStyles(styles)(AddTodo));