// import React,{useState} from 'react'

// const Radio = () => {
//     const[selected, setSelected] = useState("")

//     const options = [
//         {
//             label: "male", value: "M"

//         },
//         {
//             label: "female", value: "F"
//         }
//     ]
//   return (
//     <>
//         <h1>Select an option</h1>
//         {options.map((option)=>(
//         <label key={option.value}>
//             <input type='radio'
//             name='options'
//             value={option.value}
//             checked={selected === option.value}
//             onChange={(e)=>setSelected(e.target.value)} />

//             {option.label}
//         </label>
                

//         ))}
//         <h1>{selected}</h1>
        


//     </>
//   )
// }

// export default Radio



/* import React, { useEffect, useState } from 'react'

const Radio = () => {
    const[selected, setSelected] = useState("")
    
    useEffect(()=>{
        console.log(selected, "sel")
    },[selected])

  return (
    <>
        <select 
        value={selected}
        onChange={(e)=>setSelected(e.target.value)}>

        <option value="" disabled>Select type</option>
        <option value="radio">Radio Select</option>
        <option value="Input">Input Select</option>
        <option value="checkbox">Checkbox select</option>

        </select>

        {selected=="radio" &&(
        <div>
        <label>
            <input type='radio' name='radio' />
            option A
            </label>
            <label>
                <input type='radio' name='radio' />
                Option B
            </label>
        </div>
        
        )}

        {selected=="Input" && (
            <div>
                <input type='text'
                placeholder='Enter value' />
            </div>
        )}

        {selected=="checkbox" && (
            <div>
                <label>
                    <input type='checkbox' />
                    Option A
                </label>

                <label>
                    <input type='checkbox' />
                    Option B
                </label>
            </div>
        )}
    </>
  )
}

export default Radio

The shared name="radio" means:

Only one radio button can be selected at a time
They behave as a group (correct radio behavior)  */


import React, { useState } from 'react'

const Radio = () => {
    const[selected, setSelected] = useState("")
    const renderField=()=>{
        switch(selected){
            case "radio":
        return(
        <div>
            <label>
                <input type="radio" name='radio' />
                Option A
            </label>
            <label>
                <input type='radio' name='radio' />
                Option B
            </label>
        </div>
        )

        case "input":
            return <input type='text' placeholder='Enter text here....' />

                case "checkbox":
                    return(
                        <div>
                            <label>
                                <input type='checkbox' />
                                Option A
                            </label>
                            <input type='checkbox' />
                            Option B
                        </div>
                    )

                    default: 
                    return null
                }
            }

return (
    <>
    <div>
        <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
        <option value="" disabled>Selected Type</option>
            <option value="radio">Radio</option>
            <option value="input">Input</option>
            <option value="checkbox">Checkbox</option>
        </select>
    </div>

    {renderField()}

    </>

)
    }

export default Radio
