import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import  ButtonGroup  from '@mui/material/ButtonGroup';
import  Container  from '@mui/material/Container';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  btn:{
    fontSize: 60,
    height:40,
    backgroundColor: 'violet',
    '&:hover':{
      backgroundColor: 'blue'
    }
  },
  title:{
    textDecoration: 'underline',
    marginBottom:20
  }
})

export default function Create() {
  const classes = useStyle()
  return (
    <Container>
      <Typography 
      className={classes.title}
      variant='h6'
      color='textSecondary'
      component='h2'
      gutterBottom>
        Create a new Note
      </Typography>

      <Button 
      className={classes.btn}
      onClick={()=>{console.log('Hello World')}}
      type='submit'
      color='secondary'
      variant='contained'
      endIcon={<ArrowForwardIosRoundedIcon  />}>
         submit</Button>



      {/* // Button Group 
      <ButtonGroup variant='contained' color='secondary'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>  */}
    </Container>
  )
}
