import React,{useState} from 'react';

const ChildToParent = ({data})=>{
    
    const childData = "Data from child to parent"
    
    const handleClick =()=>{
        data(childData)
    }

    return(
        <>
        
        <button onClick={handleClick}>Change Parent Text</button>
        </>
    )
}

export default ChildToParent