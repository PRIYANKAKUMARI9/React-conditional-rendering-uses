import React, { useState } from 'react'

function TernaryOprator() {
    const[tarnaryy,settarnaryy]=useState(false)
    const[count,setcount]=useState(7)
  return (
    <div>
      {tarnaryy ? <h1>ternary oprator true</h1> : <h1>ternary oprator false</h1>}


      {count==1? <h1>even no -1</h1> 
      :count==2?<h1>even no -2</h1>
      :count==3?<h1>even no -3</h1>
      :count==4?<h1>even no -4</h1>
      :count==5?<h1>even no -5</h1>
      :<h1>last</h1>
    }
    </div>
  )
}

export default TernaryOprator
