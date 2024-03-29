import React, { useState } from 'react'

function Conditionalrendering() {
    const[loggedid,setloggedid]=useState(false);
  if(loggedid){
    return (
        <div>
          <h1>welcome if condition..</h1>
        </div>
      )
  }
  else{
    return (
        <div>
          <h1>welcome else condition..</h1>
        </div>
      )
  }
}

export default Conditionalrendering
