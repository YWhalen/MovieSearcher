import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';

// Redux関連
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import * as actions from '../actions';

// コンポーネントの準備
import Anime from '../components/Anime';

// スタイル
const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  });

class AnimeList extends React.Component {
    // componentDidMount(){
    //     this.props.getAnimes()
    // }

    // Anime関連
    // let renderCards = [];

    render() {

    //const { AnimeListReducer } = this.props;

    // Material-ui関連
    const { classes } = this.props;

    // Anime関連
     //const items = AnimeListReducer.items;
    // const results = searchResults.results
    // let renderCards = [];
    // let animeCards =[];
    // let emptyCards =[];
    // const animeItemsLength = animeItems.length;

    // for (let index=0; index<animeItemsLength; index++){
    //     animeCards.push(<Anime key={index} {...animeItems[index]}/>);
    //     emptyCards.push(<Anime key={animeItemsLength + index} empty="true"/>);
    // }
    // renderCards.push(animeCards);
    // renderCards.push(emptyCards);

    var movieRows = []
    
    console.log(this.props.items.items)

    this.props.items.items.forEach((movie) => {
        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
        // console.log(movie.poster_path)
        const movieRow = <Anime key={movie.id} movie={movie}/>
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
  AnimeList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
//export default Home;

//let AnimeList_Material = withStyles(styles, { withTheme: true })(AnimeList)

// Material-uiのテーマ設定＋Redux設定
//export default AnimeList_Material;

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
    withStyles(styles, { withTheme: true })(AnimeList)
  );
