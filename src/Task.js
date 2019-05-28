import React from 'react';
import {IconButton, Card, CardActions, CardContent, Typography, ListItem, Tooltip} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    width: '100%',
    backgroundColor: "#FFFF66"
  },
  title: {
      fontSize: 20
  }
}

const Task = ({classes, task, updateTasks}) => {
  return (
    <ListItem key={task.id}>
        <Card raised className={classes.card}>
            <CardContent>
                <Typography variant={"h1"}>{task.title}</Typography>
                <Typography paragraph >{task.text}</Typography>
            </CardContent>
            <CardActions>
            <Tooltip title="Delete">
                <IconButton aria-label="Delete" onClick={() => updateTasks(prevTasks => {

                    const updatedTasks = prevTasks.filter(t => t.id !== task.id)
                    console.log(task, updatedTasks, prevTasks)
                    return updatedTasks
                })}>
                <Delete />
                </IconButton>
            </Tooltip>
            </CardActions>
        </Card>
    </ListItem>
  )
}
export default withStyles(styles)(Task);