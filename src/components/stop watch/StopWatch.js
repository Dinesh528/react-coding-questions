import React,{useState,useEffect} from "react";

const StopWatch = () =>{
    const [value,setValue] = useState(0)
    const [isStated,setIsStarted] = useState(false);

    useEffect(()=>{
        let timer
        if(isStated){
             timer = setInterval(() => {
               setValue((prev)=>prev+1) 
            }, 1000);

        }
        return ()=>{
            clearInterval(timer)
        }

    },[isStated])
    return(
        <div>
            <p>Time : {value}</p>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
            <div >
                <button onClick={()=>{ setIsStarted(true)}}>Start</button>
            </div>
            <div>
                <button onClick={()=>{ setIsStarted(false)}}>
                    pause
                </button>
            </div>
            <div>
                <button onClick={()=>{setValue(0)}}>Reset</button>
            </div>
            </div>
        </div>
    )
}

export default StopWatch