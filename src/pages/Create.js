
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

})

export default function Create() {
  const classes = useStyles()

  return (
    <Container size="sm">
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit" 
        color="secondary" 
        variant="contained"
        endIcon={<ArrowForwardIosRoundedIcon />}>
        Submit
      </Button>

      
    </Container>
  )
}