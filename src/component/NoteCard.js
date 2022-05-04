import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { Avatar, makeStyles } from '@material-ui/core'
import { yellow,red,pink,blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  test: {
    border: (note) =>{
      if(note. method=== 'gold'){
        return'1px solid gold'
      }
      if(note. method=== 'Bitcoin'){
        return'1px solid red'
      }
    }
  },

avatar: {
  backgroundColor: (note)=> {
  if (note.method=='Bitcoin'){
    return red[700]
  }
  if (note.method=='gold'){
    return yellow[700]
  }
  if (note.method=='cash'){
    return pink[200]
  }
  return blue[200]
}
}
})

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.title[0].toUpperCase()}
            </Avatar>
        }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.method}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}