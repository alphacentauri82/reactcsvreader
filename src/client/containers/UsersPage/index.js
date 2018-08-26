import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {
  uploadFiles
} from 'api/actions';
import {
  FormattedMessage,
  FormattedRelative
} from 'react-intl';

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this._inputs = {};
    this.state = {
      usersFile: null,
      agentsFile: null,
      recruitsFile: null
    };
  }
  handleChooseFileClick(name) {
    setTimeout(() => {
      this._inputs[name].click();
    }, 200);
  }
  uploadFiles() {
    this.props.uploadFiles(this.state.usersFile)
  }
  render() {
    return (
      <section style={{
        padding: 20
      }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
          <div>
            <input
              type="file"
              name="users"
              id="users"
              style={{
                width: '0.1px',
                height: '0.1px',
                opacity: 0,
                overflow: 'hidden',
                position: 'absolute',
                zIndex: -1
              }}
              ref={x => this._inputs.users = x}
              onChange={(event) => {
                this.setState({
                  usersFile: event.target.files[0]
                });
              }}
            />
            <label htmlFor="users">
              <RaisedButton label="Choose users file" onClick={() => {
                this.handleChooseFileClick('users')
              }}/>
            </label>
          </div>
          <div>
            <input
              type="file"
              name="agents"
              id="agents"
              style={{
                width: '0.1px',
                height: '0.1px',
                opacity: 0,
                overflow: 'hidden',
                position: 'absolute',
                zIndex: -1
              }}
              ref={x => this._inputs.agents = x}
              onChange={(event) => {
                this.setState({
                  agentsFile: event.target.files[0]
                });
              }}
            />
            <label htmlFor="users" >
              <RaisedButton label="Choose agents file" onClick={() => {
                this.handleChooseFileClick('agents')
              }}/>
            </label>
          </div>
          <div>
          <input
            type="file"
            name="recruters"
            id="recruters"
            style={{
              width: '0.1px',
              height: '0.1px',
              opacity: 0,
              overflow: 'hidden',
              position: 'absolute',
              zIndex: -1
            }}
            ref={x => this._inputs.recruits = x}
            onChange={(event) => {
              this.setState({
                recruitsFile: event.target.files[0]
              });
            }}
          />
          <label htmlFor="users" >
            <RaisedButton label="Choose recruit file" onClick={() => {
              this.handleChooseFileClick('recruits')
            }}/>
          </label>
        </div>
          <RaisedButton label="Upload files" onClick={this.uploadFiles.bind(this)}/>
        </div>
      </section>
    );
  };
}
function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    uploadFiles(data) {
      console.log(data);
      dispatch(uploadFiles(data));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);