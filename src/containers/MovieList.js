import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

// Redux関連
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import * as actions from '../actions';

// コンポーネントの準備
import Movie from '../components/Movie';

// スタイル
const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  });

class MovieList extends React.Component {
    // componentDidMount(){
    //     this.props.getMovies()
    // }

    // Movie関連
    // let renderCards = [];

    render() {

    //const { MovieListReducer } = this.props;

    // Material-ui関連
    const { classes } = this.props;

    var movieRows = []
    
    console.log(this.props.items.items)

    this.props.items.items.forEach((movie) => {
        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
        // console.log(movie.poster_path)
        const movieRow = <Movie key={movie.id} movie={movie}/>
        movieRows.push(movieRow)
      })

        return (
          <div className={classes.root}>
          {movieRows}
          </div>
        );
      }
    }
  
  // Material-ui関連
  MovieList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };


// Material-uiのテーマ設定＋Redux設定
//export default MovieList_Material;

// Redux関連
const mapStateToProps = (state, ownProps) => ({
    items: state.items,
  });

function mapDispatch(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch),
    };
}
  
  // Material-uiのテーマ設定＋Redux設定
  export default connect(mapStateToProps, mapDispatch)(
    withStyles(styles, { withTheme: true })(MovieList)
  );
