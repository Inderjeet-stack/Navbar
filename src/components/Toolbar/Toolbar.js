

import React from 'react';
import './Toolbar.css';
import Drawerbutton from '../sidedrawer/drawerbutton'

const toolbar= props => (

<header className="toolbar">
<nav className="toolbar_navigation">

<div>

<Drawerbutton click={props.drawerClickHandler}/>

</div>
<div className="toolbar_logo"><a href="/">Voster-X</a></div>                                                                        
<div className="spacer"></div>
<div className="toolbar_navigation_items">
      
     <ul>
        <li><a href="/">Home</a></li>                                                                  
        <li><a href="/">Booking</a></li>
         <li><a href="/">Schedule</a></li>
          <li><a href="/">About Us</a></li>
      
     </ul>

 </div>
</nav>
</header>

	);

export default toolbar;