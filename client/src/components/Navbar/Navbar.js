import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    display: 'inline'
  },
  inline: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    display: 'inline'
  }
}))

function Navbar() {

  const classes = useStyles();

  return (
    <Typography component={'span'} className={classes.root}>
      <Typography variant='h5' component='h2' className={classes.inline}>Google Books</Typography>
      <Link href="/" variant="body1">Search</Link>
      <Link href="/saved" variant="body1">Saved</Link>
    </Typography>
  )
}

export default Navbar