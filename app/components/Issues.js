import React from 'react';
import {Link} from 'react-router';
import IssuesStore from '../stores/IssuesStore';
import IssuesActions from '../actions/IssuesActions';

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = IssuesStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    IssuesStore.listen(this.onChange);
    IssuesActions.getIssues();
  }

  componentWillUnmount() {
    IssuesStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let issues = this.state.issues.map((data) => {
      return (
        <tr key={data.id}>
          <td><a href={data.url}>{data.title}</a></td>
          <td>{data.number}</td>
          <td>{data.username}</td>
          <td>{data.state}</td>
        </tr>
      );
    });

    return (
      <div className='container'>
        <div className='panel panel-default'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <td colSpan='1'>Title</td>
                <td colSpan='1'>Number</td>
                <td colSpan='1'>Username</td>
                <td colSpan='1'>State</td>
              </tr>
            </thead>
            <tbody>
              {issues}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Issues;