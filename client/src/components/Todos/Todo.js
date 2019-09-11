import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { deleteTodo } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
    marginBottom: 10
  },
  text:{
      textAlign: 'center',
      '&:hover': {
          textDecoration: 'line-through'
      }
  }
}));

const Todo = ({ todo, key, deleteTodo }) => {
  
    const classes = useStyles();

    return (
        <div onClick={()=>deleteTodo(todo._id)}>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3" className={classes.text}>
                    {todo.text}
                </Typography>
            </Paper>
        </div>
    );
}

export default connect(null, { deleteTodo })(Todo);