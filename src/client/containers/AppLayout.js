import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import Paper from 'material-ui/Paper';

import AppBar from 'containers/AppBar';
import ModalsLayout from 'containers/ModalsLayout/ModalsLayout';
import NotFound from 'containers/NotFound';
import UsersPage from 'containers/UsersPage';
import ProgressBar from 'components/ProgressBar';

export class AppLayout extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  };

  render() {
    const {loading} = this.props;

    return (
      <section>
        <Paper zDepth={1} style={{position: 'fixed', width: '100%', zIndex: 10}}>
          <AppBar/>
          {loading && <ProgressBar />}
        </Paper>
        <section style={{paddingTop: 50}}>
          <Switch>
            <Route exact path="/" component={UsersPage} />
            <Route exact path="/users" name="home-users" component={NotFound} />
            <Redirect to="/" />
          </Switch>
        </section>
        <ModalsLayout />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading')
  };
}

export default connect(mapStateToProps)(AppLayout);
