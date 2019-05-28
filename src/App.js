import React, {useState} from 'react';
import {Paper, List, Button} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Task from './Task'

const styles = {
  card: {
    width: '100%'
  },
  button:{
    backgroundColor:"green"
  }
}

const sampleTask = {
  title:"Lorem Ipsum",
  text:"kjhrskjfhg fjghfjg fjdsgtg nnfruufh  dy..",
  isComplete: false,
  isArchived: false,
  dateCreated: new Date(),
  dateUpdated: new Date()
}

const App = ({classes}) => {
  const [tasks,addTask] = useState([])
  return (
    <Paper>
      <List>
        {tasks.map(task => <Task state={task}/>)}
      </List>
      <Button onClick={() => addTask(prevTasks => [...prevTasks, sampleTask])}
      className={classes.button}>
        New Task
      </Button>  
    </Paper>
  )
}
export default withStyles(styles)(App);
