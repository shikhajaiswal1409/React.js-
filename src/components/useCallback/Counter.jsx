import React,{useState, useCallback} from 'react'
import Child from './Child';

const Counter = () => {
    const[count, setCount] = useState(0);
    const handleClick = useCallback(()=>{
        console.log("child button clicked")

    },[])

    // const handleClick=()=>{
    //     console.log("Child button clicked")
    // }

    console.log("Parent rendered")
  return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
        <Child onClick={handleClick} />
    </>
  )
}

export default Counter

/*How professionals decide

Ask 3 questions:
Is this function passed to a child?
Is the child memoized (React.memo)?
Is there a real performance problem?
If any answer is NO → don’t use useCallback

Am I passing functions, objects, or arrays?”
Function → useCallback
Object / Array → useMemo 

Is something expensive to calculate? → useMemo
Is a function passed to a memoized child? → useCallback
Is it simple UI logic? → ❌ Neither 

🧠 QUICK DECISION TABLE
Situation	Use
Expensive calculation	useMemo
Function passed to memo child	useCallback
Simple UI logic	Nothing
Object / array prop	useMemo
Debugging / state tracking	useRef      */