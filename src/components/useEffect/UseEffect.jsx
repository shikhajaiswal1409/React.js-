/* import React, { useEffect } from 'react'

const UseEffect = () => {
    useEffect(()=>{
        console.log("component mounted")
    },[]);

  return (
    <>
        <h1>Hello useEffect</h1>
    </>
  )
}

export default UseEffect  */

/* *******Update Document Title

Goal:
Create a counter. Every time the count changes, update the document title to:
Count: X       */

/*   import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count, setCount] = useState(0)
    useEffect(()=>{
        document.title= `Count: ${count}`;
    },[count])
  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Button</button>

    </>
  )
}

export default UseEffect  */

/*  ********    Simple Timer

Goal:
Start a timer that increases a number every second.   */

/*    import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[timer, setTimer] = useState(0)

     useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTimer(prev=>prev+1)
        },1000)

        return()=>clearInterval(intervalId)
    },[]);

  return (
    <>
       <h1>Start:{timer} </h1> 
    </>
  )
}

export default UseEffect   */



/*           5. ****** Fetch Data on Mount

Goal:
Fetch users from https://jsonplaceholder.typicode.com/users and display names.     */

/*       import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const[user, setUser] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)

    useEffect(()=>{
        const fetchUsers = async()=>{
       try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users");

        const data=await response.json();
        setUser(data);
       }catch(err){
        setError(err.message)

       }finally{
        setLoading(false)
       }

        };
        fetchUsers();

    },[]);

    if(loading) return <p>loading.....</p>
    if(error) return <p>Error: {error}</p>
  return (
    <>
        <ul>
        {user.map((users)=>(
        <li>
        Users: {users.name}

        </li>
        ))}
        </ul>
    </>
  )
}

export default UseEffect                  */


/*       import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[query, setQuery] = useState("");
    const[results, setResults] = useState([]);

    useEffect(()=>{
        if(!query){
             setResults([]);
            return;
        }

        const timer= setTimeout(()=>{
                 fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)

                 .then(res=>res.json())
                 .then(data=>setResults(data))
        }, 1000);

            // cleanup: cancel previous timer
        return()=>clearTimeout(timer);
    },[query]);
    
  return (
    <>
        <input type='text'
        placeholder='Search here...'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}   />

        <ul>
        {results.map(user=>(
            <li key={user.id}>user.name</li>
            ))}
        </ul>
    </>
  )
}

export default UseEffect       */

 /* import React, { useEffect, useState } from 'react'{

const UseEffect = () => {

  const[query, setQuery] = useState("")
  const[result, setResult] = useState([])

  useEffect(()=>{

    if(!query){
      setResult([]);
      return;
    }

    const timer=setTimeout(()=>{
    fetch("....")
    .then(res=>res.json)
    .then(data=>setResult(data))
    },1000)

    return()=>clearTimeout(timer)
  },[query])
  
  return (
    <>
      <input type='search'
      placeholder='search here...'
      onChange={(e)=> setQuery(e.target.value)} />

      {result.map((user)=>(

      <li key={user.id}>user.name</li>
      
      ))
      }
    </>
  )
}

export default UseEffect
 } */

// Goal:  Fetch users from https://jsonplaceholder.typicode.com/users and display names.     

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const[users, setUsers] = useState([])
  const[loading, setLoading] = useState(true)
  const[error, setError]= useState(false)

  // useEffect(()=>{
  //   const fetchUsers= async()=>{
  //     try{
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //       const data = res.json();
  //       setUsers(data);

  //     }catch(err){
  //       setError(err.message);
  //     }finally{
  //       setLoading(false)
  //     }
  //   }

  //   fetchUsers();
  // },[])


  useEffect(()=>{
    const fetchUsers = async()=>{
      try{
        const res = await fetch("....")
        const data = res.json();
        setUsers(data)
      }catch(err){
        setError(err.message)
      }finally{
        setLoading(false)
      }
    }
    fetchUsers()
    
  },[])

    if(loading) return <p>loading....</p>
  if(error) return <p>error: {error}</p>
  return (
   <>
   <ul>
   {users.map((user)=>(
    <li key={user.id}>user.name</li>
   
))}
</ul>
   </>
  )
}

export default UseEffect






