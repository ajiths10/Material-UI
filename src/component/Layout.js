import React from 'react'
import { makeStyles } from '@material-ui/core'
import  Drawer  from '@material-ui/core/Drawer';
import  Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme)=>{
return{

  page: {
    background: '#f9f9f9',
    width: '100%',
    padding:theme.spacing(3)
  },
  drawer: {
      width: drawerWidth,
  },
  drawerpaper: {
      width: drawerWidth,
  },
  root: {
      display: 'flex'
  },
  active: {
      background: '#f4f4f4'
  },
  title:{
    padding: theme.spacing(3)
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`
  },
  toolbar: theme.mixins.toolbar,
  date: {
    flexGrow: 1
  }
}
})

export default function Layout(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems= [
    {
      text: 'My Note',
      icon: <SubjectOutlined color='secondary' />,
      path:'/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create'
    }
]

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}> 
            Today is the {format(new Date(),'do MMMM Y')}
          </Typography>
          <Typography>
            Kyle
          </Typography>
        </Toolbar>
      </AppBar>
      
      {/* side drawer */}
      <Drawer 
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerpaper }}
      >
          <div>
              <Typography variant='h5' className={classes.title}>
                  Ninja Notes
              </Typography>
          </div>

          <List>
              {menuItems.map((item)=>{
                  return <ListItem key ={item.key} 
                  button
                  onClick={() => {history.push(item.path)}}
                  className={location.pathname== item.path ? classes.active : null}
                  >
                      
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                  </ListItem>
              })}
          </List>

      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { props.children }
      </div>
    </div>
  )
}