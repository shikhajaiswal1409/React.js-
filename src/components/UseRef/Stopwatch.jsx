/* import { useState, useRef } from "react";

function Stopwatch() {
  // UI state → causes re-render
  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(0);

  // Non-UI data → no re-render
  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>⏱ Stopwatch</h2>
      <p>Time: {time}s</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>

      <hr />

      <h2>🖱 Click Counter</h2>
      <p>Clicks: {clicks}</p>
      <button onClick={handleClick}>Click me</button>

      <hr />

      <h2>🎯 useRef DOM Example</h2>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Stopwatch;
*/


// import { useState } from "react";

// function Stopwatch() {
//   const [time, setTime] = useState(0);
//   let intervalId = null; // ❌ local variable

//   const startTimer = () => {
//     intervalId = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(intervalId); // ❌ often null
//   };

//   return (
//     <div>
//       <h2>Time: {time}s</h2>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// export default Stopwatch;

// “Will this value be needed after a re-render, but not shown in UI?”

// If YES → useRef
// We store setInterval in useRef because the interval ID must persist across renders, but it does not affect UI, so we avoid unnecessary re-renders.”
// useRef persists values across renders without causing re-renders, commonly used for DOM access and mutable logic values.”



// 3️⃣ Focus Input on Button Click

/*   import React, { useRef } from 'react'

const Stopwatch = () => {
  const inputRef = useRef(null)
  const handleFocus = ()=>{
    inputRef.current.focus(),
    console.log("focus")

  }
  return (
    <>
      <input type='text'
      placeholder='Focus here...'
      ref={inputRef}
      />
      <button onClick={handleFocus}>Focus</button>
    </>
  )
}

export default Stopwatch
*/


// 4️⃣ Render Counter (Without Re-render)

/* import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
  const renderCount = useRef(0)
  const[count, setCount] = useState(0)
  const[renderCount, setRenderCount] = useState(0)

    renderCount.current += 1;
   console.log(renderCount.current, "render");

    useEffect(()=>{
      setRenderCount(prev=>prev+1)
    },[count])


  return (
    <>
      <p>Component rendered: {renderCount.current} times</p>
      <p>{renderCount}</p>
    <p>Counter: {count}</p>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  )
}

export default Stopwatch


🔥 Final mental model (lock this in)
Goal	Hook
Update UI	useState
Track renders	useRef
Side effects	useEffect
Avoid infinite loops	Don’t set state during render/effect without deps
*/
/* import React, {useState} from "react";

const TodoList= React.memo(({addTodo})=>{
  console.log("TodoList Rendered");

  return(
    <>
      <button onClick={addTodo}>button</button>
    </>
  )

})
const Stopwatch = () => {
  const [text, setText] = useState("");
  const [dark, setDark] = useState(false);

  const addTodo = () => {
    console.log("Adding todo");
  };

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} value={text}/>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <TodoList addTodo={addTodo} />
    </>
  );
};

export default Stopwatch;
*/

import React, {useMemo, useState} from "react";


const Box = React.memo(({ styles }) => {
  console.log("Box rendered");
  return <div style={styles}>Box</div>;
});

const Stopwatch = () => {
  const [count, setCount] = useState(0);

  const styles =useMemo(()=> {
    return { color: "red" }
  
},[]) ;

  return (
    <>
    {count}
    <br /><br />
      <button onClick={() => setCount(count + 1)}>+</button>
          <br /><br />

      <Box styles={styles} />
    </>
  );
};

export default Stopwatch;


