

import React,{useState} from 'react';
import  Toolbar from './components/Toolbar/Toolbar';
import Sidedrawer from './components/sidedrawer/sidedrawer';
import Backdrop from './components/Backdrop/backdrop';
import "./App.css";

const App=props => 
  
  
  {

    const [drawerState,setDrawerstate] = useState({

                   sideDrawerOpen:false

});

  const drawerToggleClickhandler=()=>
  {

    setDrawerstate((prevstate)=>
    {
                   return {sideDrawerOpen:!prevstate.sideDrawerOpen};
    
    }); 
    };
  
const backdropClickHandler=()=>{
  setDrawerstate({
    sideDrawerOpen:false
  })
}


let sdrawer;
let backdrop;

if(drawerState.sideDrawerOpen===true)
{
      
  sdrawer=  <Sidedrawer/>
  backdrop=    <Backdrop click={backdropClickHandler}/>
}
  return (
    
    <div style={{height:'100%'}}>
       <Toolbar drawerClickHandler={drawerToggleClickhandler}/>
       {sdrawer}
       {backdrop}
       <main style={{marginTop:'56px'}}>   
       </main>
      
          </div>
         
          )
  }


export default App;
