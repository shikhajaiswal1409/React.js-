// import React, { useState } from "react";

// const Checkbox = () => {
//   const [inputs, setInputs] = useState([
//     {
//       data: "checkbox1",
//       isChecked: false,
//       id: 1,
//     },
//     {
//       data: "checkbox2",
//       isChecked: false,
//       id: 2,
//     },
//     {
//       data: "checkbox3",
//       isChecked: false,
//       id: 3,
//     },
//   ]);

//   // handle checkbox change
//   const handleChange = (id) => {
//     const updatedInputs = inputs.map((input) =>
//       input.id === id
//         ? { ...input, isChecked: !input.isChecked }
//         : input
//     );

//     setInputs(updatedInputs);
//   };

//   // check if ALL checkboxes are checked
//   const allChecked = inputs.every((input) => input.isChecked);

//   return (
//     <>
//       {inputs.map((input) => (
//         <label key={input.id}>
//           <input
//             type="checkbox"
//             checked={input.isChecked}
//             onChange={() => handleChange(input.id)}
//           />
//           {input.data}
//           <br />
//         </label>  
//       ))}

//       <br />

//       <button disabled={!allChecked}>
//         Submit
//       </button>

//       {!allChecked && <p>Please check all checkboxes</p>}
//     </>
//   );
// };

// export default Checkbox;

import React, {useState} from "react";

const Checkbox = () => {

const[inputs, setInputs] = useState([
    {
    data: "checkbox1",
    isChecked: false,
    id: 1,
    },

    {
        data: "checkbox2",
        isChecked: false,
        id: 2
    },
    {
        data: "Checkbox3",
        isChecked: false,
        id: 3
    }
])

const handleChange=(id)=>{
    const updatedInputs = inputs.map((input)=>
        input.id === id ? {...input, isChecked: !input.isChecked}: input
        
    );

    setInputs(updatedInputs)
}
  const allChecked = inputs.every((input) => input.isChecked);


  return (
    <>
    {inputs.map((input)=>
        <input type='checkbox'
        checked={input.isChecked}
        onChange={()=>handleChange(input.id)}/>
        )}

        <button disabled= {!allChecked}>Submit</button>
    </>
  )
}

export default Checkbox

