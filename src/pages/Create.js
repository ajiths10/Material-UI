
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { FormControl, FormControlLabel, FormLabel, makeStyles } from '@material-ui/core'
import TextField  from '@material-ui/core/TextField';
import { color } from '@mui/system';
import  Radio  from '@material-ui/core/Radio';
import  RadioGroup  from '@material-ui/core/RadioGroup';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    
  }
})

export default function Create() {
  const classes = useStyles();
  const history = useHistory();

  const [title , setTitle]=useState('');
  const [details , setDetails]=useState('');
  const [titleErr , setTitleErr]=useState('');
  const [detailsErr , setDetailsErr]=useState('');
  const [method , setMethod]=useState("Bitcoin");

  const submitHandler=(evet)=>{
    evet.preventDefault();
    setDetailsErr(false);
    setTitleErr(false);

    if(!title) setTitleErr(true);
    if(!details) setDetailsErr(true);

    if(details && title){
      console.log(`details = ${details} // titlt=${title} // method= ${method} `)
      fetch('http://localhost:8000/notes',{
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({title,details,method})
      })
      .then(history.push('/'))
    }else{
      console.log('Please enter all the fields')
    }
  }

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

      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField 
        onChange={(e)=>{setTitle(e.target.value)}}
        className={classes.field}
          label='Note Title'
          variant='outlined' 
          color='secondary'
          fullWidth
          required
          error={titleErr}
          />
        <TextField 
        onChange={(e)=>{setDetails(e.target.value)}}
        className={classes.field}
          label='Details'
          variant='outlined' 
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsErr}
          />
          <FormControl className={classes.field}>
            <FormLabel>Payment Method</FormLabel>
          <RadioGroup  value={method} onChange={(e)=>{setMethod(e.target.value)}} row={4}>
            <FormControlLabel control={<Radio />} value='cash' label='cash'/>
            <FormControlLabel control={<Radio />} value='Bitcoin' label='Bitcoin'/>
            <FormControlLabel control={<Radio />} value='Gold' label='Gold'/>
            <FormControlLabel control={<Radio />} value='Equity' label='Equity'/>
          </RadioGroup>
          </FormControl>
          
      <Button
        onClick={() => console.log('you clicked me')}
        type="submit" 
        color="secondary" 
        variant="contained"
        endIcon={<ArrowForwardIosRoundedIcon />}>
        Submit
      </Button>
      </form>


      
    </Container>
  )
}