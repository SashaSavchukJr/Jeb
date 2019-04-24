import React, {useState} from 'react';
import {Paper, List} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Task from './Task'

const styles = {
  card: {
    width: '100%'
  }
}

const mockTasks = [{
  title:"Lorem Ipsum",
  text:"kjhrskjfhg fjghfjg fjdsgtg nnfruufh  dy..",
  isComplete: false,
  isArchived: false,
  dateCreated: new Date(),
  dateUpdated: new Date()
},
{
  title:"Lorem Ipsum2.0",
  text:"kjhgksjnhb khsgfiuhf jhsnfkjgh   uidsfyt.!",
  isComplete: false,
  isArchived: false,
  dateCreated: new Date(),
  dateUpdated: new Date()
}]
const App = ({classes}) => {
  const [tasks,addTask] = useState(mockTasks)
  return (
    <Paper>
      <List>
        {tasks.map(task => <Task state={task}/>)}
      </List>
    </Paper>
  )
}
export default withStyles(styles)(App);
