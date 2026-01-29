/*Counter App

Create a component with a number starting at 0
Add:
➕ Increment button
➖ Decrement button
Display the current count 

import React, { useState } from 'react'

const UseState = () => {
    const[count, setCount] = useState(0)
        
  return (
    <>
        <button onClick={()=>setCount(count+1)}>Increase ➕</button>
        <br /><br />
        <button onClick={()=>{
            if(count>0)
            setCount(count-1)
            }}
>Decrease ➖</button>
        <br /><br />
        {count}

    </>
  )
}

export default UseState */

/*Toggle Text:   Use useState to toggle between:

"ON" and "OFF"
Button click should switch the text   */

// import React, {useState} from 'react'

// const UseState = () => {
//     const[toggle, setToggle] = useState(false)
//   return (
//     <>
//         <button onClick={()=>setToggle(!toggle)}>{toggle? "off": "on"}</button>
//     </>
//   )
// }

// export default UseState

// import React, { useState } from 'react'

// const UseState = () => {
//         const[toggle, setToggle] = useState(false)

//   return (
//     <>
     
//           {toggle && <h1>This is React code using useState</h1>}  {/* conditional rendering : Use && for conditional rendering when there is no else case. */}

//     {/* <h1>{toggle? "This is React code using useState": ""}</h1> */}
//         <button onClick={()=>setToggle(!toggle)}>Toggle button</button>
//     </>
//   )
// }

// export default UseState 

/*Input Field State
Create a text input
Display what the user types in real time
Use useState to store input value 

import React, { useState } from 'react'

const UseState = () => {
    const[text, setText] = useState("")
  return (
    <>
        <input type='text'
        placeholder='Type here...' 
            onChange={(e)=>setText(e.target.value)}
        />
    {text}

    </>
  )
}

export default UseState */

/*Change Background Color

Button click changes background color
Example: white ↔ blue
Store color in state 

import React, { useState } from 'react'

const UseState = () => {
    const[bgColor, setBgColor] = useState("green")
  return (
   <>
   <div
    style={{backgroundColor: bgColor,
    height: "100vh"
    }}>
    <button onClick={()=>setBgColor(bgColor==="green"? "Blue": "green")}>Background-color</button>
    </div>
   </>
  )
}

export default UseState */


 /*  Multiple State Values
Create a form with:
Name
Email
Display submitted values on button click */

/*   import React, { useState } from 'react'

const UseState = () => {
    const[state, setState] = useState(
        {
            name: "",
            email: "",

        })
        const[submittedData, setSubmittedData]= useState(null)

    const handleChange=(e)=>{
        setState({
            ...state, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmittedData(state)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Enter name here..'
        name='name'
        value={state.name}
        onChange={handleChange}
        />

        <input type='email'
        placeholder='Enter your email here'
        name='email'
        value={state.email}
        onChange={handleChange}

        />

        <button type='submit'>Submit</button>
        </form>
        {submittedData &&
            <div>
                <p>Name: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
            </div>

        }
      

    </>
  )
}

export default UseState  */

/* Character Counter

Textarea input
Show number of characters typed
Update count dynamically */

/* import React, { useState } from 'react'

const UseState = () => {
    const[text, setText] = useState("")
  return (
    <>
        <input type='text'
        placeholder='Type here...'
        onChange={(e)=> setText(e.target.value)}
        value={text}
         />
         <div>
            <h1>Number of characters typed: {text.length} </h1>
         </div>

    </>
  )
}

export default UseState    */

/*   Todo List (Basic)
Input field to add todos
Display list of todos
Clear input after adding    */

/* import React, { useState } from 'react'

const UseState = () => {
    const[todo, setTodo]=useState("")
    const[todos, setTodos]=useState([])

    const handleAdd=()=>{
        if(todo.trim() ==="") return
        setTodos(prev=>[...prev, todo])
    }

    const handleDelete=()=>{
        setTodos("")
    }
  return (
    <>
        <input type='text'
        placeholder='Add Todo here..'
        onChange={(e)=>setTodo(e.target.value)}
        value={todo}
        />
        <button onClick={handleAdd}>Add</button>
<br /><br />
        
        
            <h2>List of todos</h2>
            <br /><br />   
        
        <ul>
            {todos.map((item, index)=>(
                <li key={index}>{item}
                <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>
                            

            ))}
        </ul>
        
    </>
  )
}

export default UseState */



/*            Button toggles between:

Login form
Logout message
Use boolean state       

import React, { useState } from 'react'

const UseState = () => {
    const[name, setName]= useState({
        email: "",
        password: "",
    })

    const[isLoggedIn, setIsLoggedIn]= useState(false)

    const handleChange=(e)=>{
        setName({...name, [e.target.name]: e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsLoggedIn(true)
    }

    const handleLogout=()=>{
        setIsLoggedIn(false)
        setName({email: "", password:""})
    }


  return (
    <>
    {!isLoggedIn? (
        <form onSubmit={handleSubmit}>
            <input type='email'
            name="email"
            placeholder='Enter your mail'
            value={name.email} 
            onChange={handleChange}
            />

            <input type='password'
            name='password'
            placeholder='Password'
            value={name.password}
            onChange={handleChange}
            />

                    <button type='submit'>Login</button>
    

        </form>
    ):(
        <>

        <h2>Logout</h2>

        <button onClick={handleLogout}>Logout</button>
        </>
    )}
    </>
  )
}

export default UseState                 */

/*     Counter with Step Value
Counter with:
Input for step value
Increment by entered step
Store step in state       

import React, {useState} from 'react'

const UseState= () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const handleIncrement = () => {
    setCount(prev => prev + step)
  }

  const handleDecrement = () => {
    setCount(prev => Math.max(0, prev - step))
  }

  return (
    <>
      <h2>Counter: {count}</h2>

      <input
        type='number'
        placeholder='Enter step value'
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </>
  )
}

export default UseState    */

/* Todo List (CRUD)
Add todos
Delete todos
Mark todos as completed
Use array state  

🔑 Key Takeaways

✔ map updates items
✔ filter removes items
✔ Spread operator prevents mutation
✔ Boolean toggle uses ! */

import React, { useState } from 'react'
const UseState = () => {

const[todo, setTodo] = useState("")
const[todos, setTodos] = useState([])

const handleAdd=()=>{
  if(todo.trim()==="") return
  setTodos(prev=>[...prev, {text: todo, completed: false}])

  setTodo("")
}

const handleDelete=(indexToDelete)=>{
  setTodos(prev=>prev.filter((_, index) => index!== indexToDelete))
}

const handleToggle=(indexToToggle)=>{
  setTodos(prev=>prev.map((item, index)=>index===indexToToggle?
  {...item, completed: !item.completed} : item

))
  
}

  return (
    <>
      <input type='text'
      placeholder='Add todos here'
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

             <h1>Todo List</h1>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              onClick={() => handleToggle(index)}
            >
              {item.text}
            </span>

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UseState


