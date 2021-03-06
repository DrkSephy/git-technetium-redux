import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contributions'>Contributions</Link></li>
            <li><Link to='/issues'>Issues</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;