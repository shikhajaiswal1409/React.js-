// import React, {useState} from 'react'
// import { Wrapper } from './SignupStyled'
// import { signupFormData} from '../../api/form';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
// const Signup = () => {
//     const[item, setItem] = useState(
//         {
//             email: "",
//             password: "",

//     } )

//     const handleChange=(e)=>{
//         setItem({...item, [e.target.name]: e.target.value

//         });
//     };



//     const handleSubmit= async(e)=>{
//         e.preventDefault();
// if(item.email && item.password){
//         try{
                   

//             const result = await signupFormData(item)
//             console.log(result)
//             alert("Form submitted succesfully")


//         }catch(err){
//             console.log(err, 'error')
//             alert("Error")

//         }
//     }

    

//     }
//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <Wrapper>
//         <div className='box'>

//             <div className='container1'>
//             <label htmlFor='email'>Email</label>
//                 <input className='input'
//                  type='email' 
//                 name='email'
//                 id='email'
//                 placeholder='Enter your email' 
//                 value={item.email}
//                 onChange={handleChange}
//                 required


//                 />
//             </div>
//             <div className='container2'>
//             <label htmlFor='password'className='label'>Password</label>
//                 <input
//                  className='input'
//                   type='password'
//                 name='password'
//                 id='password'
//                 placeholder='Password'
//                 value={item.password}
//                 onChange={handleChange}
//                 required
//                 />
//             </div>
//             {/* <button className='btn' type='submit'>Submit</button> */}
//             <Button variant="contained" className='btn' type='submit' >Submit</Button>


//             <Link to="/login">Already have an account</Link>

//             </div>
//         </Wrapper>
//         </form>
//     </>
//   )
// }

// export default Signup

import React, { useEffect, useState } from "react";
import { Wrapper } from "./SignupStyled";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const { loading, error, user} = useSelector((state) => state.auth);

  const [item, setItem] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item.email && item.password) {
      dispatch(signupUser(item));
    }
  };

  useEffect(()=>{
    if(user){
navigate("/")
    }
  },[user, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <div className="box">
          <div className="container1">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={item.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="container2">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={item.password}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            variant="contained"
            className="btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Submit"}
          </Button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Link to="/login">Already have an account</Link>
        </div>
      </Wrapper>
    </form>
  );
};

export default Signup;


/*
┌────────────────────┐
│  User fills form   │
│  (email/password)  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Submit button     │
│  handleSubmit()    │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ dispatch(signupUser)│
│ (Redux Thunk)      │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ API Request        │
│ (signup endpoint)  │
└─────────┬──────────┘
          │
   ┌──────┴───────┐
   │              │
   ▼              ▼
┌────────────┐  ┌─────────────────┐
│  FAILURE   │  │    SUCCESS       │
│ (error)    │  │ (user created)   │
└────┬───────┘  └─────────┬───────┘
     │                    │
     ▼                    ▼
┌────────────┐   ┌────────────────────┐
│ error set  │   │ state.user updated  │
│ in Redux   │   │ in authSlice        │
└────┬───────┘   └─────────┬──────────┘
     │                     │
     ▼                     ▼
┌────────────┐   ┌────────────────────┐
│ UI shows   │   │ Component re-renders│
│ error msg  │   │ (useSelector sees   │
│            │   │ new user)           │
└────────────┘   └─────────┬──────────┘
                            │
                            ▼
                  ┌────────────────────┐
                  │ useEffect runs      │
                  │ user !== null       │
                  └─────────┬──────────┘
                            │
                            ▼
                  ┌────────────────────┐
                  │ navigate("/login") │
                  │ or "/dashboard"    │
                  └────────────────────┘
*/

