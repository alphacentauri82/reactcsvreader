import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import AirplanemodeActiveIcon from 'material-ui/svg-icons/device/airplanemode-active';

import NavigationButton from 'components/NavigationButton';

export default class AppBar extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <Toolbar>
        <ToolbarGroup style={{paddingLeft: 20}} firstChild/>
        <ToolbarGroup>
          <TextField
            hintText="Filter"
            style={{width: 120, marginLeft: 20, marginTop: 3, fontSize: 13}}
            inputStyle={{color: 'white'}}
            hintStyle={{color: 'white'}}
            underlineFocusStyle={{borderColor: 'white'}}
          />
          <IconButton tooltip="Filter">
            <ActionSearchIcon color="white" />
          </IconButton>
          {children}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
