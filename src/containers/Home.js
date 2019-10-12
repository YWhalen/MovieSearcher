import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from  '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Material-UIアイコン取得
import Search from '@material-ui/icons/Search';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// MovieList取得
import MovieList from '../containers/MovieList';

const styles = theme => ({
    titleImage: { 
        width: '100%',
        maxWidth: 700
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 16,
        padding: 10,
        width: 250,
      },
      leftIcon: {
        marginRight: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },
      root: {
      },
    
      // Form
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
})

const current_year = (new Date()).getFullYear();
// const current_category = { popularity:'人気順' }
//var map = new Map([[ "popularity",'人気順'], ['vote_average','評価が高い'], ['revenue','売り上げた順']])
var map = new Map([[ "やっぱりこれでしょ！順",'popularity'], ['見て後悔しない！順','vote_average'], ['みんなが知ってる順','revenue']])
//map.set('popularity', '人気順')
//const current_cour = Math.ceil((new Date()).getMonth() / 3);

class Home extends React.Component {

  // ここだけでしか使わないのでRedux未使用;    
    state = {
        year: current_year,
        category: map.get('人気順')
        //cour: current_cour
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render(){
    // redux関連
    const { actions } = this.props;
    // Material-ui関連
    const { classes } = this.props;
    // Year入力
    const years = [];
    for (var y = current_year; y >= 1990; y--){
        years.push(<MenuItem key={y} value={y}>{y}年</MenuItem>);
    }

    // sort_by入力
    const category = []
    map.forEach(function(value, key) {
        category.push(<MenuItem key={key} value={value}>{key}</MenuItem>);
    });
        return(
            <div>
                <img src="/images/MovieSeacher.png" alt="title" className={classes.titleImage}/>
                <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="year-helper">years</InputLabel>
                    <Select
                        value= {this.state.year}
                        onChange= {this.handleChange}
                        inputProps={{
                            name: 'year',
                            id: 'year-helper',
                        }}
                    >
                    {years}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="year-helper">Sort By</InputLabel>
                    <Select
                        value= {this.state.category}
                        onChange= {this.handleChange}
                        inputProps={{
                            name: 'category',
                            id: 'year-helper',
                        }}
                    >
                    {category}
                    </Select>
                </FormControl>
                </form>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => actions.getMovies(this.state.year, this.state.category)}
                >
                {/* {this.state.year}年 {this.state.category}で<br/>の映画を検索 */}
                映画を検索
                <Search className={classes.rightIcon}/>
                </Button>
                <MovieList/>

            </div>
        )
    }
}

// Material-ui関連
Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

// Redux関連
const mapState = (state, ownProps) => ({
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// // Material-uiのテーマ設定＋Redux設定
// export default Home_Material;

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
    withStyles(styles, { withTheme: true })(Home)
  );