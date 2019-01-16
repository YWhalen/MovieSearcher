import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
};

function Anime(props){
    // console.log(movie.title)
    const { movie, classes } = props;
    return (
    //     <Card className={classes.card}>
    //     <CardContent>
    //       <Typography className={classes.title} color="textSecondary" gutterBottom>
    //         {movie.title}
    //       </Typography>
    //       <Typography variant="headline" component="h2">
    //         <img alt="poster" width="100" src={movie.poster_src} />
    //       </Typography>
    //       <Typography variant="h5" component="h2">
    //         {movie.overview}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       aa
    //     </CardActions>
    //   </Card>

    <Card className={classes.card}>
    <CardContent>
      <Typography variant="headline" component="h2">
        {movie.title}
      </Typography>
    </CardContent>
    <CardActions>
      <div className={classes.row}>
      </div>
    </CardActions>
  </Card>
    );
}

Anime.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Anime);
  