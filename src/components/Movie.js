import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    // Cards
    card: {
        width: 330,
        marginTop: 10,
        marginBottom: 10,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    // Avatar Icons
    avatar: {
      margin: 10,
    },
    twitterAvatar: {
      margin: 10,
      backgroundColor: '#1da1f2',
    },
    wwwAvatar: {
      margin: 10,
      backgroundColor: '#6c1df2',
      padding: 7,
      boxSizing: 'border-box',
    },
    row: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  });

function Movie(props){
    // console.log(movie.title)
    const { movie, classes } = props;
    return (
        <Card className={classes.card}>
          <CardMedia>
            {movie.poster_src !== '' &&
            <img alt="poster" src={movie.poster_src}/>
            }
          </CardMedia>
          <CardContent>
            <Typography variant="headline" component="h2">
              {movie.title}
            </Typography>

          </CardContent>
        <CardActions>
          <div className={classes.row}>
            {movie.id !== '' &&
              <a href={'https://twitter.com/search?q=%23'+movie.title} target="_blank" rel="noopener noreferrer">
                <Avatar className={classes.twitterAvatar} src="/images/twitter.svg"/>
              </a>
            }
            {movie.id !== '' &&
              <a href={'https://www.themoviedb.org/movie/'+movie.id} target="_blank" rel="noopener noreferrer">
                <Avatar className={classes.wwwAvatar} src="/images/www.svg"/>
              </a>
            }
          </div>
        </CardActions>
        </Card>

    );
}

Movie.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Movie);
  