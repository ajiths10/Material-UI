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

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
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
      
      
      {/* side drawer */}
      <Drawer 
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerpaper }}
      >
          <div>
              <Typography variant='h5'>
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
        { props.children }
      </div>
    </div>
  )
}