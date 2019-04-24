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

const Task = ({classes, state}) => {
  return (
    <ListItem>
        <Card raised className={classes.card}>
            <CardContent>
                <Typography variant={"h1"}>{state.title}</Typography>
                <Typography paragraph >{state.text}</Typography>
            </CardContent>
            <CardActions>
            <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                <Delete />
                </IconButton>
            </Tooltip>
            </CardActions>
        </Card>
    </ListItem>
  )
}
export default withStyles(styles)(Task);