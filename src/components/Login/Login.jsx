// import React, {useState} from 'react'
// import { Wrapper } from './LoginStyled'
// import { loginFormData } from '../../api/form';
// import { Button } from '@mui/material';

// const Login = () => {
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

//         try{
//             const result = await loginFormData(item)
//             console.log(result)
//             alert("Form submitted succesfully")


//         }catch(err){
//             console.log(err, 'error')
//             alert("Error")

//         }

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


//                 />
//             </div>
//             <div className='container2'>
//             <label htmlFor='password' className='label'>Password</label>
//                 <input
//                  className='input'
//                   type='password'
//                 name='password'
//                 id='password'
//                 placeholder='Password'
//                 value={item.password}
//                 onChange={handleChange}
//                 />
//             </div>
//             <Button variant="contained" className='btn' type='submit' >Submit</Button>
//             </div>
//         </Wrapper>
//         </form>
//     </>
//   )
// }

// export default Login

import React, { useEffect, useState } from "react";
import { Wrapper } from "./LoginStyled";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
 

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);

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
    dispatch(loginUser(item));
  };

  useEffect(()=>{
    if(user){
      navigate("/");
    }
  },[user,navigate]);

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
            />
          </div>

          <Button
            variant="contained"
            className="btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Submit"}
          </Button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </Wrapper>
    </form>
  );
};

export default Login;
