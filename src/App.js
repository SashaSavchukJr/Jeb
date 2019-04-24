import React from 'react';
import {IconButton, Card, CardActions, CardContent, Typography, Paper, List, ListItem, Tooltip} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = {
  card: {
    width: '100%'
  }
}
const App = ({classes}) => {
  return(
    <Paper>
      <List>
        <ListItem >
          <Card className={classes.card}>
            <CardContent>
              <Typography>TEst test</Typography>
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
        <ListItem>
          <Card className={classes.card}>
            <CardContent>
              <Typography>TEst 22 test</Typography>
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
      </List>
    </Paper>
  )
}
export default withStyles(styles)(App);
