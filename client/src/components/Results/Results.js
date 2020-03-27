import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import BookContext from '../../utils/BookContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

function Results() {

  const classes = useStyles();
  const { searchBooks, handleSaveBook } = useContext(BookContext)

  return (
    <Container>
      {searchBooks.map((book, index) => 
        <Card key={index} className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {book.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {book.authors}
            </Typography>
            <Typography variant="body2" component="p">
              <br />
              {book.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleSaveBook(index)} size="small">Save</Button>
          </CardActions>
        </Card>
      )}
    </Container>
  );
};

export default Results