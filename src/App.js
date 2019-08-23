import React from 'react';
import {NavLink} from 'react-router-dom'

import Router from './Router';

// var divStyle = {
//   color: 'white',
//   backgroundColor: '#cb9b8c',
//  // 'ms' is the only lowercase vendor prefix
// };

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
  </ul>
</nav>

function App() {
  return (
    <div  className="page-container">
      <h1>My Shoping Cart</h1>
      <Navigation></Navigation>
      <Router>
        
      </Router>

    </div>
  );
}

export default App;
