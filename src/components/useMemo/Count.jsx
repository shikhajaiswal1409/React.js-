import React, {useState, useMemo} from 'react'

/* 🧠 What is useMemo?  useMemo remembers the result of a calculation so React doesn’t redo it again and again.
Syntax
const value = useMemo(() => {
  return expensiveCalculation;
 }, [dependencies]);  
 First argument → function that returns a value     *Second argument → when to recalculate 
When SHOULD you use useMemo?

✔ Heavy calculations
✔ Filtering large lists
✔ Preventing unnecessary recalculations
✔ Performance optimization */

const Count = () => {
    const[count, setCount] = useState(0);
    const result = useMemo(()=>{
        return slowFunction(5);
    },[]);
  return (
   <>
   <button onClick={()=>setCount(count+1)}>Click</button>
   <h1>{result}</h1>
   </>
  )
}

export default Count
