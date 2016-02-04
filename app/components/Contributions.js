import React from 'react';
import {Link} from 'react-router';
import ContributionsStore from '../stores/ContributionsStore';
import ContributionsActions from '../actions/ContributionsActions';

class Contributions extends React.Component {
  constructor(props) {
    super(props);
    this.state = ContributionsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ContributionsStore.listen(this.onChange);
    ContributionsActions.getContributions();
  }

  componentWillUnmount() {
    ContributionsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let contributions = this.state.contributions.map((data) => {
      return (
          <tr key={data.id}>
            <td>{data.username}</td>
            <td>{data.contributions}</td>
          </tr>
      );
    });
    
    return (
      <div className='container'>
        <div className='panel panel-default'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <td colSpan='1'>Username</td>
                <td colSpan='1'>Contributions</td>
              </tr>
            </thead>
            <tbody>
              {contributions}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contributions;