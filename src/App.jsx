

import { Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion/Accordion";
import Card from "./components/Card/Card";
import Checkbox from "./components/Checkbox/Checkbox";
import Form1 from "./components/Form1/Form1";
import Radio from "./components/Radio/Radio";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
// import TypingTracker from "./components/UseRef/TypingTracker";
import Stopwatch from "./components/UseRef/Stopwatch";
import Counter from "./components/useCallback/Counter";
import Dashboard from "./components/useCallback/Dashboard";
import UseState from "./components/useState/UseState";
import BasicModal from "./components/UseRef/BasicModal";
import Wishlist from "./components/wishlist/Wishlist";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import ProtectedLayout from "./components/Protected/ProtectedLayout";
import Table from "./components/Table/Table";
import Todo from "./components/Todo/Todo";
// import UseEffect from "./components/useEffect/UseEffect";


function App() {

  return(
    <>
    <Routes>
        <Route path="/radio" element={<Radio />} />

    <Route path="/table" element={<Table />} />
    <Route path="/todo" element={<Todo />} />

    
        <Route path="/useRef" element={<Stopwatch />} />


    {/* Public Route */}

     <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    {/* Protected Route */}

    <Route element={
      <ProtectedRoute>
<ProtectedLayout />    
    </ProtectedRoute>
    }>

    <Route path="/" element={ <ProtectedRoute><Form1 /></ProtectedRoute>} />
    <Route path="/card" element={<Card />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/accordion" element={<Accordion />} />
    
    

</Route>


    </Routes>
</>
  )
}

export default App;

 {/* <Route path="/radio" element={<Radio />} /> */}
    {/* <Route path="/tracker" element={<TypingTracker />} /> */}
    {/* <Route path="/stopwatch" element={<Stopwatch />} /> */}
    {/* <Route path="/counter" element={<Counter />} /> */}
    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    {/* <Route path="/useState" element={<UseState />} /> */}
    {/* <Route path="/useEffect" element={<UseEffect />} /> */}
    {/* <Route path="/useRef" element={<BasicModal />} /> */}
        {/* <Route path="/checkbox" element={<Checkbox />} /> */}
