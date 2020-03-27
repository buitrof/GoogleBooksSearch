import React, { useContext } from 'react';
import BookContext from '../../utils/BookContext'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20
  },
  button: {
    float: "right"
  },
  search: {
    width: '125ch'
  }
});

function Search() {

  const classes = useStyles();
  const { input, handleSearchBook, handleInputChange } = useContext(BookContext)

  return (
    <Container className={classes.root}>
      <form>
        <Typography variant="h5" component="h2">
          Book Search
        </Typography>
        <TextField className={classes.search} 
        label="Book Title" 
        variant="filled"
        name="input"
        value={input}
        onChange={handleInputChange}/>
        <Button className={classes.button}  onClick={handleSearchBook} size="small">Search</Button>
      </form>
    </Container>
  );
};

export default Search