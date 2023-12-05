import React, { useState } from "react";
function App(){
     const [data,setData]=useState(0)
function UpdateData(){
    setData (data+1)
}

    return(
    <div className='App'>
              <h1>{data}</h1>
              <button onClick={UpdateData}>UpdateData</button>
            </div>
           )
}
export default App;