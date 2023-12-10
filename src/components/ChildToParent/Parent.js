import React,{useState} from 'react';
import ChildToParent from './index.js';

const Parent = ()=>{
    const [parentData,setParentData] =useState("I am Parent")

    const RecieveFromChild = (data)=>{
        setParentData(data);
      }

    return(
        <div>
            
        <h1>{parentData}</h1>    
        <ChildToParent data={RecieveFromChild} />
        </div>
    )
}


export default Parent