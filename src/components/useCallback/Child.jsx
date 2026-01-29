import React from 'react'

// const Child = React.memo(function Child({onClick}) {
function Child({ onClick }){
    console.log("child rendered")
  return (
   <>
    <button onClick={onClick}>Child button</button>
   </>
  );
}

export default Child
