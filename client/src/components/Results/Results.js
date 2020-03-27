import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  }
});

function Results() {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Results
        </Typography>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Title
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Author
            </Typography>
            <Typography className={classes.pos} component="p">
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sed eveniet doloribus hic? Ipsam animi veniam voluptas autem amet odio sequi error dignissimos iusto et suscipit, quo a atque saepe?
            </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Container>
  );
};

export default Results