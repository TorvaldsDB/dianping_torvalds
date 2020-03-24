import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorToast from '../../components/ErrorToast';
import { actions as appActions, getError } from '../../redux/modules/app';
import PrivateRoute from '../PrivateRoute';
import AsyncComponent from '../../utils/AsyncComponent';

const Home = AsyncComponent(() => import('../Home'));
const ProductDetail = AsyncComponent(() => import('../ProductDetail'));
const Search = AsyncComponent(() => import('../Search'));
const SearchResult = AsyncComponent(() => import('../SearchResult'));
const Login = AsyncComponent(() => import('../Login'));
const User = AsyncComponent(() => import('../User'));
const Purchase = AsyncComponent(() => import('../Purchase'));
class App extends Component {
  render() {
    const {
      error,
      appActions: { clearError }
    } = this.props;
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <PrivateRoute path='/user' component={User}></PrivateRoute>
            <Route path='/detail/:id' component={ProductDetail}></Route>
            <Route path='/search' component={Search}></Route>
            <Route path='/search_result' component={SearchResult}></Route>
            <PrivateRoute
              path='/purchase/:id'
              component={Purchase}
            ></PrivateRoute>
            <Route path='/' component={Home}></Route>
          </Switch>
        </Router>
        {error ? (
          <ErrorToast msg={error} clearError={clearError}></ErrorToast>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: getError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
